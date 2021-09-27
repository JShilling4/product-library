import { shallowMount } from "@vue/test-utils";
import MainHeader from "@/components/layout/MainHeader.vue";

describe("MainHeader.vue", () => {
    const $store = {
        state: {
            data: {
                companyName: "Good Company",
                manufacturerId: "772",
                salesRep: {
                    city: "Syracuse",
                    state: "IN",
                    postalCode: "46567",
                    firstName: "John",
                    lastName: "Smith",
                    cellPhone: "5555555555",
                    emailAddress: "test@email.com",
                },
            },
        },
    };

    const wrapper = shallowMount(MainHeader, {
        global: {
            mocks: {
                $store,
            },
        },
    });

    it("initializes with correct elements", () => {
        const logo = wrapper.find("img");
        expect(logo.attributes().src).toBe(
            "http://images.repzio.com/productImages/772/logo772_lg.jpg?height=100"
        );
        expect(wrapper.find("p.companyName").text()).toBe("Good Company");
        expect(wrapper.find("p.repName").text()).toBe("John Smith");
        expect(wrapper.find("a.email").text()).toBe("test@email.com");
        expect(wrapper.find("a.phone").text()).toBe("555-555-5555");
        expect(wrapper.find("p.location").text()).toBe("Syracuse, IN 46567");
    });
});
