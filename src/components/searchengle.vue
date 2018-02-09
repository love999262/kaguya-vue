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


<style>

</style>
