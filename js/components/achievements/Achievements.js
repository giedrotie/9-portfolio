    /*
    patikrinti ar validus this.selector ?
    patikrinti ar validus this.data ?
    patikrinit ar pagal nurodyta this.selector egzistuoja elementas/vieta?

    generuoti HTML
        - tikrinti ar kiekvienas this.data.list[i] yra validus?
    istatyti i nurodyta vieta

    pradeti stebeti scroll izyki (event)
        -j eigu turinys tampa matomas ekrane
            - inicijuoti skaiciu count-up (nuo nulio iki nurodytos reiksmes)
            - uztikrinti, jog tai nutiktu tik 1 karta
    */


class Achievements {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.init();
    }


    init () {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevaligus selectorius');
            return false;
        }
    }

    isValidSelector() {
        if 
        return true;

    }

}

export { Achievements }