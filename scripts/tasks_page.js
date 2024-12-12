//#59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function makePar(text) {
    document.write("<p>".concat(text, "</p>"));
}
makePar('swerdctfgbhjnknhbgvyc54xcrtvgbhjnknhbuyt654drctgvhbjnihy7gt6gftg7ybhnjknhbnhhbhbbhbhbhbhhbwecrvbnjmnhbvcrecrtvgbhj hbgvcrexcrtvbhnjmknbvcrexxecrtvbhjnmk');
// #59g0IsA
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function makeList(liText) {
    document.write("<ul><li>".concat(liText, "</li><li>").concat(liText, "</li><li>").concat(liText, "</li></ul>"));
}
makeList('kkkkk');
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function makeNewList(text, listQuantity) {
    document.write('<ul>');
    for (var i = 0; i < listQuantity; i++) {
        document.write("<li>".concat(text, "</li>"));
    }
    document.write('</ul>');
}
makeNewList('text', 5);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function makeListFromArr(arr) {
    document.write('<ul>');
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var arrElement = arr_1[_i];
        document.write("<li>".concat(arrElement, "</li>"));
    }
    // for (let i = 0; i < arr.length; i++) {
    //     document.write(`<li>${arr[i]}</li>`) ;
    // }
    document.write('</ul>');
}
makeListFromArr([1333, 9, true, false, "xserdtghjikjhuhhuhuh"]);
var User = /** @class */ (function () {
    function User(id, name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var users = [
    new User(1, "Іван", 25),
    new User(2, "Марія", 30),
    new User(3, "Петро", 22),
    new User(4, "Олена", 28),
    new User(5, "Дмитро", 35)
];
//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function blockObj(arr) {
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var arrElement = arr_2[_i];
        document.write("<div>");
        for (var arrElementKey in arrElement) {
            document.write("<p>".concat(arrElementKey, " ").concat(arrElement[arrElementKey], " </p>"));
        }
        document.write("</div>");
    }
}
blockObj(users);
