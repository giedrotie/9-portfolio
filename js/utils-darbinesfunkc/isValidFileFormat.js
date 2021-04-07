// GALIMOM GAUTI FAILO PAVADINIMU KOMBINACIJOS - neteidingos
// asdjog
// .jpg
// asd.
// asd.jp
// asd.jpg

function isValidFileFormat(fileName, allowedExtension) {
    if (typeof fileName !== 'string' ||
    fileName === ''){
        console.warn('ERROR: netinkamo formato failo pavadinimas');
    return true;
    }

    if (!Array.isArray(allowedExtension) ||
    allowedExtension.length === 0 )

}

export { isValidFileFormat }