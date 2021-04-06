function services(selector, data) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);
    const { list, imgPath, maxCount } = data;

    let HTML = '';

    for (let i = 0; i < list.length; i++) {
        const service = list[i];

        if (!service.active) {
            continue;
        }

        HTML += `<div class="col-12 col-md-6 col-lg-4 service-item">
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