function tukarBesarKecil(kalimat)
{
    var result = ''
    var word = 'abcdefghijklmnopqrstuvwxyz'

    for (var i = 0; i < kalimat.length; i++)
    {
        for (var j = 0; j < word.length; j++)
        {
            if (kalimat[i] === word[j])
            {
                result += kalimat[i].toUpperCase()
                break
            }
        }

        if (kalimat[i] !== word[j])
            {
                result += kalimat[i].toLowerCase()
            }
    }

    return result
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"