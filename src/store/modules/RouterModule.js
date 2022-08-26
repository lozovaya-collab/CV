const state = {
    routes: [],

};
const getters = {
    GET_ROUTES(state) {
        return state.routes;
    },

};
const mutations = {
    SET_ROUTES(state, payload) {
        state.routes = payload
    }
};
const actions = {
    getRouter({ commit }, payload) {
        const routes = payload.options.routes;
        commit("SET_ROUTES", routes)
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
}