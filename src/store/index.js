import { createStore } from 'vuex';
import RouterModule from '@/store/modules/RouterModule';
import AboutMeModule from '@/store/modules/AboutMeModule';
import JobsAndSkillsModule from '@/store/modules/JobsAndSkillsModule';
import EducationModule from './modules/EducationModule';


// Create a new store instance.
const store = createStore({
    modules: {
        RouterModule,
        AboutMeModule,
        JobsAndSkillsModule,
        EducationModule
    }
});

export default store;