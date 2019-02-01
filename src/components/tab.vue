<template>
  <div class="tab">
    <router-link tag="div" class="item" to="/recommend">推荐</router-link>
    <router-link tag="div" class="item" to="/singer">歌手</router-link>
    <router-link tag="div" class="item" to="/search">搜索</router-link>
    <router-link tag="div" class="item" to="/user">我的</router-link>
  </div>
</template>

<script>
export default {
  name: 'tab',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 @import "~@/assets/css/stylus/variable.styl"
.tab
  display flex
  line-height 44px
  .item
    flex 1
    color: $color-text-d
  .router-link-exact-active,
  .router-link-active
    border-bottom 1px solid $color-theme
    color: $color-theme

</style>
