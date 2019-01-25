function logFunc(arr, func) {
    arr.map(item => console.log(item, func(item)));
}