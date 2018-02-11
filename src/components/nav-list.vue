<template>
    <ul :class="`${prefix}-nav-list`">
        <li :class="`${prefix}-nav-list-li`" v-for="item in name" :key="item">
            <router-link :to="item">{{item}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'nav-list',
    props: ['name'],
    data () {
        return {
            prefix: 'kaguya'
        };
    }
};
</script>

<style lang="scss" scoped>
    @import './../style/global.scss';
    @keyframes navlistfade {
        0% {
            opacity: 0.1;
        }
        20% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.3;
        }
        60% {
            opacity: 0.4;
        }
        80% {
            opacity: 0.5;
        }
        100% {
            opacity: 0.6;
        }
    }
    .#{$kaguya}-nav-list {
        // transition: visibility 1s;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, .6);
        animation: navlistfade 0.15s ease-in-out;
        &-li{
            text-align: center;
            height: 40px;
            line-height: 40px;
            flex-grow: 1.0;
            cursor: pointer;
            &:hover {
                background-color: hsla(0, 0%, 100%, .3);
            }
        }
    }
</style>
