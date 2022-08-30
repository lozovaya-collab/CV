const state = {
    info: {
        FIO: "Лозовая Анна Яковлевна",
        job: "Front-end разработчик (Vue)",
        urlCV: "https://drive.google.com/file/d/147gzyNIHNDaPduPeHzVsHiaxIqvXedaW/view?usp=sharing",
        location: "Санкт-Петербург, Россия",
    },
    profile: `Занимаюсь разработкой SPA на Vue.  
    В университете имела опыт работы с MySQL, MongoDB, Firebase, писала курсовой проект на Svelte и Vue.
    В свободное время люблю гулять с друзьями, заниматься спортом/танцами и читать.
    Ответственная, неконфликтная, коммуникабельная.
    Проходила тренинг от Rs School по Front-end/JS (2020/21) и в качестве курсового проекта было реализовано приложение YelpCLone
    Статья о YelpClone`,
    contacts: [
        { img: "phone-contact.png", text: "+7 (965) 071 - 56 - 57", href: "tel:+79650715657" },
        { img: "mail.png", text: "anyalozovaya2014@gmail.com", href: "mailto:anyalozovaya2014@gmail.com" },
        { img: "telegram.png", text: "anya_loza", href: "https://t.me/anya_loza" },
        { img: "github.png", text: " github.com/lozovaya-collab", href: "https://github.com/lozovaya-collab" },

    ],
    hrefArticleYelp: "https://anyalozovaya2014.medium.com/yelpclone-1ba322f81b7c"

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
    GET_HREF_YELP(state) {
        return state.hrefArticleYelp;
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