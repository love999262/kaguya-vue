<template>
    <div :class="`${prefix}-panel`">
        <ul v-for="(value, key) in websites[0]" :key="key" :class="`${prefix}-panel-nav`">
            <li :class="`${prefix}-panel-nav-list-title`" :key="key" :style="`backgroundColor: ${getRandomColor()}`">{{ key }}</li>
            <li :class="`${prefix}-panel-nav-list`" :key="_key" v-for="(_value, _key) in value" @click="handleNavClick(_value)" >
                {{ _key }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import utils from './utils';
    export default {
        name: 'navigates',
        components: {
            utils
        },
        methods: {
            handleNavClick: function (href) {
                window.open(href);
            }
        },
        computed: {
            ...mapState({
                websites: state => state.websites.websites
            })
        },
        data () {
            return {
                prefix: 'kaguya-search',
                getRandomColor: utils.getRandomColor
            };
        }
    };
</script>


<style lang="scss" scoped>
    @import './../style/global.scss';
    .#{$kaguya} {
        &-search {
            &-panel {
                // @include setShadow;
                color: $gray;
                margin: 3rem auto;
                display: flex;
                // flex-direction: row;
                // flex-wrap: nowrap;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: flex-start;
                opacity: 0.9;
                &-nav {
                    // display: flex;
                    // flex-flow: column wrap;
                    // flex-basis: 0;
                    // flex: 1;
                    @include setShadow;
                    width: 20%;
                    background-color: $white;
                    & > * {
                        height: $h;
                        line-height: $h;
                        border: 1px solid $gray;
                        // margin-left: -1px;
                        // margin-top: -1px;
                    }
                    text-align: left;
                    li {
                        flex: 1;
                        cursor: pointer;
                        padding: 0 4px;
                    }
                    &-list {
                        color: $dark;
                        &:hover {
                            background-color: $hover !important;
                            color: $hover-font !important;
                        }
                    }
                    &-list-title {
                        background-color: $green;
                        // &:hover {
                        //     & ~ li {
                        //         background-color: $dark;
                        //         color: $white;
                        //     }
                        // }
                    }
                    &:hover {
                        li {
                            background-color: $list-hover;
                            color: $list-hover-font;
                        }
                    }
                }
                // &-tr {
                //     & > * {
                //         padding: 0 4px;
                //         cursor: pointer;
                //         border: 1px solid $gray;
                //     }
                //     &-th {
                //         color: $white;
                //         background-color: $green;
                //         width: 150px;
                //         // &:hover {
                //         //     background-color: $b-blue;
                //         //     color: $white;
                //         // }
                //     }
                //     &-td {
                //         color: $dark;
                //         width: 150px;
                //         &:hover {
                //             background-color: $dark;
                //             color: $white;
                //         }
                //     }
                // }
            }
        }
    }
</style>