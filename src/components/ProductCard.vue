<template>
    <div class="product">
        <div class="overlay">
            <app-button
                class="productBtn"
                color="#000"
            >See Details</app-button>
        </div>
        <img
            :src="`${product.photoName}?w=200&h=200`"
            :alt="product.itemName"
            class="productImg"
        />

        <p class="productName">
            {{ product.itemName }}
        </p>
    </div>
</template>
<script>
export default {
    name: "ProductCard",
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style lang="scss" scoped>
.product {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 325px;
    cursor: pointer;
    padding: 2rem;
    border-radius: 5px;
    transition: all 0.5s;

    &:hover {
        @media screen and (min-width: 1025px) {
            box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.3);
            transform: scale(1.0311) translateY(-1.5rem);
            .overlay {
                background-color: var(--primary-color);
                height: 100%;
                .productBtn {
                    opacity: 1;
                    margin-top: 5rem;
                }
            }
            .productName {
                color: #fff;
                transform: translateY(-15rem);
            }
        }
    }

    .overlay {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        opacity: 0.9;
        border-radius: 5px;
        transition: all 0.5s;
    }

    .productImg {
        height: 20rem;
    }

    .productName {
        position: relative;
        z-index: 2;
        font-weight: 700;
        text-align: center;
        font-size: 1.7rem;
        margin-top: 1rem;
        color: #333;
        transition: all 0.3s;
    }

    .productBtn {
        opacity: 0;
        transition: all 0.3s;
    }
}
</style>