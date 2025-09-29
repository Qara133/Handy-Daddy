import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown,faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar,faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faArrowRight);
library.add(faAngleLeft, faAngleRight);
library.add(faCheck, faEnvelope, faLocationDot);
library.add(faChevronDown, faStar, farStar, fasStar, faChevronUp, faPhoneVolume);


const app = createApp(App);


app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');
