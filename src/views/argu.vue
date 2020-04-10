<template>
    <div>
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'swizer'
        }
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to, from)
    }
}
</script>