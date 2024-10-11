const state = {
    info: {
        FIO: "Лозовая Анна Яковлевна",
        job: "Front-end разработчик",
        urlCV: "https://spb.hh.ru/applicant/resumes/view?resume=87ff34cbff06ac11590039ed1f694f4e4e5931",
        location: "Санкт-Петербург, Россия",
    },
    profile: `Занимаюсь разработкой SPA на Vue, Svelte и React.

        В университете имела опыт работы с MySQL, MongoDB, Firebase, Docker. Также защитила дипломный проект, в ходе которого реализовала 5 реализаций клиентской части: Vue, React, Svelte, Solidjs и Angular.

        Участвовала в 2 хакатонах и сейчас буду участвовать в качестве фронтендера. Стек: React 18/19, Next.js
        1. ВТБ More.tech (7-9 октября 2022)
        2. Sovcombank Team Challenge 2022 (18-23 октбря 2022) - 3 место 
        3. ВТБ More.tech (11-23 октября 2024)

        Принимала участие в разработке стартапа как фронтенд разработчик. Проект для проведения тестирования (NDA). Стек: Svelte, Sveltkit, TypeScript.

        В свободное время люблю гулять с друзьями, заниматься спортом/танцами. Люблю ходить на фестивали технической музыки.

        Ответственная, неконфликтная, коммуникабельная.

        Статья о Sovcombank Team Challenge 2022`,
    contacts: [
        { img: "phone-contact.png", text: "+7 (965) 071 - 56 - 57", href: "tel:+79650715657" },
        { img: "mail.png", text: "anyalozovaya2014@gmail.com", href: "mailto:anyalozovaya2014@gmail.com" },
        { img: "telegram.png", text: "anya_loza", href: "https://t.me/anya_loza" },
        { img: "github.png", text: " github.com/lozovaya-collab", href: "https://github.com/lozovaya-collab" },

    ],
    hrefArticleHackaton: "https://www.cnews.ru/news/top/2022-11-28_sovkombank_obyavil_pobeditelej?erid=Pb3XmBtzt5yGfX5fzgTQLymLZfqZ8LTosSYoNA4"

};
const getters = {
    GET_FIO(state) {
        return state.info.FIO.toUpperCase();
    },
    GET_JOB(state) {
        return state.info.job;
    },
    GET_URL_CV(state) {
        return state.info.urlCV;
    },
    GET_LOCATION(state) {
        return state.info.location;
    },
    GET_PROFILE(state) {
        return state.profile.split("\n");
    },
    GET_CONTACTS(state) {
        return state.contacts;
    },
    GET_HREF_HACKATON(state) {
        return state.hrefArticleHackaton;
    },

};
const mutations = {

};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
}