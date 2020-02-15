function cariMedian(arr)
{
    
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = 0; j < arr.length-1; j++)
        {
            if (arr[j] > arr [j+1])
            {
                var temp = arr [j+1]
                arr[j+1] = arr [j]
                arr[j] = temp
                break
            }
        }
    }

    var sort = arr

    var countArray = 0

    for (var k = 0; k < sort.length; k++)
    {
        countArray ++
    }

    let result 

    if (countArray % 2 !== 0)
    {
        var tmp = (countArray + 1) / 2
        result = sort[tmp-1]
    }

    else if (countArray % 2 == 0)
    {
        var tmp1 = countArray/2
        var tmp2 = (countArray/2)+1
        result = (sort[tmp1 - 1] + sort[tmp2 - 1]) / 2
    }


    return result
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5