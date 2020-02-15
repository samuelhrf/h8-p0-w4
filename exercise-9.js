function checkAB(num)
{
    var a = []
    var b = []
    
    for (var i = 0; i < num.length; i++)
    {
        if (num[i] === 'a')
        {
            a.push(i)
        }

        if (num[i] === 'b')
        {
            b.push(i)
        }
    }

    var abba = []

    for (var j = 0; j < a.length; j++)
    {
        for(var k = 0; k < b.length; k++)
        {
            abba.push(Math.abs(a[j] - b[k]) - 1)
        }
    }

    checkResult = false
    for (var l = 0; l < abba.length; l++)
    {
        if (abba[l] == 3)
        {
            checkResult = true
            break
        }
    }

    return checkResult

}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false