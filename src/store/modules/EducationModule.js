const state = {
    universities: [{
            dateStart: "2017",
            dateEnd: "2021",
            university: "Самарский государственный аэрокосмический университет академика С.П. Королева (национальный исследовательский университет), Самара",
            level: "Бакалавриат",
            subtitle: "Информатика, Прикладная математика и информатика",
        },
        {
            dateStart: "2021",
            dateEnd: "2023",
            university: "Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики, Санкт-Петербург",
            level: "Магистратура",
            subtitle: "Программная инженерия и компьютерная техника, Веб-технологии",
        }
    ],
    trainings: [{
        dateStart: "Сент 2020",
        dateEnd: "Фев 2021",
        training: "Онлайн-тренинг по JavaScript/Front-end от RS School",
        sertificate: "https://vk.com/doc114256649_589601259?hash=ZPPSABKlTOv5F5DYkx8ISzb6Dd6FGZUXwK44dT5tz4P&dl=2x7echO1HfD5kd0KqXw4dCz8Wk3jke10Nq1HcUebg4g",
        subtitle: "Онлайн-тренинг",
    }]

};
const getters = {
    GET_UNIVERSITIES(state) {
        return state.universities;
    },
    GET_TRAININGS(state) {
        return state.trainings;
    },
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