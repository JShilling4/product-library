<template>
    <div class="home">
        <img
            v-if="data.manufacturerId"
            :src="`http://images.repzio.com/productimages/${data.manufacturerId}/logo${data.manufacturerId}_lg.jpg`"
            alt="Manufacturer Logo"
        />

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
import { mapActions, mapState } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
    name: "Home",
    components: {
        "product-card": ProductCard,
    },

    computed: {
        ...mapState(["data"]),
    },

    methods: {
        ...mapActions(["fetchPageData"]),
    },

    created() {
        this.fetchPageData();
    },
};
</script>

<style lang="scss">
.home {
    padding: 10rem;

    .products-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 5rem;
        justify-content: space-evenly;
        justify-items: center;
        align-content: space-evenly;
        align-items: center;
    }

    .product {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
        width: 350px;
        cursor: pointer;
        padding: 2rem;
        border-radius: 5px;

        .productImage {
            clip-path: inset(2.5%);
        }

        .productName {
            font-weight: 600;
            margin-top: 1rem;
        }
    }
}
</style>