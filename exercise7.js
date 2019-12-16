function urutkanAbjad(str) {
    let abjad = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = ''
    for (var i = 0; i < abjad.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (str[j] === abjad[i]) {
                hasil += str[j]
            }
        }
    }
    return hasil
}
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
