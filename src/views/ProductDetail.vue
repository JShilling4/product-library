<template>
    <div
        v-if="product"
        class="productDetail-wrapper container"
    >
        <app-button
            class="backBtn"
            background-color="var(--primary-color)"
            color="#fff"
            border="none"
            @click="$router.go(-1)"
        >Back</app-button>

        <div class="productDetail">
            <div class="display-wrapper col col1">
                <img
                    :src="`${product.photoName}?w=400&h=400`"
                    :alt="product.itemName"
                    class="productImg"
                />
            </div>

            <div class="info-wrapper col col2">
                <p class="infoItem itemId">{{ product.itemId }}</p>
                <p class="infoItem name">{{ product.itemName }}</p>
                <p class="infoItem basePrice">${{ product.basePrice }}</p>
                <p class="infoItem">
                    <span class="key">Dimensions:</span> {{ product.dimensions }}
                </p>
                <p class="infoItem description">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ProductDetail",

    data() {
        return {
            product: {},
        };
    },

    computed: {
        ...mapGetters(["productById"]),
    },

    methods: {
        ...mapActions(["fetchPageData"]),
    },

    async mounted() {
        window.scrollTo(0, 0);

        this.product = await this.productById(this.$route.params.id);
        if (!this.product) {
            await this.fetchPageData();
            this.product = await this.productById(this.$route.params.id);
            if (!this.product) {
                window.location.href = "/404";
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.productDetail-wrapper {
    padding-bottom: 12rem;
    .backBtn {
        margin-top: 3rem;
    }
}
.productDetail {
    display: flex;
    align-items: center;
    margin-top: 8rem;
    min-height: 41rem;
    @include breakpoint(tablet-lg) {
        flex-wrap: wrap;
    }

    .col1 {
        width: 50%;
        @include breakpoint(tablet-lg) {
            width: 100%;
        }
    }

    .display-wrapper {
        display: flex;
        justify-content: center;
        padding-right: 4rem;
    }

    .info-wrapper {
        max-width: 50rem;
        @include breakpoint(tablet-lg) {
            margin-top: 6rem;
        }
    }

    .infoItem {
        line-height: 1.5;
        &.itemId {
            color: var(--gray-text);
        }
        &.name {
            font-weight: 700;
            font-size: 2rem;
        }
        &.basePrice {
            font-size: 2.4rem;
            margin-bottom: 4rem;
        }
        &.description {
            margin-top: 1.5rem;
        }
        .key {
            font-weight: 600;
        }
    }
}
</style>