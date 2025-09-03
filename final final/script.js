const x = 6
const list = [1, 2, "abc", 4, 5, 6, 6, 6]
function findX(x, list) {
    // let count = 0;
    // for (let i = 0; i < list.length; i++) {
    //     if (list[i] === x) {
    //         count++;
    //     }
    // }
    // return count;
    // return list.filter(item => item === x).length;
    if (list.includes(x) && typeof x === "number") {
        return list.filter(item => item === x).length;
    }

}
console.log(findX(x, list));