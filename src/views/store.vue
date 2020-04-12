<template>
  <div>
    <a-input @input="handleInput" />
    <!-- <p>{{inputVal}}</p> -->
    <a-show :content="inputVal" />
    <p>appName: {{appName}}</p>
    <p>appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName: {{userName}}</p>
  </div>
</template>
<script>
  import AInput from '_c/AInput.vue'
  import AShow from '_c/AShow.vue'
  import {createNamespacedHelpers} from 'vuex'
  const {mapState} = createNamespacedHelpers('user')
  import {mapGetters} from 'vuex'
  export default {
    name: 'store',
    components: {
      AInput,
      AShow
    },
    data() {
      return {
        inputVal: ''
      }
    },
    methods: {
      handleInput(val) {
        this.inputVal = val
      }
    },
    computed: {
        // ...mapState({
        //     appName: state => state.appName,
        //     userName: state => state.user.userName
        // })
        ...mapState({
            userName: state => state.userName
        }),
        ...mapGetters({
            // appNameWithVersion: 
        })
    //   appName() {
    //     return this.$store.state.appName
    //   },
    //   userName() {
    //     return this.$store.state.user.userName
    //   }
    }
  }

</script>
