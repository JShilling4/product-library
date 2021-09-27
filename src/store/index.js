import { createStore } from "vuex";
import modules from "./modules";
import api from "@/api";
import camelizeKeys from "@/helpers/camelizeKeys";

export default createStore({
    state: {
        data: {
            items: [],
        },
        pageDataHasLoaded: false,
    },

    mutations: {
        UPDATE_DATA(state, payload) {
            state.data = payload;
        },
        TOGGLE_PAGE_LOADING(state, value) {
            state.pageDataHasLoaded = value;
        },
    },

    actions: {
        fetchPageData({ commit }) {
            return api.fetchPageData().then((response) => {
                commit("UPDATE_DATA", camelizeKeys(response.data));
                commit("TOGGLE_PAGE_LOADING", true);
            });
        },
    },

    getters: {
        productById: (state) => (id) => {
            return state.data.items.find((item) => item.itemId === id);
        },
    },

    modules,
});
