<template>
    <div>tel: 12343243454
        <button @click="handleClick">button</button>
    </div>
</template>
<script>
export default {
    mounted () {
            console.log(this.$bus)
        },
    methods: {
        
        handleClick() {
            this.$bus.$emit('on-click', 'hello')
        }
    }
}
</script>