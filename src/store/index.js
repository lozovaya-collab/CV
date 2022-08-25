import { createStore } from 'vuex';
import RouterModule from '@/store/modules/RouterModule';
import AboutMeModule from '@/store/modules/AboutMeModule';
import JobsModule from '@/store/modules/JobsModule';


// Create a new store instance.
const store = createStore({
    modules: {
        RouterModule,
        AboutMeModule,
        JobsModule
    }
});

export default store;