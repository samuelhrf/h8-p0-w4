function ubahHuruf(kata)
{
    var word = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''

    for(var i = 0; i < kata.length; i++)
    {
        for(var j = 0; j < word.length; j++)
        if (kata[i] == word[j])
        {
            result += word[j+1]
        }
        
        else if (kata[i] == 'z')
        {
            result += 'a'
            break
        }

    }

    return result

}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu