<template>
    <div class="kaguya">
        <background></background>
        <navigator></navigator>
    </div>
</template>

<script>
import Background from './Background';
import Navigator from './Navigator';
export default {
  name: 'Kaguya',
  components: {
    background: Background,
    navigator: Navigator
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './../style/index.scss';
  .#{$kaguya} {
      display: flex;
      justify-content: center;
      background-color: rgba($dark, .85);
      opacity: 0.85;
  }
</style>
