function digitPerkalianMinimum(angka) {

    let hasil = []
    for (let i = 1; i <= angka; i++) {
        for (let j = 1; j <= angka; j++) {
            if (i * j === angka) {
                hasil.push([i, j])
            }
        }
    }
    return (hasil[Math.floor(hasil.length/2)][0].toString() + hasil[Math.floor(hasil.length/2)][1].toString()).length
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2