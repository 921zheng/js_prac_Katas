function alternateCase(string) {
    let result = ''
    const arr = string.split(' ')
    let letterCount = 0;
    for(let i = 0; i < arr.length; i++) {

    const wordLength = arr[i].length
        for(let j = 0; j < wordLength; j++) {
            const indexOnCurrentWord = j + letterCount;
            if(indexOnCurrentWord % 2 === 1) {
                result += arr[i][j].toLowerCase()
            } else {
                result += arr[i][j].toUpperCase()
            }
        }

        letterCount += wordLength
        if(i !== arr.length - 1) {
            result += ' '
        }
    }
    return result
}

module.exports = alternateCase;
