import { parose } from "./fuggveny.js";

const max = Number.MAX_VALUE;

console.log(`várt edermény: true`);
console.log(`kapott edermény: ${parose(0)}`);

console.log(`várt edermény: true`);
console.log(`kapott edermény: ${parose(4)}`);

console.log(`várt edermény: false`);
console.log(`kapott edermény: ${parose(5)}`);

console.log(`várt edermény: true`);
console.log(`kapott edermény: ${parose(-4)}`);

console.log(`várt edermény: false`);
console.log(`kapott edermény: ${parose(-5)}`);

console.log(`várt edermény: false`);
console.log(`kapott edermény: ${parose(2.5)}`);

console.log(`várt edermény: true`);
console.log(`kapott edermény: ${parose(max)}`);

console.log(`várt edermény: ez nem szám`);
console.log(`kapott edermény: ${parose("valami")}`);
