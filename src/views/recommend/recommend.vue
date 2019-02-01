<template>
  <div>

    <h1>recommend</h1>
    <button @click="setUserInfo(count++)">asdfasdfasdfasd</button>
    <notification content="test notification"></notification>
  </div>
</template>

<script>
export default {
  name: "recommend",
  // inject: {
  //   userInfo: {
  //     type: String,
  //     default() {
  //       return {}
  //     }
  //   }
  // },
  inject: ['app'],
  data () {
    return {
      // app: 'aaaa'
      count: 0
    }
  },
  mounted () {
    window.console.log(this.app.name);
    // this.setUserInfo();
  },
  methods: {
    setUserInfo (data) {
      this.app.getUserInfo(data)
      window.console.log(this.app.name);
    }
  }
}
</script>

<style scoped>

</style>