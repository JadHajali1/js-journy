
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];

//big O(n) => n being the lenght of the score
let garde ; //big O (1)
function generateReports(students) {
    const sum = students.scores.reduce((sum, scores) => sum + score , 0); //big O(n). becuase reduce method will iterates throgh the list of the score
    const average = sum / scores.lenght; //big O (1)
    

    if(average >= 90){ //big O (1)
        grade = "A";
    }
    else if(average >= 80){ //big O (1)
        grade = "B";
    }
    else if(average >= 70){ //big O (1)
        grade = "C";
    }
    else if(average >= 60){ //big O (1)
        grade = "D";
    }
    else grade = "F"; //big O (1)

    return {
        name: students.name, //big O (1)
        average: average,   //big O (1)
        garde: grade    //big O (1)
    };

}

console.log(generateReports(students)); //big O (1)
