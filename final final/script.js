// const x = 6
// const list = [1, 2, "abc", 4, 5, 6, 6, 6]
// function findX(x, list) {
//     // let count = 0;
//     // for (let i = 0; i < list.length; i++) {
//     //     if (list[i] === x) {
//     //         count++;
//     //     }
//     // }
//     // return count;
//     // return list.filter(item => item === x).length;
//     if (list.includes(x) && typeof x === "number") {
//         return list.filter(item => item === x).length;
//     }

// }
// console.log(findX(x, list));

function Car(model, year, milage, price) {
    this.model = model;
    this.year = year;
    this.milage = milage;
    this.price = price;
}
const cars = [new Car("BMW", 2020, 15000, 30000),
    new Car("Audi", 2019, 20000, 35000),
    new Car("Mercedes", 2021, 10000, 500000),
    new Car("Tesla", 2022, 5000, 600000),
    new Car("Toyota", 2018, 25000, 20000),
    new Car("Honda", 2020, 30000, 25000),
    new Car("Nissan", 2019, 20000, 22000),
    new Car("Ford", 2020, 15000, 27000),
    new Car("Chevrolet", 2021, 10000, 30000),
    new Car("Porsche", 2022, 5000, 800000)
];
function printMostExpensiveCar(cars) {
    const mostExpensiveCar = cars.reduce((prev, curr) => {
        return (curr.price > prev.price) ? curr : prev;
    });
    console.log(`Most expensive car: ${mostExpensiveCar.model}, Price: ${mostExpensiveCar.price}`);
}

printMostExpensiveCar(cars);