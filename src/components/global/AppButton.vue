<template>
    <button class="button" :style="styleObject">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "AppButton",
        props: {
            color: {
                type: String,
            },
            backgroundColor: {
                type: String,
            },
            width: {
                type: String,
            },
            fontWeight: {
                type: String,
            },
            border: {
                type: String,
            },
        },
        data() {
            return {
                styleObject: {
                    color: this.color || "#333",
                    backgroundColor: this.backgroundColor || "#fff",
                    height: this.height || "4rem",
                    width: this.width || "12rem",
                    fontWeight: this.fontWeight || "600",
                    border: this.border || "1px solid #333",
                    borderRadius: this.borderRadius || "5px",
                }
            };
        }
    }
</script>

<style lang="scss" scoped>
.button {
    outline: none;
    border: none;
    letter-spacing: 1.2px;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
}
</style>