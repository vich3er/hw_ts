// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max(a: number, b: number, c: number): number {
    let max:number = a;
    if (max < b) max = b;
    if (max < c) max = c;
    return max;
}

//
//
//
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function maxQ(...x: number[]): number {
    let max:number = x[0];
    for (const el of x) {
        if (el > max) max = el;
        console.log(el);
    }

    return max;
}

console.log(maxQ(1, 3, 2, -1, 0, 22222, 22, 99));

function arg(...x: (string | number | boolean)[]): void {
    if (arguments.length === 1) console.log(arguments[0])
    else {
        let str:string = '';
        for (const el of x) {
            str += el + " ";
        }
        console.log(str)
    }
}

arg(1, 2, 4, "seeds", true);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



interface IObj {
[key: string]: string|number|boolean
}


function arrObjToKey(arr: IObj[] ): (string | boolean | number)[] {
    let arrKey: (string|boolean|number)[] = [];
    for (const el of arr) {
        for (const elKey in el) {
            arrKey.push(elKey);
        }
    }
    return arrKey;
}

let arr1: IObj[] = [{name: 'Dima', age: 13}, {model: 'Camry'}];
console.log(arrObjToKey(arr1));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


function arrValues(arr: IObj[]) : (string|number|boolean)[]{
    let values = [];
    for (const arrElement of arr) {
        for (const arrElementKey in arrElement) {
            values.push(arrElement[arrElementKey]);
        }

    }
    return values;
    //console.log(values);
}

arrValues(arr1);
// console.log(arrValues(arr1))