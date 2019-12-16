function cariModus(arr) {
    let hasil = [[arr[0]]]

    for (let i = 1; i < arr.length; i++) {
        let val = false
        for (let j = 0; j < hasil.length; j++) {
            if (arr[i] === hasil[j][0]) {
                hasil[j].push(arr[i])
                val = true
            }
        }
        if (val === false) {
            hasil.push([arr[i]])
        }
    }
    if (hasil.length === arr.length || hasil.length === 1) {
        return -1
    }
    let akhir = hasil[0]
    for (let i = 0; i < hasil.length; i++) {
        if (hasil[i].length > akhir.length) {
            akhir = hasil[i]
        }
    }
    return akhir[0]
}

  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1