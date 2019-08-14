function changeMe(arr) {
    var hasil = []
    for (i=0; i<arr.length; i++){
        hasil.push(((i+1) + ' ' + arr[i][0] + ' ' + arr[i][1] + ':'));
        var data = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: 2019 - arr[i][3]
        }
        if (arr[i][3] === undefined || arr[i][3] > 2019){
            data.age = 'invalid birth year'
        }
        hasil.push(data)
    }
console.log(hasil)
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
