// IMPORT
/* header */
/* hero */
/* clients */
import { servicesData } from './data/servicesData.js';
import { services } from './components/services/services.js';

/* services */
/* about company */
/* achievements */
import { Achievements } from './components/achievements/Achievements'
import { achievementsData } from './data/achievemementsData.js'

/* promo video */
/* case studies */
/* testimonials */
/* blog */
/* contacts */
/* footer */

// FUNKCIJU PANAUDOJIMAS
/* header */
/* hero */
/* clients */
/* services */
services('#services_block', servicesData);

/* about company */
/* achievements */
const achievement =  new Achievements('#chievements_block', achievementsData);
achievement.render();
/* promo video */
/* case studies */
/* testimonials */
/* blog */
/* contacts */
/* footer */