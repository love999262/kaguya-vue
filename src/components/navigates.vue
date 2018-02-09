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
import websites from './websites';
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
    data () {
        return {
            prefix: 'kaguya-search',
            getRandomColor: utils.getRandomColor,
            websites: websites
        };
    }
};
</script>


<style>

</style>