function graduates (students) {
    var hasil= {}
    for(var i=0; i<students.length; i++){
        var nama = students[i].name
        var skor = students[i].score
        var kelas = students[i].class
        if (skor > 75){
            if(!hasil[kelas]){
                hasil[kelas] = []
            }
            hasil[kelas].push({
                name: nama,
                score: skor
                })
            }
        }
        return hasil    
    }
    
  

  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
//   {
//     foxes: [
//       { name: 'Dimitri', score: 90 }
//     ],
//     wolves: [
//       { name: 'Alexei' , score: 85 },
//       { name: 'Anastasia', score: 78 }
//     ]
//   }