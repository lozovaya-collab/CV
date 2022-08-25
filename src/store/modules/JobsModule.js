const state = {
    jobs: [{
        dateStart: "Cентябрь 2021",
        dateEnd: null,
        company: "M-Стайл",
        occupation: "Front-end разработчик",
        responsibilities: [
            { text: "Разработка и поддержка приложений для внутренних нужд компаний" },
            { text: "Разработка веб-интерфейса приложений на Vue" },
            { text: "Работа с API" },
        ],
    }],

};
const getters = {
    GET_JOBS(state) {
        return state.jobs;
    }
};
const mutations = {

};
const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
}