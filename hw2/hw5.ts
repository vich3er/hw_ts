// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareRect = (a:number, b:number):number => a * b;
console.log(squareRect(10, 2));
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const sqrCircle = (r: number) : number=> 3.14 * Math.pow(r, 2);
console.log(sqrCircle(2));
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sqrCylinder = (h:number, r:number):number => 2 * 3.14 * r * (h + r);
console.log(sqrCylinder(2, 3));
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
const logArr = (arr:(number|string|boolean)[]) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
let arr8:number[] = [1, 3, 2, 4, 1, 5678, -66, -2];
logArr(arr8);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const makeP = (text:string):void=>{

   try{

       document.write(`<p>${text}</p>`);
   }
    catch (err){
        console.log('Лапки постав');
    }


}
makeP("// #59g0IsA\n" +
    "// - створити функцію яка створює параграф з текстом. Текст задати через аргумент");

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const makeUl = (text: string, howMuchLi:number) : void=> {
     document.write(`<ul>`);
    for (let i = 0; i < howMuchLi; i++) {
        document.write(`<li>${text}</li>`);

    }
         document.write(`</ul>`);
}
makeUl('te', 6);
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrToList = (arr: (number|string|boolean)[]):void=>{
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`);
}
arrToList([1, 2, 4, "hgfdew,", true, 0]);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
class Obj{

    constructor(private id: number, private name: string, private age: number) {

    }
}
const objArrToList = (array:Obj[]): void=>{
    for (const arrayElement of array) {
        document.write(`<div>`);
        for (const arrayElementKey in arrayElement) {
            document.write(`<p>${arrayElementKey} ${arrayElement[arrayElementKey]}</p>`)
        }
        // document.write(`<p>${ arrayElement.name} </p>`)

        document.write(`</div>`);

    }
}

let users1: Obj[] = [
    new Obj(1, "Іван",25), new Obj(2, "Марія", 30), new Obj(3, "Петро", 22)
    // { id: 1, name: 'Іван', age: 25 },
    // { id: 2, name: 'Марія', age: 30 },
    // { id: 3, name: 'Петро', age: 22 },
    // { id: 4, name: 'Олена', age: 28 },
    // { id: 5, name: 'Дмитро', age: 35 }
];
objArrToList(users1);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
const min = (arr: number[]): number => {
    let min:number = arr[0];
    for (const el of arr) {
        if (el < min) min = el;

    }
    return min;
}
console.log(min(arr8));
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArr = (arr:number[]): number => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sumArr([1, 2, 10]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap2 = (arr:(number|string|boolean)[], indx1:number, indx2:number):void => {
    let elInd1 = arr[indx1];
    // let elInd2 = arr[indx2];
    arr[indx1] = arr[indx2];
    arr[indx2] = elInd1;
}
let arr9:number[] = [11, 22, 33, 44]
swap2(arr9, 0, 1);
console.log(arr9);
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

class CurVal{
    currency: string;
    value: number

    constructor(currency: string, value: number) {
        this.currency = currency;
        this.value = value;
    }

    static makeObjForArr(array:{currency:string, value: number}[]): CurVal[] {
        let newArr:  CurVal[] = [];
        for (let el of array){
            newArr.push(new CurVal(el.currency, el.value))
        }
        return newArr;
    }
}
const exchange2 = (sumUAH:number, currencyValues:CurVal[], exchangeCurrency:string):number => {
    let exValue  ;

    for (const  el of  currencyValues) {
        if (el.currency ===exchangeCurrency)
        {
            exValue = el.value;
            break;
        }

     }

    return sumUAH/exValue;
}

console.log(exchange2(10000, CurVal.makeObjForArr([{currency:'USD',value:40},{currency:'EUR',value:1}]), 'USD'));