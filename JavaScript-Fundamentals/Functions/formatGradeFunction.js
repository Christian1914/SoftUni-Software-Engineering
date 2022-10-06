function formattingGrade(grade){
    let weakGrade = false;

    if(grade >= 3.00 && grade < 3.50){
        totalgrade = "Poor"
    } else if (grade >= 3.50 && grade < 4.50){
        totalgrade = "Good"
    } else if (grade >= 4.50 && grade < 5.50){
        totalgrade = "Very good"
    } else if (grade >= 5.50){
        totalgrade = "Excellent"
    
    }

    if(grade < 3.00){
        weakGrade = true;
        grade = 2
        //totalgradee = "Fail"
    }
    if(weakGrade){
        totalgradee = "Fail"
        console.log(`${totalgradee} (${grade})`)
    } else {
        fixedGrade = grade
    console.log(`${totalgrade} (${fixedGrade.toFixed(2)})`)
    }
}