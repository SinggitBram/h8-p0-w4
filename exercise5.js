function ubahHuruf(kata) {
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = ''
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < kamus.length; j++) {
            if (kata[i] === kamus[j] && kata[i] !== 'z') {
                hasil = hasil + (kamus[j + 1])
            } else if (kata[i] === kamus[j] && kata[i] === 'z') {
                hasil = hasil + 'a'
            }
        }
    }
    return hasil
}

  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu