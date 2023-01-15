const judgeVegetable = function (vegetables, metric) {
  let max = 0;
  let submitter = '';
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > max) {
      max = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
}

//Initialize two variables, max and submitter, to keep track of the highest value of the judging characteristic and the submitter of the vegetable with that value.
//Iterate through the array of vegetables using a for loop.
//For each vegetable, check if its value for the judging characteristic (vegetables[i][metric]) is greater than the current max value.
//If it is, update the max variable to the new value and update the submitter variable to the submitter of the current vegetable (vegetables[i].submitter)
//Return the submitter variable after the loop has finished.

