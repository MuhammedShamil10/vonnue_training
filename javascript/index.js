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

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5))

var sum = 0;
function addThree(sum) {
    // sum = sum + 4
    sum += 4;
    return sum;
}
console.log(addThree(10));


var changed = 0;

function change(num) {
    return (num + 5) /  3;
}

// changed = change(10)

console.log(change(1));


function nextInLine(arr, item) {
    arr.push(item)
    // testArr.push(6)
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// console.log("After: " + JSON.stringify(testArr));
