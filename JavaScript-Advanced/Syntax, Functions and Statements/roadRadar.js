function kat(speed, area){
    let limit = 0;

    if(area === 'motorway'){
        limit = 130
    } else if(area === 'interstate'){
        limit = 90
    } else if(area === 'city'){
        limit = 50
    } else if(area === 'residential'){
        limit = 20
    }

    const speeding = speed - limit;

    if(speeding <= 0){
        //console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return `Driving ${speed} km/h in a ${limit} zone` // -- return Играе ролята на break
    }

    let status = '';
    if(speeding <= 20){
        status = 'speeding'
    }else if(speeding > 20 && speeding <= 40){
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }
    //console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`
}
kat(40, 'city'  )