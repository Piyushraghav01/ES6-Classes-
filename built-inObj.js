const today = new Date();
console.log(today);

const birthDate = new Date('1999-06-12');
console.log(birthDate);

const someDay = new Date(1990, 07);
console.log(someDay);

console.log(birthDate.getFullYear());

console.log(birthDate.toDateString());
const birthStr = birthDate.toString();
console.log(birthStr.slice(11, 20));
