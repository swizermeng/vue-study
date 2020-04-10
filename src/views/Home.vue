<template>
  <div class="home">
    <div>{{food}}</div>
    <button @click="back">返回上一页</button>
    <button @click="jump">跳转到parent</button>
    <button @click="replace">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm('您确定要离开吗?')
    if(leave) {
      next()
    } else {
      next(false)
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    jump() {
      this.$router.push({
        name: 'parent'
      })
    },
    replace() {
      this.$router.replace({
        name: 'parent'
      })
    }
  }
}
</script>
