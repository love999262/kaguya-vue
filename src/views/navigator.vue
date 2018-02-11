<template>
    <div :class="`${prefix}-search`">
        <searchengle></searchengle>
        <navigates></navigates>
    </div>
</template>

<script>
import navigates from './../components/navigates';
import searchengle from './../components/searchengle';
export default {
    name: 'navigator',
    components: {
        navigates,
        searchengle
    },
    data () {
        return {
            prefix: 'kaguya'
        };
    }
};
</script>

<style lang="scss">
    @import './../style/global.scss';
    .#{$kaguya} {
        &-search {
            opacity: 0.9;
            text-align: center;
            margin-top: 25vh;
            z-index: 999;
            user-select: none;
        }
    }
</style>
