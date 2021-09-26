<template>
    <div class="home container">
        <h1 class="pageHeading">Products</h1>

        <div class="products-container">
            <product-card
                v-for="item in data.items"
                :key="item.id"
                :product="item"
                @click="$router.push(`/product/${item.itemId}`)"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
    name: "Home",
    components: {
        "product-card": ProductCard,
    },

    computed: {
        ...mapState(["data"]),
    },

    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>

<style lang="scss">
.home {
    .pageHeading {
        margin: 4rem 0 6rem;
        font-weight: 600;
        font-size: 2.4rem;
        /* color: var(--gray-text); */
    }

    .products-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 4rem;
        row-gap: 10rem;
        justify-content: center;
        justify-items: center;
        padding-bottom: 12rem;
    }
}
</style>