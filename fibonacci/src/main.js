var a = 0;
var b = 1;
var sum = 0;
for (var i = 2; i < 10; i++) {
    var c = a + b;
    sum += c;
    a = b;
    b = c;
}
console.log(sum);
