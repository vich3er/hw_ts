// #yo06d74c1C
// - є масив


class Courses {
    constructor(private _title: string, private _monthDuration:number) {
    }
    static makeObjFromArr(arr:{title:string, monthDuration: number}[]): Courses[]{
        let newArr: Courses[] = [];
        for (let el of arr){
            newArr.push(new Courses(el.title, el.monthDuration))
        }
        return newArr;
    }


    get title(): string {
        return this._title;
    }

    get monthDuration(): number {
        return this._monthDuration;
    }
}

let coursesAndDurationArray =Courses.makeObjFromArr([
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]);

console.log(coursesAndDurationArray);
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
}));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtred:Courses[]= coursesAndDurationArray.filter(value => value.monthDuration>5);
console.log(filtred);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
class CourseAndId extends Courses{

    constructor( title: string, monthDuration:number, private id:number) {
        super(title, monthDuration);
    }
}

let coursesAndDurationArrayId:CourseAndId[] = coursesAndDurationArray.map((value, index)=>{
    return   new CourseAndId(value.title, value.monthDuration, (index+Math.floor((Math.random()*1000))))

        //...value, id: index+ parseInt(Math.random()*1000)
})
console.log(coursesAndDurationArrayId);

// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let cardsSuit:string[] = [ 'spade', 'diamond','heart', 'clubs'];
let values:string[] = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
class Card {
     value: string;
     suit: string;
     color: "red" | "black"

}
let cards: Card[] = [];

for (const value of values) {
    for(const suit of cardsSuit ){
        let  card:Card = new Card();
        card.value= value;
        card.suit = suit
        if ( card.suit ==='heart' || card.suit==='diamond')
            card.color= "red"
        else card.color = "black";
        cards.push(card)    ;
    }

}
console.log(cards);
// - знайти піковий туз
let aceOfSpade:Card[]= cards.filter((value)=> {
    if (value.value==='ace'&& value.suit==='spade')
        return value;
});
let aceOfSpades:Card = aceOfSpade[0];
console.log(aceOfSpades);
console.log(cards.indexOf(aceOfSpades));
// - всі шістки
let sixes:Card[] = cards.filter((value)=>value.value==='6');
console.log(sixes);
// - всі червоні карти
let reds:Card[] = cards.filter((value)=>value.color==='red');
console.log(reds);
// - всі буби
let diamonds: Card[] = cards.filter((value)=>value.suit==='diamond');
console.log(diamonds);
// - всі трефи від 9 та більше
let clubs: Card[] = cards.filter((value)=>+value.value>=9 && value.suit==='clubs');
console.log(clubs);


// =========================

//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
class cardSuitArr {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[]
    constructor() {
        this.diamonds= []
        this.hearts = []
        this.clubs = []
        this.spades =[]
    }
}

let cardSuitObj = new cardSuitArr()
// cardSuitObj.spades=[];
// cardSuitObj.clubs =[];
// cardSuitObj.hearts =[];
// cardSuitObj.diamonds = [];
console.log(cardSuitObj);
cards.reduce((acamulator, currentV)=>{
 //   console.log(currentV);
    let suit = currentV.suit;
    switch (suit){
        case 'spade':
            acamulator.spades.push(currentV);
            break;
        case 'diamond':
            acamulator.diamonds.push(currentV);
            break;
        case 'heart':
            acamulator.hearts.push(currentV);
            break;
        case 'clubs':
            acamulator.clubs.push(currentV);
            break;

    }
    return acamulator;
}, cardSuitObj);

console.log(cardSuitObj)




// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray

class CoursesSecond extends Courses{
    // get hourDuration(): number {
    //     return this._hourDuration;
    // }
    //
    // get modules(): string[] {
    //     return this._modules;
    // }
    get hourDuration(): number {
        return this._hourDuration;
    }

    get modules(): string[] {
        return this._modules;
    }

    constructor(title: string, monthDuration: number, private _hourDuration:number, private _modules:string[] ) {
        super(title, monthDuration);
    }
    // private _hourDuration: number;
    // private _modules: string[]
    static makeObjFromArr(arr: {title: string, monthDuration: number, hourDuration:number,modules:string[]}[]):CoursesSecond[]{
        let newArr: CoursesSecond[] = []
        for (let el of arr){
                newArr.push(new CoursesSecond(el.title, el.monthDuration, el.hourDuration, el.modules))
        }
        return newArr;

    }



}


let coursesArray = CoursesSecond.makeObjFromArr([
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
])
console.log(coursesArray);
// --написати пошук всіх об'єктів, в яких в modules є sass
let haveSass:CoursesSecond[] = coursesArray.filter((value)=>{
    return  value.modules.includes('sass');
})
 console.log(haveSass);
// // --написати пошук всіх об'єктів, в яких в modules є docker
let haveDocker:CoursesSecond[] = coursesArray.filter((value)=>{
    return value.modules.includes('docker');
})
console.log(haveDocker);