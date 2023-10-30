function makeSum() {
    let sum = 0;
    return function (num) {
        return sum += num;
    };
}

let sum = makeSum();
console.log(sum(1));
console.log(sum(3));
console.log(sum(4));