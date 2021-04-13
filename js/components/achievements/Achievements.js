
/*
patikrinti ar validus this.selector?
patikrinti ar validus this.data?
patikrinti ar pagal nurodyta this.selector egzistuoja elementas/vieta?
generuoti HTML
    - tikrinti ar kiekvienas this.data.list[i] yra validus
istatyti i nurodyta vieta
pradeti stebeti scroll ivyki (event)
    - jeigu turinys tampa matomas ekrane
        - inicijuoti skaiciu count-up (nuo nulio iki nurodytos reiksmes)
        - uztikrinti, jog tai nutiktu tik 1 karta
*/


class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selectorius');
            return false;
        }

        if (!this.isValidData()) {
            console.error('ERROR: nevalidus duomenys');
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: pagal pateikta selector nepavyko rasti norimos vietos/elemento');
            return false;
        }
        this.DOM = DOM;

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('ERROR: selector turi buti tekstas');
            return false;
        }

        if (this.selector === '') {
            console.warn('ERROR: selector turi buti ne tuscias tekstas');
            return false;
        }

        return true;
    }

    isValidData() {
        if (typeof this.data !== 'object' ||
            Array.isArray(this.data)) {
            console.warn('ERROR: duomenys turi buti objekto tipo');
            return false;
        }

        if (this.data.list === undefined ||
            !Array.isArray(this.data.list)) {
            console.warn('ERROR: duomenyse esantis list turi buti array tipo');
            return false;
        }

        if (this.data.list.length === 0) {
            console.warn('ERROR: duomenyse esantis list turi buti ne tuscias array');
            return false;
        }

        return true;
    }

    render() {
        let HTML = '';

        for (const item of this.data.list) {
            HTML += `<div class="achievement">
                        <div class="title">${item.title}</div>
                        <div class="number">0</div>
                        <div class="subtitle">${item.subtitle}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }

    addEvents() {
        addEventListener('scroll', () => {
            const allNumbersDOM = this.DOM.querySelectorAll('.number');

            for (let i = 0; i < allNumbersDOM.length; i++) {
                const numberDOM = allNumbersDOM[i];
                const elementTop = numberDOM.offsetTop;
                const elementHeight = numberDOM.clientHeight;

                const isVisible = scrollY + innerHeight >= elementTop + elementHeight;
                if (isVisible) {
                    this.animateNumber(numberDOM, i);
                }
            }
        })
    }

    animateNumber(elementDOM, elementIndex) {
        // prisingu atveju - animuoju ir pazymiu, jog jau suanimuota
        if (this.data.list[elementIndex].animated !== true) {
            const targetNumber = this.data.list[elementIndex].value;
            this.data.list[elementIndex].animated = true;

            const timeToAnimate = 3;                     // s
            const fps = 30;                              // kartai per sekunde
            const framesCount = timeToAnimate * fps;     // kiek is viso bus kadru
            const numberIncrement = targetNumber / framesCount;
            let printedValue = 0;
            let currentFrameIndex = 0;

            const timer = setInterval(() => {
                printedValue += numberIncrement;
                currentFrameIndex++;
                elementDOM.innerText = Math.round(printedValue);

                if (currentFrameIndex === framesCount) {
                    clearInterval(timer);
                }
            }, 1000 / fps)
        }
    }
}

export { Achievements }