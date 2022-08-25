import { createStore } from 'vuex';
import RouterModule from '@/store/modules/RouterModule';
import AboutMeModule from '@/store/modules/AboutMeModule';
import JobsAndSkillsModule from '@/store/modules/JobsAndSkillsModule';


// Create a new store instance.
const store = createStore({
    modules: {
        RouterModule,
        AboutMeModule,
        JobsAndSkillsModule
    }
});

export default store;