import { isValidServices } from './isValidServices.js';
import { isValidServiceItem } from './isValidServiceItem.js';

function services(selector, data) {
    // input validation
    if (!isValidServices(selector, data)) {
        return false;
    }

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }

    const { list, imgPath, maxCount } = data;

    let HTML = '';
    let generatedServicesCount = 0;     //kintamasis kuris trackina kelinta paslauga generuoju
    //jeigu maxCounto nera, sugeneruos viska

    for (let i = 0; i < list.length; i++) {
        const service = list[i];

        if (!isValidServiceItem(service) ||     //patikra ar paslauga is viso yra aktyvi?
            !service.active) {
            continue;
        }
        if (generatedServicesCount === maxCount) {
            break;
        }

        generatedServicesCount++;
        HTML += `<div class="service-item">
                    <img src="${imgPath + service.img}" alt="">
                    <h4>${service.title}</h4>
                    <p>${service.description}</p>
                    <a href="${service.link}" class="fa fa-long-arrow-right"></a>
                </div>`;
    }

    // post logic validation

    // result return
    DOM.innerHTML = HTML;
}

export { services }