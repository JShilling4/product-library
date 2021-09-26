<template>
    <div class="app">
        <main-header />
        <router-view v-slot="{ Component }">
            <transition
                name="fade"
                mode="out-in"
            >
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import MainHeader from "@/components/layout/MainHeader.vue";

export default {
    components: {
        "main-header": MainHeader,
    },

    methods: {
        ...mapActions(["fetchPageData"]),
    },

    created() {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        this.fetchPageData();
    },
};
</script>

<style lang="scss">
@import "~@/scss/base";
@import "~@/scss/typography";
@import "~@/scss/transitions";

.app {
    // kill layout shif when scrollbar appears/disappears
    /* padding-left: calc(100vw - 100%); */
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 6rem;
    @include breakpoint(phablet) {
        padding: 0 2rem;
    }
}

.productImg {
    clip-path: inset(2.5%);
}
</style>
