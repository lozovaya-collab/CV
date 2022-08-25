import { createStore } from 'vuex'
import AboutMeModule from '@/store/modules/AboutMeModule'

// Create a new store instance.
const store = createStore({
    modules: {
        AboutMeModule
    }
})

export default store;