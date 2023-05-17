 // console.log("helo")
// in-line comment
/* multi-line comment */

/* 
Data types:
            undefined, null, boolean, string, symbol, number, and object 
*/

// var myName = "Shamil"
// myName = 8

// var foo = "f oo"
// let koo = "koo"
// console.log(foo)
// console.log(koo)

// var a;
// console.log(a) //undefined

// a = 10;

// var b = 10;

// sum = a + b;
// console.log(sum)


// increment....
// var myVar = 87;

// myVar += 1

// myVar = myVar + 1;
// or
// myVar++;

// var myName = "this is the first.";
// myName += "this is thr second";
// ........
// console.log(myName);
// ........
// var myname = "muhammed shamil ml";
// bracket notaion
// nameLength = myname[myname.length - 1];
// fitstLetterOfName = myname[2]
// console.log(nameLength)


// words blanks....

// function wordBlanks(myNoune, myAdjective, myAdverb){
//     var resutl = "";
//     resutl += myNoune+ " " + myAdjective  + "is" + myAdverb + "muhammed shamil";
//     return resutl;

// }

// console.log(wordBlanks("helo","name"," my"));

// modified array data

// var ourArray = [23,47,53];
// ourArray[1] = 76;
// console.log(ourArray)


// nested array....

// var myArray = [[1,2,4], [2,3,5], [3,3,6]];

// var mydata = myArray[2][2];
// console.log(mydata)


// push pop shift unshift new Array.......

// myArray.push(["new",45])
// console.log(myArray)


// var myArray = [[1,2,4], [2,3,5], [3,3,6]];

// console.log(myArray.unshift(10,20))
// console.log(myArray)


// When you declare a variable outside of any function, 
// it is called a global variable, because it is available to any
// other code in the current document.
// When you declare a variable within a function, 
// it is called a local variable, 
// because it is available only within that function.


// function reusableFunction() {
//     console.log("hey there....");
// }
// reusableFunction();

// function withParameterPass(a, b) {
//     console.log(a + b)
// }

// withParameterPass(10, 20);

// globalScope.....


//  function fun1(){
//     oopsGlobal = 5;
//  }
//  var myglobal = 10;
// function fun2(){
//     var output = "";
//     if(typeof myglobal != "undefined"){
//         output += "myGlobal: " + myglobal +" \n";
//     }
//         if(typeof oopsGlobal != "undefined"){
//         output += "oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// fun1();
// fun2();


// global variable
// var todayDress = "blue-jean"


// function myDress(){
    // local variable
//     var todayDress = "white-shirt"
//    return todayDress
// }
// console.log(myDress());

// function minusSeven(num) {
//     return num - 7;
// }
// console.log(minusSeven(10));

// function timesFive(num) {
//     return num * 5;
// }

// console.log(timesFive(5))

// var sum = 0;
// function addThree(sum) {
//     // sum = sum + 4
//     sum += 4;
//     return sum;
// }
// console.log(addThree(10));


// var changed = 0;

// function change(num) {
//     return (num + 5) /  3;
// }

// // changed = change(10)

// console.log(change(1));


// function nextInLine(arr, item) {
//     arr.push(item)
//     // testArr.push(6)
//     return arr.shift();
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: "+ JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// console.log("After: " + JSON.stringify(testArr));

// equa and strict equal 

// function campareEquality(a, b) {
//     if (a === b) {
//         return "Equal";
//     }
//     return "notEqual"
// }
// console.log(campareEquality(10, 10));



// function testStricNotEqual(val){
//     if (val !== 17) {
//         return "not eaqual"
//     }
//     return "equal"
// }
// console.log(testStricNotEqual(17))

// condition operator

// function testLessOrEqual(val) {
//     if (val <= 12) {
//         return "Smaller than or equal 12";
//     }
//     if (val <= 25) {
//         return "Smaller than or equal 24";
//     }
//     return "More than 24";
// }
// console.log(testLessOrEqual(13));

// function testingZing(num) {
//     if (num < 5) {
//         return "Tiny";
//     } else if (num < 10) {
//         return "Small";
//     }
//     else if (num < 15) {
//         return "medium";
//     } else if (num < 20) {
//         return "sage mode";
//     } else {
//         return "baryon mode"
//     }
// }
// console.log(testingZing(19));

// var names = ["hole-in-one", "Eagle", "Bridie", "Par", "Bogey"]

// function golfScore(par, strokes) {
//         if (strokes == 1){
//             return names[0];
//         }else if (strokes <= par - 2) {
//         return names[1];
//         }else if (strokes == par - 1){
//             return names[2];
//         }else if (strokes == par) {
//             return names[3];
//         }else if (strokes == par + 1) {
//             return names[4];
//         }else {
//             return "Change me"
//         }
//     }
//     console.log(golfScore(1, 1));

// switch statement

// function caseInSwitch(val) {
//     var answer = val ;
//     switch(val) {
//         case 1:
//             answer = "Naruto";
//             break;
//             case 2:
//                 answer = "monkey D luffy";
//                 break;
//                 case 3:
//                     answer = "Renguka kyojuro";
//                     break;
//                     case 4:
//                         answer = "eren yeager";
//                         break;
//                         case 5:
//                             answer = "light yagami";
//                             break;
//                                 default:
//                                     answer = "out of anime"
//                                     break;
//     }
//     return answer;
// }
// console.log(caseInSwitch(8));

// function sequetionSwitch(shinobi) {
//     answer = "";
//     switch(shinobi) {
//         case 1:
//         case 2:
//         case 3:    
//         answer = "Nauro , Suske, Rock Lee, Hinata, temari";
//         break;    
//             case 4:
//             case 5:
//             case 6:    
//             answer = "luffy , ZORO, Oosoup";
//             break;
//         }
//         return answer;
// }
// console.log(sequetionSwitch(2))

// returning boolen values from function.....

// function isLess(a, b) {
//     return a > b;
// }
// console.log(isLess(10, "2"));

// function abTest(a, b) {
//     if (a < 0 || b < 0) {
//         return undefined;
//     }
// }

// console.log(abTest(2, 2));

// counting cards...

// var count = 0;
// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//             case 2:
//                 case "10":
//                 case "J":
//                 case "K":
//                 case "A":
//                     count--;
//                     break;
//     }
//     var holdbet = "Hold"
//     if (count > 0) {
//         holdbet = 'Bet'
//     }
//     return count + " " + holdbet;
// }

// cc("A");
// console.log(cc("K"))


// object.......

// var animeName = {
//     "name": "Naruto",
//     "epidose": 700,
//     "home": "Leaf Village",
//     "friends": "shikamaru",
//      9:"rengako"
// };

// var namePlease = animeName.name;
// var firendsName = animeName.friends;
// var nameSha = 9;

// console.log(nameSha);

// var namePlease = animeName["name"]

// console.log(namePlease);
// console.log(firendsName);

// animeName.name = "Monkey D Luffy";
// animeName['charactors'] = "Uciha Sasuke"

// delete animeName.friends

// console.log(namePlease);
// console.log(animeName);

// function phoneticLookup(val) {
//     var result = "";

//     var lookup = {
//         "Naruto": "Sasuke",
//         "jujutsu kaisen": "Gojo",
//         "AOT": "Levi",
//         "Demon slayer": "Rengako Kyojuro"
//     };

//     result = lookup[val];
//     return result;
// }
// console.log(phoneticLookup("Demon slayer"));

// var myObj = {
//     gift: "Tanjiro",
//     breathing: "Flame Hashira",
//     form: "9th form"
// };
// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     }else {
//         return "Not found";
//     }  
// }
// console.log(checkObj("form"));

// var myAnime = {
//     "gift": "kyojuro",
//     "breathing": "Flame Hashira",
//     "form": "9th form",
//     "releaseDate": [
//         2018,
//         "next: march-2023"
//     ],
//     "season": true
// }

// var mySorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passanger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
// var gloveBoxContents = mySorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// var student = {
//     name : "tanjiro",
//     rollNo: 33,
//     totalMark: "45"
// };
//     function stuInfo() {
//         console.log(student.name);
//         console.log(student.rollNo);
//         console.log(student.totalMark);
//     }
//     function examCheck(mark) {
//         if (student.totalMark < 40) {
//             console.log("You failed");
//         }else {
//             console.log("You passed");
//         }
//     }
// stuInfo();
// examCheck();

// while loop
// var myArr = [];
// var i = 0;
// while (i < 10) {
//     myArr.push(i);
//     i++;
// }
// console.log(myArr);

// var myArr = [];

// for(i = 1; i <= 10; i++) {
//     myArr.push(i);
// }

// console.log(myArr);
// var myArr = [];
// for (i = 1; i < 10; i += 2) {
//     myArr.push(i);
// }
// console.log(myArr);

// var myArr = [];
// for (i = 10; i > 0; i -= 1) {
//     myArr.push(i);
// }
// console.log(myArr);

// var myArr = [2, 4, 5, 6, 8, 5];
// var total = 0;
// for (var i = 0; i < myArr.length; i++){
//     total += myArr[i];
// }
// console.log(total);

// function multiplyAll(arr) {
//     var product = 1;

//     for (var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }return product;
// }
// product = multiplyAll([[1,2],[2,3],[3,4],[4,5,6]]);

// console.log(product)


// do while loops

// var myArr = [];
// var i = 10;
//  do{
//     myArr.push(i);
//     i++;
// }while (i < 5)
// console.log(myArr);

//  var contacts = {
//     gift: "Tanjiro",
//      breathing: "Flame Hashira",
//      form: "9th form"
//  };

// function lookupProfile (name, prop) {
//     for (var i = 0; i < contacts.length; i++) {
//         if(contacts[i].gift === name){
//             return contacts[i][prop] || "No auch property";
//         }
//     }
//     return "nothing";
// }

// var data = lookupProfile("gift", "tanjiro");
// console.log(data);

// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// function randomFraction() {
//     return Math.floor(Math.random() * 2);
// }
// console.log(randomFraction());

// function checkEqual(a, b) {
//     b = 2;
//     return a === b ? true : false;

//     return a === b;
// }
// console.log(checkEqual(1, 1));

// function checkScope() {
//     "use strict";
//     let i = "function scope";
//     if (true) {
//        let i = "block scope";
//         console.log("block scope i is:", i);
//     }
//     console.log("Function scope i is", i);
//     return i;
// }
// checkScope();

// function checking(str) {
//     let sentance = str + "is amazing";
//     return sentance
// }
// console.log(checking("Anime"));

// const myArr = [5, 6, 7];

// function editingmyArr() {
//     //  myArr = [7, 6, 5];
//     myArr[0] = 7;
//     myArr[1] = 6;
//     myArr[2] = 5;
// }
// editingmyArr();
// console.log(myArr);

// function without name.....
// let magic = () => {
//     return "anime";
// }
// console.log(magic());

// let arrowFn = (arr1, arr2) => arr1.concat(arr2);

// console.log(arrowFn([1, 2], [3, 4, 6]));

// const test = {
//     prop:43,
//     func: function() {
//         return test.prop;
//     },
// };
// console.log(test.func());

// const finding = {
//     x: 33,
//     getx: function () {
//         return finding.x;
//     }
// };
// const xElement = finding.getx;
// console.log(xElement());

// const finalXget = xElement.bind(finding);
// console.log(finalXget());

// const increment = (function() {
//     return function increment(number, value = 1) {
//         return number + value;
//     }
// })
// ();
// console.log(increment(2,4));

// const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();
// console.log(sum(1, 2, 3, 4, 5))

// function sum(x,y,z) {
//     return x+y+z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// console.log(sum.apply(null, numbers));

// const arr1 = ["demon slayer","Naruto","one piece","attack on titan","death note"]
// let arr2;
// (function names() {
//     arr2 = [...arr1];
//     arr1[4] = "jujutsu kaisen";
    
// })();
// console.log(arr2);

// var voxel = { x: a, y: b, z: c } = voxel;

// const AVG_TEMPERATURE = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperature) {
//     const {tomorrow : tempOfTmr} = avgTemperature;
//     return tempOfTmr;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURE));

// const localForecast = {
//     today: { min: 23.6, max: 43.3 },
//     tomorrow: { min: 34, max: 56 }
// };
// function getMaxTmrw(forecast) {
//     const { tomorrow: { min: maxOftmrw } } = forecast;
//     return maxOftmrw;
// }
// console.log(getMaxTmrw(localForecast));

// const [a,b,,,,c] = [1,2,4,5,6,7,8,9,0];
// console.log(a,b,c);

// const s = [1,2,4,5,6,7,9,0];
// const [x,y,z] = s;
// console.log(z);

// let a = 10, b = 23;

// (() => {
//     [a,b] = [b,a];
// })();
// console.log(a);
// console.log(b);

// let source = [1,2,3,4,5,6,7];
// function remevoveNumber(list) {
//     const [, , , ,...arr] = list;
//     return arr;
// }
// const arr  = remevoveNumber(source);
// console.log(arr);
// console.log(source);

// const [a,b, ...everthingElse] = [1,2,4,5,6,7,8,9,0,3];
// console.log(a);
// console.log(b);
// console.log(everthingElse);

// const { streat, ...address} = {
//     streat: "bathery",
//     postcode:"******",
//     city:"kochi"
// };

// console.log(streat);
// console.log(address);

// const stats = {
// max:20,
// min:10,
// };
// const half = (function () {

//     return function half({max, min}) {
//         return avg = (max + min) / 2.0;
//     };
// })();
// console.log(half(stats));

// const creatList = (name, age, gender) => {
//     const creatList = (name, age, gender) => ({name, age, gender})or
//     const list = {
//         name: name,
//         age: age,
//         gender: gender
//     };
//     return list;
// }
// console.log(creatList("Shamil", 23, "male" ));

// const bicycle = {
//     gear: 4,
//     setGear(newGear) {
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);

// import * as lol from "lol_strings";


// var n = 2;
// let ans;
// function square() {
//     ans = n * n;
//     return ans;
// }
// console.log(square(ans));
// var square4 = square(4);
// console.log(square)


// var x = 101;

// a();
// b();

// console.log(x)
// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 200;
//     console.log(x)
// }
// var x = 100;
// let x;
// function b() {
//      x = 300;
//      return x
// }
// console.log(b());

// var a;
// console.log(a)
// var b;
// function a() {
//     console.log(b)
//     c();
//     function c() {
//          b = 10;
        
//     }
// }
// console.log(b)
// a();

// console.log(b);
// let ah = 10;
// var bh = 30;

// function a() {
//     b();
//     function b() {
//         let b = 10;
//         return b;
//     } 
// }
// let a = 1;
// console.log(b)
// var b = 13;
//   let 
var a = 49;
{
    var a = 10;
    let b = 40;
    const c = 12;  

    // console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

let

  