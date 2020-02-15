function urutkanAbjad(str)
{

    var word = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''
    for (var i = 0; i < word.length; i++)
    {
        for (var j = 0; j < str.length; j++)
        {
            if (word[i] === str[j])
            {
                result += word[i]
            }
        }
    }

    return result
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'