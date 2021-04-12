// IMPORT
/* header */
/* hero */
/* clients */
import { servicesData } from './data/servicesData.js';
import { services } from './components/services/services.js';

/* services */
/* about company */
/* achievements */
import { Achievements } from './components/achievements/Achievements.js';
import { achievementsData } from './data/achievementsData.js';

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
const achievement = new Achievements('#achievements_block', achievementsData);

/* promo video */
/* case studies */
/* testimonials */
/* blog */
/* contacts */ 
/* footer */
