function isValidServices(selector, data) {  
    if (typeof selector !== 'string' || selector === '') {   //selector turi buti ne tuscias 
        return false;
    }
    if (typeof data !== 'object' || 
    Array.isArray(data)) || // turi buti tikras objektas, ne array
    !data.imgPath ||
    typeof data .imgPath !== 'string' ||
    data.imgPath === '' ||
    !data.list ||
    !Array.isArray(data.list) ||
    data.list.lenght === 0) {
        return false;
    }
    
    if (data.maxCount) {
        if (typeof data.maxCount !== 'number' ||
        !isFinite(data.maxCount) ||
        data.maxCount < 1 ||
        data.maxCoubt % 1 !== 0) {
            
            return false;
        }
    }

    return true;
}

export { isValidServices }