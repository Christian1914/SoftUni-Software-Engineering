function matchDates(input) {
    let text = input.shift();
    let pattern = /\b(?<day>\d{2})([/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    // \b - граница
    // ?<day> - ден
    // d{2} - трябва да започва с две числа - денят
    // ([/.-]) - разделители
    // ?<month> - месец
    // [A-Z][a-z] - след това, първата буква трябва да е главна, а следващата малка
    // \2 - сепаратора трябва да е същия
    // ?<year> - година
    // \d{4} - 4 цифри за годината
    let matches = text.matchAll(pattern);

    for (const match of matches) {
        // console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`);
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);