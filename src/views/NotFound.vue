<template>
    <div class="notFound container">
        <app-button
            class="backBtn"
            background-color="var(--primary-color)"
            color="#fff"
            border="none"
            @click="$router.push('/')"
        >Home</app-button>
        <h1>404 - Page Not Found</h1>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
    }
</script>

<style lang="scss" scoped>
.notFound {
    .backBtn {
        margin-top: 3rem;
    }

    h1 {
        margin-top: 4rem;
        text-align: center;
    }
}
</style>