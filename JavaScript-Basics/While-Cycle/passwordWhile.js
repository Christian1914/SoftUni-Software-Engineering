function password(input){
    let username = input[0];
    let passwordd = input[1];
    let data = input[2];
    let index = 3;

    while(data !== passwordd){
        data = input[index];
        index++;

    }
    console.log(`Welcome ${username}!`);
}