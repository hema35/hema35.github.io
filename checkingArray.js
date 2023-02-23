const studentIds = [1,2,4,5,7,8,9,11];
const matchIds = [12,21];
let result = studentIds.some(val => matchIds.includes(val));
console.log(result)


