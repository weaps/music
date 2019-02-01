<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{id}}ased</h1>
    <h1>my is home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  props: ['id']
}
</script>
