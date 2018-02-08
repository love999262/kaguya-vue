<template>
    <div v-bind:class="`${prefix}-img`" v-bind:style="bgImgStyle"></div>
</template>

<script>
export default {
    name: 'background',
    data () {
        return {
            prefix: 'kaguya',
            isLocal: false,
            localPicDir: '../img/',
            qiniuURL: 'http://omltgvp37.bkt.clouddn.com/',
            totalPic: 830
        }
    },

    computed: {

    },
    created: function () {
        this.assets = this.isLocal ? this.localPicDir : this.qiniuURL
        this.num = Math.round(Math.random() * this.totalPic)
        this.bgImgStyle = {
            backgroundImage: `url(${this.assets}bg${this.num.toString()}.jpg)`
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './../style/index.scss';
    .#{$kaguya}-img {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -99999;
        background-color: #FFFFFF;
    }
</style>
