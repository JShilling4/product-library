<template>
    <div class="app">
        <transition name="element-fade" appear>
            <main-header v-if="pageDataHasLoaded" />
        </transition>
        <router-view v-slot="{ Component }">
            <transition
                name="view-fade"
                mode="out-in"
            >
                <component v-if="pageDataHasLoaded" :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MainHeader from "@/components/layout/MainHeader.vue";

export default {
    components: {
        "main-header": MainHeader,
    },

    computed: {
        ...mapState(["pageDataHasLoaded", "pageData"]),
    },

    methods: {
        ...mapActions(["fetchPageData"]),
    },

    created() {
        // fix for scroll position jump on route change
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
