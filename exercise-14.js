function naikAngkot(arrPenumpang)
{
    rute = ['A', 'B', 'C', 'D', 'E', 'F']

    var result = []
    if (arrPenumpang == '')
    {
        return result
    }
    else
    {
    for(var i = 0; i < arrPenumpang.length; i++)
    {
        var nama = arrPenumpang[i][0]
        var begin = 0
        var destination = 0 
        var price = 0

        let bayarRute = {}

            for (var  j = 0; j < rute.length; j++)
            {
                if (arrPenumpang[i][1] === rute[j])
                {
                    begin = j
                }

                if (arrPenumpang[i][2] === rute[j])
                {
                    destination = j
                }
            }

            price = (destination-begin)*2000

            bayarRute['penumpang'] = nama
            bayarRute['naikDari'] = arrPenumpang[i][1]
            bayarRute['tujuan'] = arrPenumpang[i][2]
            bayarRute['bayar'] = price
            result.push(bayarRute)
    }

}
    return result   
}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]