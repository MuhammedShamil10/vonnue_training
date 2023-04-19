
categoryOne = [
    {
        television: "Amazon miniTV",
        amzonSell: "Sell",
        amzonBestSeller: "Best Seller",
        amzonMobile: "Mobile",
        deals: "Today's Deals",
        service: "Customer Service",




    }
]

categoriesTwo = [
    {
        mobile: "Mobiles & Accessories",
        // electric: `https://m.media-amazon.com/images/G/31/img18/Electronics/Megamenu/Megamenu_Electronics_top._CB485947327_.png`,
        laptop: "Laptop & Accessories",
        tv: "TV & Home Entertainment",
        audio: "Audio",
        camera: "Cameras",
        computer: "Computer Peripherals",
        technology: "Smart Technology",
        instruments: "Musical Instruments",
        officeAndSta: "Office & Stationery"
    }
]
let categoryEl = document.getElementById("category-el");

let navBottom = categoriesTwo.map(function (item) {
    let html = `
                <span><img class="electro-img" src="/Amazon/Assets/Img/Electronics_.png" alt="" width="100px"></span>
                <span>${item.mobile}</span>
                <span>${item.laptop}</span>
                <span>${item.tv}</span>
                <span>${item.audio}</span>
                <span>${item.camera}</span>
                <span>${item.computer}</span>
                <span>${item.technology}</span>
                <span>${item.instruments}</span>
                <span>${item.officeAndSta}</span>
           `
           return html
});
categoryEl.innerHTML = navBottom;



// const myObj = {
//     a: 1,
//     b: 3,
//     c: function () {
//         console.log(this);
//     }
// };

// const yourObj = {
//     d: 4,
//     e: 5
// };

// let save = myObj.c;
// save.call(myObj);

// function one() {
//     let a = 100;
//     two(a);
//     console.log("one", a);
// }

// function two(b) {
//     b = b + 1;
//     console.log("two", b);
// }

// one();

// function one() {
//     let a = {
//         value: 100
//     };
//     two(a);
//     console.log("one", a.value);
// }

// function two(b) {
//     b.value = b.value + 1;
//     console.log("two", b.value);
// }

// one();

// // closure

// function main(c) {
//     [1,2,3,4,5,6,7,8,9,0]
//     .forEach(function(i) {
//         console.log(i, c);
//     })
// }
// main(10);        


// let alphabet = "abcdefghijklmnopqrstuvwxyz";

// function caeserEncrypt(stringLtr, shift) {
//     let newStr = "";
//     for(let i = 0; i < stringLtr.length; i++) {
//         let pos = alphabet.indexOf(stringLtr.charAt(i));
//         // console.log(pos);
//         let EnPos = (pos+shift) % 26;
//         let newChar = alphabet.charAt(EnPos);
//         newStr = newStr + newChar;
//     }
//     console.log(newStr);

// }
// caeserEncrypt("shamil", 1);



// // D_{n}(x)=(x-n)\mod {26}.

// let objs = [
//     {
//         name: 'one',
//         msg: 'I am one'
//     },
//     {
//         name: 'two',
//         msg: 'I am two'
//     },
//     {
//         name: 'three',
//         msg: 'I am three'
//     }
// ];

// let spreadOp = {
//     ...objs
// }
// console.log(spreadOp);

// function main() {
//     objs.forEach((item)=> {
//         const btn = document.createElement('button');
//         btn.innerHTML = item.name;
//         btn.onclick = getCallback(item.msg);
//         document.body.appendChild(btn);
//     }); 
// }
//   function getCallback (arg) {
//       return function () {
//           alert(arg);
//       }
//   }
// main();

// let obj1 = {
//     a: 1,
//     b: 2
// }


// var obj2 = {...obj1};
// obj2.c = 1;

// console.log(obj1, obj2);

// let obj = {
//     a: 1,
//     b: 2,
// }

// let newObj = {...obj }

// let sa = [1,2,3,4,5,86];
// let as = Math.max(...sa);
// console.log(as);

// // de stracturing

// let obj11 = {
//     name:'code malayalam',
//     place: 'kerala',
//     rank: 3789,
//     adi: "hi"
// };
// function callingObj11() {
//     const {
//         name,
//        adi = false
//     } = obj11;

//     console.log(name, others, adi);
// }
// callingObj11();

// arr = [1,2,3,4,5,6,5];

// function hiFunvtion() {
//     const [a, , b, ...other] = arr;
//     console.log(a, b, other);
// }
// hiFunvtion();


// let objts = {
//     name: 'code',
//     place: 'malayalam'
// }

// let objtss = {
//     name: 'coder',
//     place: 'hollywood'
// }

// function abc() {
//     let {
//         peru,
//         place
//     } = objts;

//     let {
//         peru,
//         place
//     } = objtss;

//     console.log(peru, place);
// }
// abc();

// array function ->

// let arry = [
//     {
//         name: 'shamil',
//         mark: 87,
//         place: "wayanad"
//     },
//     {
//         name: 'shami',
//         mark: 8799,
//         place: "wayan"
//     },
//     {
//         name: 'sham',
//         mark: 879,
//         place: "waya"
//     },
//     {
//         name: 'sha',
//         mark: 87,
//         place: "waya"
//     },
// ];

// sum = 0;
// forEach->
// arry.forEach((item, index) => {
//     console.log(item.name);
//     sum = sum + item.mark
//     console.log(index);
// });
// console.log(sum);

// find ->

// let finding = arry.filter((item) => {
//    return item.mark < 1000;
// });
// console.log(finding);

// map

// let maping = arry.map((item) => {
//     return {
//         ...item,
//         country: 'india'
//     }
// });
// console.log(maping);

// reduce

// let maping = arry.reduce((total,item) => {
//     total.push(item.name);
//     return total;
// },[]);

// console.log(maping);

// nested destructuring
// otherSide: {
//     otherAnime
// }
// let obj = [
//     {
//         realName: "Muhammed Shamil",
//         anime: "Demon Slayer",
//         charactor:'Eren Yeagure',
//         type: {
//             eren: 'Hero villian'
//         }
//     }
// ];

// let [{
//     realName,
//     charactor,
//     type :{
//         eren
//     }
// }] = obj;

// console.log(eren);


// let obj2 =[ 
//     {
//         animeName: 'kamado Tanjiro',
//         onePiece: 'Monkey De Luffy',
//         otherSide: {
//             otherAnime:'Attack on titan'
//         }
//     }];

// let [{
//     animeName,
//     onePiece,
//     otherSide: {
//         otherAnime
//     }
// }]= obj2;

// const sortingObj = obj2.find(item => {
//     return item.onePiece == 'Monkey De Luffy';
// });
// console.log(sortingObj);

// let arr = [
//     {
//     animeName,
//     onePiece,
//     otherSides: {
//         otherAnimes: 'eren'
//     }

// }
// ];

// let [{
//     otherSides: {
//         otherAnimes
//     }
// }] = arr;

// console.log(otherAnimes);

// ooPs 

function topAge(...arg) {
    let arr = arg.map((item => item.dob));
    console.log(Math.max(...arr));
}

class Student {
    name;
    dob;
    place;
    constructor(name, dob, place) {
        this.name = name;
        this.dob = dob;
        this.place = place;
    }
    getAge() {
        return new Date().getFullYear() - this.dob;
    };
    getName() {
        return this.name;
    };
    getPlace() {
        return this.place;
    }
}

let student1 = new Student('Naruto', 999, 'Leaf Village');
let student2 = new Student('luffy', 995, 'onePiece');

console.log(student1.getName(), +" " + student1.getAge(), student1.getPlace());
console.log(student2.getName(), +" " + student2.getAge(), student2.getPlace());
topAge(student1, student2)

// let student1 = {
//     name: 'Naruto',
//     dob: 1999,
//     getAge: function() {
//         return new Date().getFullYear() - this.dob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };
// console.log(student1.getName(), student1.getAge());

