function printStudents(input) {
    let students = {};

    for (const line of input) {
        let studentArr = line.split(' ');
        let name = studentArr.shift();
        let grades = studentArr.map(Number);

        // if (students[name]) {
        //     students[name] = students[name].concat(grades)
        // } else {
        //     students[name] = grades;
        // }
        if (!students[name]) { // ако го няма, добави го
            students[name] = []; // добави името на студента като key, а срещу него празен масив
        }

        students[name] = students[name].concat(grades); // ако го има добави оценките към сегашните, конкатенираме ги
    }

    let studentsEntries = Object.entries(students); // връща масив от обекта
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0])); // сортираме по азбучен ред keys - имената

    for (const [name, grades] of sortedStudents) { // циклим по масива, разбиваме го на име и оценки
        let sum = 0; // събираме всички оценки на студента

        for (const grade of grades) { // циклим по оценките на студента от предния цикъл
            sum += grade; // събираме оценките в променливата sum
        }

        let average = sum / grades.length; // смятаме средната оценка на всеки и принтираме, всичко е в цикъла

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

printStudents(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);
