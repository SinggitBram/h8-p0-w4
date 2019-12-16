function graduates(students) {
    let obj = {}
    
    for (let i = 0; i < students.length; i++) {
        if (!obj[students[i].class] && students[i].score > 75) {
            obj[students[i].class] = []
            obj[students[i].class].push(
                {'name': students[i].name, 'score': students[i].score}
            )
        } else if (students[i].score > 75) {
            obj[students[i].class].push(
                {'name': students[i].name, 'score': students[i].score}
            )
        }
    }
    return obj
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