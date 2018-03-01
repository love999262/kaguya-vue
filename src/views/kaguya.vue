<template>
    <div class="kaguya">
        <navlist v-if="showNavList" :name="navlist"></navlist>
        <router-view></router-view>
    </div>
</template>

<script>
import navlist from './../components/nav-list';
export default {
  name: 'Kaguya',
  components: {
    navlist
  },
  methods: {
    bindEvent: function (top) {
      document.addEventListener('mousemove', (e) => {
        if (e.clientY > top) {
          this.showNavList = false;
        } else {
          this.showNavList = true;
        }
      });
    }
  },
  data () {
    return {
      navlist: ['home', 'path1', 'path2', 'path3'],
      showNavList: true
    };
  },
  created: function () {
    this.bindEvent(40);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './../style/index.scss';
  .#{$kaguya} {
      display: flex;
      justify-content: center;
      user-select: none;
      background-color: rgba($dark, .85);
      opacity: 0.85;
  }
</style>
