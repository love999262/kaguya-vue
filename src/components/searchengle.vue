<template>
    <div :class="`${prefix}-bar`">
        <button :class="`${prefix}-bar-container-btn`" @click="handleContainerBtnClick">
            {{search.searchBtnName}}
        </button>
        <ul :class="`${prefix}-bar-container-dropmenu`" :style="dropmenuStyle">
            <li v-for="item in searchEngineList" :key="item.name" :class="`${prefix}-bar-container-dropmenu-searchengine`" @click="handleEngleClick(item)">
                {{item.name}}
            </li>
        </ul>
        <button :class="`${prefix}-bar-container-panel`" @click="handleContainerPanelClick"></button>
        <div>
            <input ref="input" type="text" v-model="inputVal" placeholder='Open The Door To A Whole New World!!!' :class="`${prefix}-bar-input`" @focus="handleInputFocus" @blur="handleInputBlur" @keydown="handleSearchEvent($event)" @change="handleInputChange($event)">
            <ul :class="`${prefix}-bar-search-history`" :style="historyPanelStyle">
                <li v-for="listInfo in searchArray" :key="listInfo" :class="`${prefix}-bar-search-history-list`" :title="listInfo" :style="historyListStyle" @click="handleSearchEvent($event, listInfo)">
                    {{listInfo}}
                </li>
            </ul>
        </div>
        <button :class="`${prefix}-bar-btn`" @click="handleSearchEvent($event)" :style="searchBtnStyle"></button>
    </div>
</template>

<script>
    import searchEngineList from './searchengle-list.js';
    import utils from './utils';
    export default {
        name: 'searchengle',
        components: {
            searchEngineList,
            utils
        },
        methods: {
            handleContainerBtnClick: function () {
                window.open(this.search.searchBtnHref);
            },
            handleContainerPanelClick: function () {
                this.dropmenuStyle = {
                    display: this.dropmenuStyle.display === 'none' ? 'block' : 'none'
                };
            },
            handleInputFocus: function () {
                this.historyPanelStyle = {
                    display: 'block'
                };
            },
            handleInputBlur: function () {
                setTimeout(() => {
                    this.historyPanelStyle = {
                        display: 'none'
                    };
                }, 300);
            },
            handleSearchEvent: function (e, listInfo) {
                if ((e.type === 'keydown' && e.keyCode === 13) || e.type === 'click') {
                    if (!this.inputVal) {
                        return;
                    }
                    console.log('inputVal', this.inputVal);
                    const val = typeof listInfo === 'string' ? encodeURIComponent(listInfo) : encodeURIComponent(this.inputVal);
                    console.log('val', val);
                    window.open(this.search.searchInterface + val);
                    const searchHistory = this.searchArray.slice();
                    for (let i = 0; i < searchHistory.length; i++) {
                        if (this.inputVal === searchHistory[i]) {
                            return;
                        }
                    }
                    searchHistory.push(this.inputVal);
                    this.searchArray = searchHistory;
                }
            },
            handleInputChange: function (e) {
                this.inputVal = e.target.value;
            },
            handleEngleClick: function (engine) {
                this.search = {
                    searchInterface: engine.url,
                    searchBtnHref: engine.href,
                    searchBtnName: engine.name
                };
                this.dropmenuStyle = {
                    display: this.dropmenuStyle.display === 'none' ? 'block' : 'none'
                };
            }
        },

        data () {
            return {
                prefix: 'kaguya-search',
                search: {
                    searchInterface: 'https://www.baidu.com/s?wd=',
                    searchBtnHref: 'https://www.baidu.com/',
                    searchBtnName: 'baidu',
                    searchEngleList: searchEngineList
                },
                searchEngineList: searchEngineList,
                utils: utils,
                inputVal: '',
                searchArray: [],
                currentDate: new Date().toString(),
                dropmenuStyle: {
                    display: 'none'
                },
                searchBtnStyle: {
                    backgroundColor: utils.getRandomColor()
                },
                historyPanelStyle: {

                },
                historyListStyle: {

                }
            };
        },

        created: function () {
            document.addEventListener('click', (e) => {
                if (e.target.className !== `${this.prefix}-bar-container-panel`) {
                    this.dropmenuStyle = {
                        display: 'none'
                    };
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.keyCode !== 192) {
                    if (document.activeElement.className !== `${this.prefix}-bar-input`) {
                        this.$refs.input.focus();
                    }
                }
            });
        }
    };
</script>


<style lang="scss" scoped>
    @import './../style/global.scss';
    .#{$kaguya} {
        &-search {
            &-bar {
                height: $h;
                @include setShadow;
                display: flex;
                align-items: center;
                margin: 0 auto;
                &-container {
                    height: inherit;
                    float: left;
                    &-btn {
                        height: inherit;
                        float: left;
                        // border: 1px solid $btn-border-color;
                        background-color: $btn-color;
                        cursor: pointer;
                        padding: 6px 12px;
                        &:hover {
                            background-color: $btn-hover-color;
                            border-color: $btn-border-color;
                        }
                        &:active {
                            background-color: $btn-active-color;
                            border-color: $btn-active-border-color;
                        }
                    }
                    &-panel {
                        height: inherit;
                        float: left;
                        border: 1px solid $btn-border-color;
                        background: url(../images/down.svg) 5px 10px no-repeat;
                        background-size: 12px;
                        line-height: 36px;
                        width: 24px;
                        background-color: $btn-color;
                        cursor: pointer;
                        padding: 6px 8px;
                        &:hover {
                            background-color: $btn-hover-color;
                            border-color: $btn-border-color;
                        }
                        &:active {
                            background-color: $btn-active-color;
                            border-color: $btn-active-border-color;
                        }
                    }
                    &-dropmenu {
                        position: absolute;
                        background-color: $white;
                        color: $dark;
                        top: calc(100% + .5rem);
                        z-index: 9999999;
                        @include setShadow;
                        &-searchengine {
                            color: $dark;
                            padding: 10px 30px;
                            border-bottom: 1px solid $gray;
                            cursor: pointer;
                            &:hover {
                                background-color: $gray;
                            }
                        }
                    }
                }
                &-input {
                    height: $h;
                    width: $input-w;
                    float: left;
                    color: $dark;
                    // border: 1px solid $gray;
                    text-indent: .5rem;
                }
                &-btn {
                    width: $h;
                    height: $h;
                    float: left;
                    cursor: pointer;
                    color: $white;
                    background: url(../images/search.svg) 2px 8px no-repeat;
                    background-color: #5BC0DE;
                    background-size: 32px;
                    &:hover {
                        background-color: $btn-hover-color;
                        border-color: $btn-border-color;
                    }
                    &:active {
                        background-color: $btn-active-color;
                        border-color: $btn-active-border-color;
                    }
                }
                &-search-history {
                    display: none;
                    width: 560px;
                    position: absolute;
                    top: 46px;
                    background: rgba(255,255,255,.9);
                    @include setShadow;
                    z-index: 99;
                    overflow: hidden;
                    &-list{
                        color: $dark;
                        text-align: left;
                        text-indent: .5rem;
                        border-bottom: 1px solid $gray;
                        height: 32px;
                        line-height: 32px;
                        &:hover {
                            background-color: $b-blue !important;
                            color: $white;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
