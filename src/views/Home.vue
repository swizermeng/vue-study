<template>
  <div class="home">
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
  // components: {
  //   HelloWorld
  // }
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
