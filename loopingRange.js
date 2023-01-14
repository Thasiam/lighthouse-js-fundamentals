function range(start, end, step) {
  let result = [];

  if (step > 0) {
    for (let i = start; i <= end; i = i + step) {
      result.push(i);
    }
  }
  
  return result;
}
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));
console.log(range());
console.log(range(8, 0, 2));
console.log(range(0, 8, -2));


