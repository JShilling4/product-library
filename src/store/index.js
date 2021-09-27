import { createStore } from "vuex";
import modules from "./modules";
import api from "@/api";
import camelizeKeys from "@/helpers/camelizeKeys";

export default createStore({
    state: {
        pageData: {
            items: [],
        },
        pageDataHasLoaded: false,
    },

    mutations: {
        UPDATE_DATA(state, payload) {
            state.pageData = payload;
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
            return state.pageData.items.find((item) => item.itemId === id);
        },
    },

    modules,
});
