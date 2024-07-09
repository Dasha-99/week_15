let numbers = [];
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

//let a = numbers;

let k = 0;
let firstLength = numbers.length
for (let i = 0; i < firstLength; i++) {
    if (numbers[k] < 0) {
        numbers[k] = numbers[numbers.length - 1];
        numbers.pop();
    }
    else {
        k++;
    }
}
console.log(numbers);


for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2;
}
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] < numbers[j + 1]) {
            let tempNumber = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = tempNumber;
        }
    }
}
console.log(numbers);
//console.log(a === numbers)