const carPassing = function (cars, speed) {
  // create a new object with the properties 'speed' and 'time'
  const newCar = {
    speed: speed,
    time: Date.now()
  };

  // add the new object to the cars array
  cars.push(newCar);

  // return the updated cars array
  return cars;
}