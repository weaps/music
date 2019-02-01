<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h5>{{info}}</h5>

    <router-view/>
  </div>
</template>
<script>
import MHeader from '@/components/header'
import MTab from '@/components/tab'
export default {
  name: 'app',
  data () {
    return {
      info: {},
      name: 'YongHui Li',
      age: 0
    }
  },
  components: {
    MHeader,
    MTab
  },
  mounted () {
    this.info = this.$store.state.testData;
    this.getUserInfo();
  },
  provide () {
    return {
      app: this
    }
  },
  methods: {
    getUserInfo (data) {
      this.name = data || 'YongHui Li';
    }
  }
  // provide: {
  //   userInfo: {
  //     name: 'provide demo',
  //     id: 123
  //   }
  // }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
