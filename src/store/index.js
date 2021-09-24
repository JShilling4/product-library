import { createStore } from "vuex";
import modules from "./modules";
import api from "@/api";
import camelize from "@/includes/camelize";

export default createStore({
    state: {
        data: [],
    },

    mutations: {
        UPDATE_DATA(state, payload) {
            state.data = payload;
        },
    },

    actions: {
        fetchPageData({ commit }) {
            api.fetchPageData().then((response) => {
                commit("UPDATE_DATA", camelize(response.data));
            });
        },
    },

    modules,
});
