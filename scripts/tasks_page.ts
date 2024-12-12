//#59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function makePar(text: string): void {
    document.write(`<p>${text}</p>`);
}

makePar('swerdctfgbhjnknhbgvyc54xcrtvgbhjnknhbuyt654drctgvhbjnihy7gt6gftg7ybhnjknhbnhhbhbbhbhbhbhhbwecrvbnjmnhbvcrecrtvgbhj hbgvcrexcrtvbhnjmknbvcrexxecrtvbhjnmk')
;
// #59g0IsA
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function makeList(liText: string): void {
    document.write(`<ul><li>${liText}</li><li>${liText}</li><li>${liText}</li></ul>`);
}

makeList('kkkkk');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function makeNewList(text: string, listQuantity: number): void {
    document.write('<ul>');
    for (let i: number = 0; i < listQuantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
}

makeNewList('text', 5);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function makeListFromArr(arr: (string | number | boolean)[]): void {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }

    // for (let i = 0; i < arr.length; i++) {
    //     document.write(`<li>${arr[i]}</li>`) ;
    // }
    document.write('</ul>');

}

makeListFromArr([1333, 9, true, false,  "xserdtghjikjhuhhuhuh"]);

class User {

    constructor(id: number, private name: string, private age: number) {
    }
}


let users: User[] = [
    new User(1, "Іван", 25),
    new User(2, "Марія", 30),
    new User(3, "Петро", 22),
    new User(4, "Олена", 28),
    new User(5, "Дмитро", 35)

];


//створити функцію яка прий має масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function blockObj(arr: User[]): void {
    for (const arrElement of arr) {
        document.write(`<div>`);
        for (const arrElementKey in arrElement) {
            document.write(`<p>${arrElementKey} ${arrElement[arrElementKey]} </p>`)
        }
        document.write(`</div>`);
    }
}

blockObj(users);