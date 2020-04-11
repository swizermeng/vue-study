<template>
    <div>email: bad_swizer@163.com
        {{value}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    mounted() {
        this.$bus.$on('on-click', msg => {
            this.value = msg
        })
    }
}
</script>