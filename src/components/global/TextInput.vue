<template>
    <div class="input-wrapper">
        <input
            :style="styleObject"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="input"
        />
    </div>
</template>

<script>
export default {
    name: "TextInput",
    props: {
        height: {
            type: String,
        },
        width: {
            type: String,
        },
        borderRadius: {
            type: String,
        },
        modelValue: {
            type: [String],
            validator: (prop) => typeof prop === "string" || prop === null,
        },
    },

    data() {
        return {
            styleObject: {
                height: this.height || "4rem",
                width: this.width || "19rem",
                fontSize: this.fontSize || "1.6rem",
                fontFamily: this.fontFamily || "'Nunito Sans', sans-serif",
                border: this.border || "1px solid #d6d6d6",
                borderRadius: this.borderRadius || "5px",
                padding: this.padding || "0 0 0 1rem",
                color: this.color || "#333",
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.input {
    outline: none;
    color: #d6d6d6;
}
</style>