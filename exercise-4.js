function cariModus(arr)
{
    let counter = {}

    let data = arr

    for (var i = 0; i < data.length; i++)
    {
        if(counter[data[i]] == null)
        {
            counter[data[i]] = 1
        }

        else
        {
            counter[data[i]]++
        }
    }

    var tmp = undefined
    var result = undefined

    for ( const key in counter)
    {
        if (tmp == undefined)
        {
            tmp = counter[key]
            result = Number(key)
        }

        else if (tmp < counter[key])
        {
            tmp = counter[key]
            result = Number(key)
        }

    }

    if ( tmp == 1)
    {
        result = -1
    }

    else if (tmp == data.length)
    {
        result = -1
    }
    
    return result
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1