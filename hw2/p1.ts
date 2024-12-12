
let str1:string = ' dirty string   '
let newStr: string = str1.trim();// чистить стрінгу від пробілів по бокам

//         #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2:string = 'Ревуть воли як ясла повні';
function stringToArray (array){
    return array.split(' ');
}
let arrq:string[] = stringToArray(str2);
console.log(arrq);


// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr2q:number[] = [10,8,-7,55,987,-1011,0,1050,0];
let arr3q:string[] = arr2q.map((value)=>{
    return  value.toString();
})
console.log(arr3q);
console.log(arr2q);
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//         let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums:number[] = [11,21,3];

function  sortNums(array:number[],direction:string): number[] | string{
    if (direction==='ascending' ){
        return  array.sort((a:number, b:number): number=>a-b )
    }
    else if( direction==='descending'){
        return   array.sort((a:number, b:number): number=>b-a)
    }
    else{
        return "неправильний аргумент"
    }
}


