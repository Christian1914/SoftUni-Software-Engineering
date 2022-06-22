function sumrecord(input) {
  let record = Number(input[0]);
  let meeters = Number(input[1]);
  let seconds = Number(input[2]);

  meetersInSeconds = meeters * seconds;
  newSeconds = (meeters / 15).toFixed(0) * 12.5;
  totalTime = meetersInSeconds + newSeconds;
  //leftTime = Math.abs(totalTime - record)

  if (totalTime <= record) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`
    );
  }
}

sumrecord(["10464", "1500", "20"]);
