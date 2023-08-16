// const name = " My Array Library";

// const option = {
//     version: '1.1',
//     author: "Code Malayalam"
// }

// function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0)
// }
// export default function findMax(arr = []) {
//     log('findMax');
//     return Math.max(...arr);
// }

// function log(val) {
//     console.log('INSIDE', val);
// }

// export {
//     name,
//     option,
//     addAll,
//     findMax as first
// }

export function createButton(name, func) {
    let btnEl = document.createElement('button');
    btnEl.innerHTML = name;
    btnEl.onclick = func;
    btnEl.style.margin = '5px';
    document.body.appendChild(btnEl);
}


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

// class Student {
//     name;
//     dob;
//     place;
//     constructor(name, dob, place) {
//         this.name = name;
//         this.dob = dob;
//         this.place = place;
//     }
//     getAge() {
//         return new Date().getFullYear() - this.dob;
//     };
//     getName() {
//         return this.name;
//     };
//     getPlace() {
//         return this.place;
//     }
// }
// Student.topAge = function(...arg) {
//     let arr = arg.map((item => item.dob));
//     console.log(Math.max(...arr));
// }



// let student1 = new Student('Naruto', 999, 'Leaf Village');
// let student2 = new Student('luffy', 995, 'onePiece');



// console.log(student1.getName(), +" " + student1.getAge(), student1.getPlace());
// console.log(student2.getName(), +" " + student2.getAge(), student2.getPlace());
// topAge(student1, student2)
// Student.topAge(student1, student2);

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




// class ButtonEffect {
//     constructor(name){
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button);
//     }
//     set width(width) {
//         this.button.style.width = width
//     }
//     set background(bgColor) {
//         this.button.style.background = bgColor;
      
//     }
//     set color(color) {
//         this.button.style.color = color
//     }

//     get width() {
//         return parseInt(this.button.style.width);
//     }
//     get background() {
//         return this.button.style.background;
      
//     }
//     get color() {
//         return this.button.style.color;
//     }

            
// }

// let btnClick = new ButtonEffect('Click this');
// // btnClick.setWidth(100 + 'px');
// // btnClick.setBackground('black');
// // btnClick.setColor('white');
// btnClick.width = 100 + 'px';
// btnClick.height = 100 + 'px';
// btnClick.background = 'black';
// btnClick.color = '#fff';
// console.log(btnClick.width, btnClick.height, btnClick.color,btnClick.background);

// let b1 = {
//     init(name){
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;
//         document.body.appendChild(this.button);
//     },
//     set width(width) {
//         this.button.style.width = width
//     },
//     set background(bgColor) {
//         this.button.style.background = bgColor;
      
//     },
//     set color(color) {
//         this.button.style.color = color
//     },

//     get width() {
//         return parseInt(this.button.style.width);
//     },
//     get background() {
//         return this.button.style.background;
      
//     },
//     get color() {
//         return this.button.style.color;
//     }
// }
// b1.init('click me');
// b1.width = 100 + 'px';

// let person = { 
//     firstName: 'uchiha',
//     lastName: 'sasuske',
//     fullName: function() {
//         return this.firstName+ " " + this.lastName;
//     }
// }

// console.log(person.fullName());

// let memeber = {
//     firstName: 'muhammed',
//     lastName: 'shamil ML'
// }
// let myName = person.fullName.bind(memeber);

// class NewButton {
//     constructor(btnName) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = btnName;

//         document.body.appendChild(this.button);

//     }
//     onClick(fn) {
//         this.button.onclick = fn;
//     }
// }

// let ab = new NewButton('click this');
// ab.onClick(function() {
//     console.log("its clicked");
// });

// class GreenButton extends NewButton {

//     onClick(fn) {
//         this.button.onclick = function() {
//             this.button.style.background = 'green';
//             fn();
//         }.bind(this)
//     }
// }

// let greenBtn = new GreenButton('green');
// greenBtn.onClick(function() {
//     console.log("clicked");
// })


// class Car {
//    constructor(carBrand) {
//        this.carName = carBrand;
//    }
// }

// let showBrand = new Car('nissan');
// document.getElementById('btn-el').innerHTML = showBrand.carName;

// // asychronous callback

// const cart = ["shoe", "pants"];

// Promise.then(function (orderId) {
    
// })
// console.log(user);     

// let button = document.getElementById('btn-el');
// button.onclick = () => {
//     console.log('started clicked event');
//     $.ajax({
//         url:'https://jsonplaceholder.typicode.com/todos/1',
//         success: (data) => {
//             console.log(data);
//         },
//         async: false,
//     });
//     console.log("ended click event");
// }
// $.ajax({
//     type: 'GET',
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: (msg) => {
//         console.log(msg);
//     },
//     error: (xhr, statusText) => {
//         console.log(statusText);
//     },
// });
// console.log('ended');

// console.log('started');

// const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1');

// console.log(pr);


// let a;


// try {
//     getVal1();
// }catch(e) {
//     a = 10;
// }

// let b = getVal2();

// let result = getTotal(a, b);
// console.log(result);

// function getVal1() {
//     getTotal(l);
//     return 10;
// }
// function getVal2() {
//     return 10;
// }

// function getTotal(a, b) {
//     return a + b;
// }
 
// let button = document.getElementById('btn-el');
// button.style.background = 'red';
// button.addEventListener("click", () => {
//     console.log(button.innerHTML);
//     button.style.background = 'brown'
// });
// console.log("script one");


// export function addArray(arr) {
//  return arr.reduce((total, item) => total + item, 0); 
// }

// const value = addArray([3,4,5]);
// console.log(value);

// april 25
// const productName = "sha";
// let price = 2;

// const value = `the ${productName} is ${price} Rs`;
// let msg = `The product is ${price > 10 ?  'costly':'Cheap'}`
// console.log(value);
// console.log(msg);

// function average(a, b) {
//     console.log(a, b);
//     let avg = (a + b) / 2;
//     return avg;
// }

// const avg = average(5, 3);
// console.log(avg);

// function test(...totaal) {
//     console.log(totaal);
// }
// test(1,2,3,4,5,4,3,2,1);

// function test({name, age}) {
//     console.log(name, age);
// }

// const obj = {
//     name: "Moneky D Lufyy",
//     age: 1
// }
// test(obj);

// let foo = {
//     name: "blaabablalblab",
//     age: 1,
//     code: "hohooooo"
// }

// let jsonConvert = JSON.stringify(foo);
// console.log(foo);
// let jsonE =  JSON.parse(jsonConvert);
// console.log(jsonE)




// jsSample code and code;

// let strA = "shamil";
// let strB = "sha";

// let findResult = (str, substr)=> {
//     let i = 0;
//     // let startIndex = 0;
//     let count = 0;

//     while(i < str.length) {
//         if(substr[count] === str[i]){
//             if(count === substr.length -1) {

//                 return i+1;
//             }
//             count ++;
//         }else {
//             count = 0;
//             // startIndex ++;
//         }
//         i++;
//     }
//     return substr[i];
// }
// console.log(findResult ("shamil", "sha"));




// function findngString(str1, index, c) {
//     for(let i = index; i < str1.length; i++) {
//         if(charAt[i] == c) {
//             break;
//         }
//     }
//     return i;
// }
// console.log("shamil",2,c)
// findngString("shamil",3,"ha")

function stringResults(str1, str2) {
    let a = str1.length;
    let b = str2.length;

    for(let i = 0; i < b; i++) {

        for(j = 0; j < a; j++) {
            if(str2[i + j]!=str1[j]){
                break;
            }else{
                return i;
            }
        }
    }
    return -1 
}

let str1 = "mil";
let str2 = "shamil";
let ab = stringResults(str1, str2);
console.log(ab);

function stringMatching(str, index,) {

}

// function resultString(str1, str2) {
//     if(str1.length > str2.length){
//         for(let i = 0; i<str2.length; i++) {
//             if(str1.charAt[i] == str2.charAt[0]){
//                 return str1.indexOf(str2);
//                 // for(let j = 0; str2.length; i++)
        
//             }else{

//                 return -1;
//             }  
//         }
//     }
// }
// console.log(resultString("shamil", "mil"));

// let findIndex = (str1, str2)=> {
//     if(str2.length > str1.length) {
//         return str1.length;
//     }


// }

// let a1 = "shamil";
// let b1 = "sha";

// const findIndex = (a, b) => {
//     if (b.length > a.length)
//         return a.length;
        
//     a = Array.from(a);
//     b = Array.from(b);
    
//     const result = a.reduce((acc, cur, ind) => {
//         if (cur != b[ind] && (typeof acc.ind == 'undefined')) {
//             acc.ind = ind;
//         }
//         return acc;
//     }, {});

//     return result.ind;
// }

// console.log(findIndex(a1, b1));
     

// const findIndex = (a, b) => {
//     for (let i = 0, l = Math.max(a.length, b.length); l > i ;i++) {
//         if (a[i] != b[i])
//             return i;
//      }
//      return -1;
// }
// let ab = findIndex("shamil","iamshamil");
// console.log(ab);
// submit = {
//     name: 'Nezuko cha-an',
//     age: '15',
//     brother: 'Kamado Tanjiro',
//     friends: ['shamil', 'inosuke', 'yorochi', 'kokoshibo']
// };
// console.log(submit);

// let sumnbitJson = JSON.stringify(submit);

// console.log(sumnbitJson);

// let sumnbitJSON = JSON.parse(sumnbitJson);
// console.log(sumnbitJSON);

// let regExe = /cats?/im;

// // let regExe = new regExe('cat', 'i');
// let str = "the Cat name is Chingiru";

// let str1 = "cats the boy name is Chingiru cat";

// let str2 = "the girl name is Chingiru";

// let result1 = regExe.test(str);
// console.log(result1);
// let result2 = regExe.test(str1);
// console.log(result2);
// let result3 = regExe.test(str2);
// console.log(result3);
// let result =  regExe.test('my Cat');
// console.log(result);

// let regex = /.*/i;
// let string = 'hell0'
// // regular expression
// let total = regex.test(string);
// console.log(total)

// function textOnChange(arg) {
//     console.log(arg);
//     let label = document.getElementById('input-el');
//     let errorMsg = textValidation(arg.value);
//     console.log(arg);
//     if (errorMsg) {
//         label.innerHTML = errorMsg;
//     } else {
//         label.innerHTML = '';
//     }
// }

// function textValidation(value) {
//     let regEx = /^[a-za-z0-9_]*$/i;
//     let result = regEx.test(value);
//     if (result) {
//         return '';
//     } else {
//         return 'Invaid String'
//     }
// }

// const val1 = 5;
// const val2 = 5;
// console.log(("ineteger", val1 === val2));

// const val3 = "Code Malayalam";
// const val4 = "Code Malayalam";
// console.log("String", val3 === val4);

// const val5 = ["Code", "Malayalam"];
// const val6 = ["Code","Malayalam"];
// console.log("Array", val5 === val6);

// const val7 = {name: "Code Malayalam"};
// const val8 = {name: "Code Malayalam"};
// console.log("Object", val7 === val8);

// var a = 10;
// var b = a;

// b = b + 1;

// console.log('a=', a);
// console.log('b=', b);

