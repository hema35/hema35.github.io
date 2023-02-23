// function fruit(){
//     console.log('name:',name);//undefined
//     console.log('price:',price);//Ref error
//     var name = 'apple';
//     let price = 40;
// }
// fruit();
// -------------***-------------------

// for(var i=0; i<3; i++){ //3,3,3 the loop finishes first
//     setTimeout(()=>{
//          console.log(i)
//     },1)
// }
// -------------***-------------------

// for(var i=0; i<3; i++){ //0,1,2
//     setTimeout(()=>{
//         console.log(i);
//     },1)
// }

// -------------***-------------------

// console.warn(+true);//1
// console.warn(typeof +true); //number the operator changes the type

// -------------***-------------------

// console.log(!'hema'); //false 
// console.log(typeof 'hema'); //string

// -------------***-------------------

// let data = 'color';
// const bird = {
//     size: 'small',
//     color: 'red',
//     swimm: true
// };
// console.log(bird[data]); // red
// console.log(bird['data']); //undefined
// console.log(bird['size']); //small
// console.log(bird.size); //small
// console.log(bird.data) //undefined

// -------------***-------------------

// let c = { name: 'Hema'};
// let d;
// d=c;
// c.name = 'latha';
// console.log(d.name); //latha (reference type so d = c)

// -------------***-------------------

// var x;
// var x = 10;
// console.log(x); //10 because of var keyword
// let x = 20; //x already declared

// -------------***-------------------

// let x;
// // let x = 10; // cannot redeclare block scoped
// x= 10;
// console.log(x);//10

// -------------***-------------------

// let a = 3;
// let b = new Number(3);
// console.log(a == b); true
// console.log(a === b); false (a is number but b is object when created using constructor)

// -------------***-------------------

// let names;
// nmae = {};
// console.log(names);//undefined

// -------------***-------------------

// function fruit(){
//     console.log('woof!');
// }
// fruit.name = 'apple';
// fruit() // woof line 87 will not affect

// -------------***-------------------

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(1,'2')); //12

// -------------***-------------------

// let number = 0;
// console.log(number++); // 0 first the number is printed then incremented
// console.log(++number); // incremented and printed 2
// console.log(number);//2

// -------------***-------------------

// function getAge(...arg){
//     console.log(arg) // [21]
//     console.log(typeof arg) //object
// }

// getAge(21);

// -------------***-------------------

// function getAge(){
//     'use strict'
//     age = 21;
//     console.log(age); //ref error age is not defined
// }
// getAge();

// -------------***-------------------

// const sum = eval('10*1+6');//16
// console.log(sum);

// -------------***-------------------

// const obj = {'d':'a', 2:'b', 3:'c'};
// // console.log(obj.hasOwnProperty(d)); ref error d is not defined
// // console.log(obj.hasOwnProperty('d')); true
// console.log(obj.hasOwnProperty(2)); true
// console.log(obj.hasOwnProperty('2'));true

// -------------***-------------------

// const obj = {a:'one', b: 'two', a:'repeat'};
// console.log(obj); // {a: 'repeat', b:'two'}

// -------------***-------------------
   for(let i=0; i<5; i++){
    if(i === 3) continue;
        console.log(i);
    
   }


// -------------***-------------------
// -------------***-------------------
// -------------***-------------------