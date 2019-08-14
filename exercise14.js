function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var indexAwal = 0
    var indexAkhir = 0
    var objek = {}
    var array = []
    for (var i=0; i<arrPenumpang.length; i++){
        indexAwal = rute.indexOf(arrPenumpang[i][1])
        indexAkhir = rute.indexOf(arrPenumpang[i][2])
        var jarak = Math.abs(indexAwal - indexAkhir)
        var biaya = jarak * 2000
        objek = {
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
            bayar : biaya
        }
        array.push(objek)
    }
    return array
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]