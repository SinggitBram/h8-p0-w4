function cariMedian(arr) {
    var tengahIndex = arr.length / 2
    angkaMedian = 0
    if (arr.length % 2 === 0){
        angkaMedian = (arr[tengahIndex] + arr[tengahIndex - 1]) / 2
    }
    else {
        angkaMedian = arr[tengahIndex - 0.5]
    }
    return angkaMedian
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5