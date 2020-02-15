function fpb(angka1, angka2)
{
    var j = 0
    var l = 0
    var tmp = []
    var tmp2 = []

    for (var i = 1;  i <= angka1; i++)
    {
            if (angka1 % i == 0 )
            {
                tmp [j] = angka1/i
                j ++
            }
    }

    for (var k = 1;  k <= angka2; k++)
    {
            if (angka2 % k == 0 )
            {
                tmp2 [l] = angka2/k
                l ++
            }
    }

    var o = 0
    var tmp3 = []
    for (var m = 0; m < tmp.length; m++)
    {
        for (var n = 0; n < tmp2.length; n++)
        {
            if (tmp[m] === tmp2[n])
            {
                tmp3[o] = tmp[m]
                o++
            }
        }
    }

    tmp4 = tmp3[0]

    return tmp4
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1