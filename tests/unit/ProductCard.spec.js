import { mount } from "@vue/test-utils";
import ProductCard from "@/components/ProductCard.vue";
import AppButton from "@/components/global/AppButton.vue";

describe("ProductCard.vue", () => {
    const wrapper = mount(ProductCard, {
        global: {
            components: {
                "app-button": AppButton,
            },
        },
        propsData: {
            product: {
                itemName: "Fantastic Furniture",
                itemId: "AHAYES",
                photoName: "Photo name",
            },
        },
    });

    it("initializes with correct elements", () => {
        expect(wrapper.find("p.productName").text()).toBe("Fantastic Furniture");
        expect(wrapper.find("button").text()).toBe("See Details");
    });
});
