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

function isLess(a, b) {
    return a > b;
}
console.log(isLess(10, "2"));

