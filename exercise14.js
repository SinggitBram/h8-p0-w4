function naikAngkot(arrPenumpang) {
    let hasil = []
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    for(let i = 0; i< arrPenumpang.length; i++){
        let obj = {} 
        obj['penumpang'] = arrPenumpang[i][0];
        obj['naikDari'] = arrPenumpang[i][1];
        obj['tujuan'] = arrPenumpang[i][2]
        obj['bayar'] = 2000 * (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]))
        hasil.push(obj)
    }
    return hasil
}  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]