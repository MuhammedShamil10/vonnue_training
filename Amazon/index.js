categories = [
    {
        electric: "Electronics",
        mobile: "Laptop",
        TV: "TV & Home Entertainment",
        Auto: "Audio",
        camera: "Camera",
        Computer: "Computer Peripherals",
        technology: "Smart Technology",
        instruments: "Musical Instruments",
        officeAndSta : "Office & Stationery"
}
]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

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

let arry = [
    {
        name: 'shamil',
        mark: 87,
        place: "wayanad"
    },
    {
        name: 'shami',
        mark: 8799,
        place: "wayan"
    },
    {
        name: 'sham',
        mark: 879,
        place: "waya"
    },
    {
        name: 'sha',
        mark: 87,
        place: "waya"
    },
];

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

let maping = arry.map((item) => {

});
