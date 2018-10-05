module.exports = function getZerosCount(number, base) {
    let arr = [];
    let zeros = 0;
    let j = 0;
    let i = 2;
    if (base === 2 ){
        return 0;
    }
    do {
        if (base % i === 0) {
            arr[j] = i;
            j++;
            base = base / i;
        }
        else {
            i++;
        }
    }
    while (i < base);{
    arr[j] = i;
    }
    let num = 0;
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] === base) {
            num++;
        }

    }

    for (let k = base; number / k >= 1; k = k * base) {
        zeros = zeros + Math.floor(number / k);
    }

    return Math.floor(zeros / num);
};