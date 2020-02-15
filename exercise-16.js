function graduates(students)
{
    var newObj = {}
    if (students == '')
    {
        return newObj
    }

    else{

    
    for (var i = 0; i < students.length; i ++)
    {
        if(newObj[students[i].class] == null)
        {
          newObj[students[i].class] = []

          var newObj1 = {}
            
          if (students[i].score > 75)
          {
            newObj1['name'] = students[i].name
            newObj1['score'] = students[i].score
            newObj[students[i].class].push(newObj1)
          }
        }

        else{

          var newObj1 = {}
          if (students[i].score > 75)
          {
            newObj1.name = students[i].name
            newObj1.score = students[i].score
            newObj[students[i].class].push(newObj1)
          }
        }
    }
}
  return newObj
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
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}