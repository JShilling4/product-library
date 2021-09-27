<template>
    <div class="home container">
        <div class="top-bar">
            <h1 class="pageHeading">Products</h1>
            <div class="search-wrapper">
                <font-awesome-icon
                    :icon="['fas', 'search']"
                    class="searchIcon"
                />
                <text-input
                    type="text"
                    class="searchInput"
                    border-radius="5px 0 0 5px"
                    v-model="searchQuery"
                    @keyup.enter="filterProducts"
                />
                <app-button
                    background-color="var(--primary-color)"
                    color="#fff"
                    border="none"
                    width="8rem"
                    border-radius="0 5px 5px 0"
                    class="searchBtn"
                    @click="filterProducts"
                >Search</app-button>
            </div>
        </div>

        <div class="products-container">
            <product-card
                v-for="product in filteredProducts"
                :key="product.id"
                :product="product"
                @click="$router.push(`/product/${product.itemId}`)"
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

    data() {
        return {
            filteredProducts: [],
            searchQuery: "",
        };
    },

    computed: {
        ...mapState(["data"]),
    },

    methods: {
        filterProducts() {
            this.filteredProducts = this.data.items.filter((item) =>
                item.itemName
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        },
    },

    mounted() {
        window.scrollTo(0, 0);
        this.filteredProducts = this.data.items;
    },
};
</script>

<style lang="scss">
.home {
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4rem 0 8rem;
        @include breakpoint(phablet) {
            flex-wrap: wrap;
            margin-bottom: 4rem;
        }

        .search-wrapper {
            display: flex;
            align-items: center;
            .searchIcon {
                color: var(--gray-text);
                margin-right: 0.5rem;
                font-size: 2rem;
            }
        }
    }

    .pageHeading {
        font-weight: 700;
        font-size: 2.4rem;
        @include breakpoint(phablet) {
            flex-basis: 100%;
            margin-bottom: 3rem;
        }
    }

    .products-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 4rem;
        row-gap: 10rem;
        justify-content: center;
        justify-items: center;
        padding-bottom: 12rem;
        @include breakpoint(phone-lg) {
            row-gap: 5rem;
        }
    }
}
</style>