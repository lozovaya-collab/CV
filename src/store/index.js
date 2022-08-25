import { createStore } from 'vuex';
import RouterModule from '@/store/modules/RouterModule';
import AboutMeModule from '@/store/modules/AboutMeModule';


// Create a new store instance.
const store = createStore({
    modules: {
        RouterModule,
        AboutMeModule
    }
});

export default store;