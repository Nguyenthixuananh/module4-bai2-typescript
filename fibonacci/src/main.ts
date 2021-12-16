let a: number = 0;
let b: number = 1;
let sum: number = 0;
for (let i = 2; i < 10; i++) {
    let c: number = a + b;
    sum += c;
    a=b;
    b=c;
}
console.log(sum);