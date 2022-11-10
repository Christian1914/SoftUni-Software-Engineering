function innOrNot(input) {
  let parkingList = new Map();
  let fullList = input.map((el) => el.split(", ")); // сплитваме масива със мап

  fullList.forEach((element) => {
    // правим цикъл с променливите
    let command = element[0];
    let carNumber = element[1];

    if (command === "IN") {
      parkingList.set(carNumber, command); // ако е ИН добавяме номера и командата
    } else if (command === "OUT") {
      parkingList.delete(carNumber); // ако е АУТ изтриваме номера
    }
  });
  let sortedCarNumbers = Array.from(parkingList).sort((a, b) =>
    a[0].localeCompare(b[0])
  ); // връща масив от масиви от мапа защото е ключ - стойност и заедно с тва сортираме
  if (sortedCarNumbers.length === 0) {
    // ако няма номера изкарваме че паркинга е празен
    console.log("Parking Lot is Empty");
  } else {
    sortedCarNumbers.forEach((carNumber) => console.log(carNumber[0])); // в елса ако има номера, ги изкарваме всички
  }
}
innOrNot([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
