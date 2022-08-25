const state = {
    info: {
        FIO: "Лозовая Анна Яковлевна",
        job: "Front-end разработчик (Vue)",
        urlCV: "https://drive.google.com/file/d/1SJFGjjUAg4oztn7qbBWGmRaBCWwze1UP/view?usp=sharing",
        location: "Санкт-Петербург, Россия",
    },
    profile: `Занимаюсь разработкой SPA на Vue. Обожаю верстать и вдыхать в макеты жизнь. За время своей работы сталкивалась с технологией WebRTC.  
    Всегда готова к изучению чего-то нового.
    Ответственная, неконфликтная, коммуникабельная.
    Готова работать в команде и умею читать чужой код.`,
    contacts: [
        { img: "phone-contact.png", text: "+7 (965) 071 - 56 - 57", href: "tel:+79650715657" },
        { img: "mail.png", text: "anyalozovaya2014@gmail.com", href: "mailto:anyalozovaya2014@gmail.com" },
        { img: "telegram.png", text: "anya_loza", href: "https://t.me/anya_loza" },
        { img: "github.png", text: " github.com/lozovaya-collab", href: "https://github.com/lozovaya-collab" },

    ],

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