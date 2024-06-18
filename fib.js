function fibs(n) {
    const array = [0, 1];
    if (n <= 0) {
        return "Enter number greater than 0";
    } else if (n === 0) {
        return [];
    } else if (n === 1) {
        return array[0];
    } else if (n === 2) {
        return array[1];
    } else {
        for (let i = 2; i < n; i++) {
            const nextNum = array[array.length - 1] + array[array.length - 2];
            array.push(nextNum);
        }
    }
    return array;
}

function fibsRec(n, arr = [0, 1]) {
    if (n < 0) {
        return "Enter number greater than 0";
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return fibsRec(n, arr);
    }
}

console.log(`This is iteration: ${fibs(8)}`);
console.log(`This is recursion: ${fibsRec(8)}`);
