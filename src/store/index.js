import { createStore } from "vuex";
import modules from "./modules";
import api from "@/api";
import camelizeKeys from "@/includes/camelizeKeys";

export default createStore({
    state: {
        data: {
            items: [],
        },
    },

    mutations: {
        UPDATE_DATA(state, payload) {
            state.data = payload;
        },
    },

    actions: {
        fetchPageData({ commit }) {
            return api.fetchPageData().then((response) => {
                commit("UPDATE_DATA", camelizeKeys(response.data));
            });
        },
    },

    getters: {
        productById: (state) => (id) => {
            return state.data.items.find((item) => item.itemId === id);
        }
    },

    modules,
});
