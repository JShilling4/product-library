<template>
    <div class="product">
        <img
            :src="`${product.photoName}?w=200&h=200`"
            :alt="product.itemName"
            class="productImage"
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
<style lang="">
</style>