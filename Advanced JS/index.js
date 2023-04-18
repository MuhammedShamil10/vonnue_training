// let buttonEl = document.getElementById('button-btn').onclick = myFunction;

// function myFunction() {

//    console.log("btn")
// }
// myFunction()


// const a = [1,2,3,4,5,6];

// function my(args) {
//     console.log(args);
// }


// const values = [1,2,3,4,5,6,7,8,9];

// values.forEach(function samFunction(para) {
//     console.log("call me",para);
// }
// );


//     function myFunOne() {
//     console.log("myFunOne");
//     }
//     function myFunTwo() {
//         console.log("myFunTwo");
//         myFunOne()
//         myFunction()
//     }
//     myFunTwo();

// const fn = function (val) {
//     console.log("helo",val);
    // return 19;
// }
// const fn2 = () => [{
//     a: "one",
//     b: "two"
// }];

// let add =fn2();
// console.log(add);

// const obj = {
//     ab: 100,
//     ba: 200,
//     myFn: () => {
//         return this.ab + this.ba;
//     }
// }
// console.log(obj.myFn());


const notherFn = {
    a: 1,
b: 2,
    c: function() {
        console.log(this);
    }
};
let aa = notherFn.c;
notherFn.c()






