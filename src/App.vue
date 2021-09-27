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
                <page-loader v-else />
            </transition>
        </router-view>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MainHeader from "@/components/layout/MainHeader.vue";
import PageLoader from './components/layout/PageLoader.vue';

export default {
    components: {
        "main-header": MainHeader,
        "page-loader": PageLoader,
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
