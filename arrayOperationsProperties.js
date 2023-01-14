const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
const director = "Steven Spielberg";
console.log(director + " is the director of " + films.length + " films");
films.push("E.T.");
console.log(director + " is the director of " + films.length + " films");
films[2] = "Jurassic Park";
console.log(films);
films.push("A.I.");
console.log(films);
