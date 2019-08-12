function ubahHuruf(kata) {
    var abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var kataBaru = ''
    for(var i=0; i<kata.length; i++){
        var huruf = kata[i]
        for(j=0; j<abjad.length; j++){
            if(huruf === abjad[j]){
                kataBaru = kataBaru + abjad[j+1]
            }
        }
    }
    return kataBaru
}


  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu