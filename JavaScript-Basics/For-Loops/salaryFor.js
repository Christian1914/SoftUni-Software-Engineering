function salary(input) {
  let index = 0;  
  let openedTabs = Number(input[index]);
  index++;
  let salaryy = Number(input[index]);
  index++

  for (let i = 1; i <= openedTabs; i += 1) {
    let currentTab = input[index];
    index++;
    if (currentTab === "Facebook") {
      salaryy -= 150;
    } else if (currentTab === "Instagram") {
      salaryy -= 100;
    } else if (currentTab === "Reddit") {
      salaryy -= 50;
    }
    if (salaryy <= 0) {
      console.log(`You have lost your salary.`);
      break;
    }
  }
  if (salaryy >= 1) {
    console.log(`${salaryy}`);
  }
}
