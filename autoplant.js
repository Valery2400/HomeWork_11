// Задание 1
// У вас есть массив объектов:

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false }, 
];
// Создайте на основе страрого массива новый массив объектов по образу: 
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

// const shortDescpiptions = cars.map(({ brand , isDiesel })=> ({ brand , isDiesel }));
// console.log(shortDescpiptions);

const newCars = cars.map((car)=>{
    return{brand:car.brand, isDiesel:car.isDiesel}
});
console.log(newCars);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const DieselCars = cars.filter((car)=>car.isDiesel);
console.log(DieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const nonDieselCars = cars.filter((car)=>!car.isDiesel);
console.log(nonDieselCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const sum = cars
.filter((car)=>!car.isDiesel)
.map((car)=>car.price)
.reduce((acc, price)=>acc+price,0)
console.log(sum)

// Задание 5
// Повысьте цену всех машин в массиве на 20%.

cars.forEach((car)=>car.price *=1.2)
console.log(cars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const cars2 = cars.map((car)=>{
    if (car.isDiesel) {
        return{brand:"Tesla",price:25000, isDiesel:false};

    }
    return car
});
console.log(cars2);

