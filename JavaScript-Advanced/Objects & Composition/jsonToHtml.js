function solve(dataAsJson){

    const result = [];
    result.push('<table>');

    const data = JSON.parse(dataAsJson);
    //console.log(data);

    // Collect property names (keys); Взимаме ключовете на [0] индекс и ги запазваме в променлива; ако го принтирам ще изглежда така ['Name', 'Score']
    const props = Object.keys(data[0]);


    result.push(`  <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`); // изглежда така <tr><th>Name</th><th>Score</th></tr> - първо правим header и другите данни ги взимаме със цикъл


    // Create rows for entry in collection
    for (let entry of data) {
        result.push(`  <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);
    }

    

    result.push('</table>');

    console.log(result.join('\n'));


}
solve(`[{"Name":"Stamat", 

"Score":5.5}, 

{"Name":"Rumen", 

"Score":6}]`);