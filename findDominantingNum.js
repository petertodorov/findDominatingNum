function findDominatingNum(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        if (obj.hasOwnProperty(ar[i])) {
            obj[input[i]]++;
        } else {
            obj[input[i]] = 1;
        }
    }
    let key = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    let val = obj[key];
    if (input.length % 2 === 0) {
        return (val > (input.length / 2) ? `The dominating number => ${key}` : 'No dominating num');
    } else {
        return (val >= Math.ceil(input.length / 2) ? `answer is =>${key}` : 'No dominating num');
    }
}

console.log(findDominatingNum(ar));
