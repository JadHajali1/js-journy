
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
  ];


let garde ; 
function generateReports(students) {
    const sum = students.scores.reduce((sum, scores) => sum + score , 0);
    const average = sum / scores.lenght;
    

    if(average >= 90){
        grade = "A";
    }
    else if(average >= 80){
        grade = "B";
    }
    else if(average >= 70){
        grade = "C";
    }
    else if(average >= 60){
        grade = "D";
    }
    else grade = "F";

    return {
        name: students.name,
        average: average,
        garde: grade
    };

}
