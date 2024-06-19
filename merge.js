function mergeSort(arr) {
    if (arr.length === 1) {
        return;
    } else {
        const arrayL = arr.slice(0, arr.length / 2);
        const arrayR = arr.slice(arr.length / 2, arr.length);
        let ordered = [];
        mergeSort(arrayL);
        mergeSort(arrayR);
        return console.log(
            (ordered = arrayL.concat(arrayR).sort((a, b) => {
                return a - b;
            }))
        );
    }
}

const arr = [234, 12213123, 53, 1, 5, 7, 8, 23423568];

mergeSort(arr);
