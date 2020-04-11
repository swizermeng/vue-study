<template>
    <div>
        <input @input="handleInput" :value="val" />
    </div>
</template>
<script>
export default {
    name: 'AInput',
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    methods: {
        handleInput(e) {
            let val = e.target.value
            this.$emit('input', val)
        }
    }
}
</script>