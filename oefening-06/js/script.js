const students = [
    { name: "An", grades: [14, 16, 12, 18] },
    { name: "Ben", grades: [9, 7, 11, 8] },
    { name: "Cas", grades: [15, 17, 14, 16] },
    { name: "Dina", grades: [6, 8, 5, 9] },
    { name: "Eli", grades: [13, 11, 15, 12] },
];

function calculateAverage(grades) {
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    return Math.round((total / grades.length) * 100) / 100;
}

// Arrow notatie:
// const calculateAverage = (grades) => {
//     let total = 0;
//
//     for (let i = 0; i < grades.length; i++) {
//         total += grades[i];
//     }
//
//     return Math.round((total / grades.length) * 100) / 100;
// };

function getPassingStudents(studentsList) {
    const passingStudents = [];

    for (let i = 0; i < studentsList.length; i++) {
        if (calculateAverage(studentsList[i].grades) >= 10) {
            passingStudents.push(studentsList[i]);
        }
    }

    return passingStudents;
}

// Arrow notatie:
// const getPassingStudents = (studentsList) => {
//     const passingStudents = [];
//
//     for (let i = 0; i < studentsList.length; i++) {
//         if (calculateAverage(studentsList[i].grades) >= 10) {
//             passingStudents.push(studentsList[i]);
//         }
//     }
//
//     return passingStudents;
// };

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name}: ${calculateAverage(students[i].grades)}`);
}

console.log("Geslaagde studenten:");

const passingStudents = getPassingStudents(students);

for (let i = 0; i < passingStudents.length; i++) {
    console.log(`${passingStudents[i].name} is geslaagd`);
}
