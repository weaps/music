<template>
  <transition>
    <div class="notification alert">
      <h6>{{content}}<span>{{isShow}}</span></h6>
      <button class="btn" @click="handlerCloseNotification" v-if="isSHow">关闭</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "notification",
    data () {
      return {}
    },
    props: {
      content: {
        type: String,
        default () {
          return ''
        }
      },
      timeOut: {
        type: Number,
        default () {
          return 3000
        }
      },
      isShow: {
        type: Boolean,
        default () {
          return true
        }
      }
    },
    mounted () {
      // this.setHide()
    },
    methods: {
      handlerCloseNotification () {
        this.$emit('close-notification')
      },
      setHide () {
        this.timer = setTimeout(() => {
          // 向 `resolve` 回调传递组件定义
          window.console.log('asdfasdfasdfasd' + this.isSHow)
        }, 3000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.notification
  &.alert
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    background: rgba(255,255,255, .4)

</style>