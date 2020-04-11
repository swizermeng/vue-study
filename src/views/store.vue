<template>
    <div>
        <a-input @input="handleInput"/>
        <!-- <p>{{inputVal}}</p> -->
        <a-show :content="inputVal"/>
    </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
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
    }
}
</script>