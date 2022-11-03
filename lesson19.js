const months = [`Janury`, `Feb`, `March`, `April`, `May`, `June`, `July`, `Augest`];
console.log(months[3])
console.log(months.length)
months[2]="Tomer";
console.log(months[2])
months.push("September");
console.log(months);


const sports = ['soccer', 'baseball'];
const total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4