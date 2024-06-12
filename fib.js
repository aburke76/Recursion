function fibs(n) {
    const array = [0, 1];
    if (n <= 0) {
        console.log("Enter number greater than 0");
    } else if (n == 1) {
        console.log(array[0]);
    } else if (n == 2) {
        console.log(array[1]);
    } else {
        for (let i = 1; i < n; i++) {
            const nextNum = array[array.length - 1] + array[array.length - 2];
            array.push(nextNum);
        }
    }
    return array;
}

function fibsRec(n) {}

console.log(`This is iteration: ${fibs(8)}`);
