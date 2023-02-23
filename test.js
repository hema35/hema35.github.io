// // console.log('testing');
// // x = '1235';
// // arr = Array.from(x);
// // console.log(arr.length);
// // var X = { Foo : 1}; 
// // var Output = (function() 
// // { 
// // delete X.Foo; 
// // return X.Foo; 
// // } 
// // )(); 
// // console.log(Output);
// // var Employee =
// // {
// // company: 'xyz'
// // }
// // var Emp1 = Object.create(Employee);
// // delete Emp1.company;
// // console.log(Emp1.company);
// // var car = new Vehicle("Honda", "white", "2010", "UK");
// // console.log(car);
// // console.log(abc);
// // var car = new Vehicle("Honda", "white", "2010", "UK");
// // console.log(car);
// // function Vehicle(model, color, year, country) {
// //     this.model = model;
// //     this.color = color;
// //     this.year = year;
// //     this.country = country;
// //   }
// //   var abc;
// //   abc = 5;
// //   console.log(abc);
// //   abc = 10;
// //   console.log(abc);
// // //   console.log(xyz);

// // user = [{
// //   name: 'a',
// //   age: 12,
// // },
// // {
// //   name: 'b',
// //   age: 19,
// // },
// // {
// //   name: 'c',
// //   age: 20,
// // },
// // {
// //   name: 'd',
// //   age: 22,
// // },
// // {
// //   name: 'e',
// //   age: 23,
// // },
// // ]
// // const greaterAge = user.filter(res => res.age>18);
// // console.log('greaterAge', greaterAge);
// // const {age}= greaterAge;
// // console.log(age)
// // const arr = [
// //   {id: 1, salary:10},
// //   {id: 2, salary: 20},
// //   {id: 3, salary: 30},
// // ];
// // const sum = arr.reduce((accumulator, object) => {
// //   console.log('acc:', accumulator);
// //   // if(!object.salary) return accumulator;
// //   return accumulator + (object.salary ? object.salary : 0);
 
// // }, 0);
// // console.log('sum:', sum);

// // count duplicate
// // const arr1 = [];
// // const arr = ['a','b','c','a','d','e','a','f','a'];
// // let dup = arr.reduce((accumulator, current) => {
// //   accumulator[current] = (accumulator[current] || 0) +1;
// //   return accumulator;

// // },{});
// // console.log(dup)

// /* remove duplicate */
// const rem1 = [];
// const rem = [{id:1, name: 'one'},
// {id:2, name: 'two'},
// {id:1, name: 'one'},];
// rem.reduce((acc,cur) => {
//   if(acc.indexOf(cur.id) === -1) {
//    acc.push(cur.id);
//   rem1.push(cur);
//   }
//   return acc
// },[]);
// console.log('rem1', rem1)
// // const ids = rem.map(o => o.id);
// // console.log('id',ids)
// // const filtered = rem.filter(({id}, index) => !ids.includes(id, index+1))

// // console.log(filtered)

// // const rem = [1,1,2,3,4,3]


// // const filtered = [...new Set(rem)];


// //  console.log(filtered)

// let rnumber = 5;
// rnumber += 5;
// console.log(rnumber);

// let arr = ["1", "Test User", "25", "Developer"];
// let arr1 = [
//   ["id", "1"],
//   ["name", "Test User"],
//   ["age", "25"],
//   ["profession", "Developer"],
// ];
// console.log({ ...arr });

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NULL);
// console.log(typeof typeof 1);

// function func1() {
//   return {
//     name: "Full Stack Tutorials",
//   };
// }
// console.log(func1());

// function func2() {
//   return  {
//     name: "Full Stack Tutorials",
//   }
// }
// console.log(func2());

// var a=4;
// var b=a--;
// var c=--a;
// console.log(a,b,c)

// const number = undefined + 11;
// console.log('num:',number)
// if (number === NaN) {
//   document.write("NaN");
// } else if (number === 11) {
//   document.write("11");
// }

// var arrsum = [1, 2, 5, 10, 20];
// var sum = arrsum.reduce((a, i) => {
//   return a + i;
// });
// console.log(sum);
// var arrsum1 = [1, 2, 5, 10, 20];
// var sum = 0;
// for (let i in arrsum1) {
//   sum += arrsum1[i];
// }
// console.log(sum);

// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));


// // constructor(){
// //   nums = [2, 7, 11, 8, 11, 8, 3, 11];

// // class Solution {

 
// //   maxValNumOfOccurrences(nums) {
// //    let maxVal = nums[0],
// //    count = 0;
// //    for(let val of nums){
// //        if(val > maxVal){
// //            maxVal= val;
// //            count = 1;
// //        } else if(val == maxVal){
// //            count++;
// //        }
// //        }
// //        console.log(maxVal, count)
// //        return [maxVal, count];
// //   }
// // }}

// // const al = function (obj, val) {
// //   obj.val = {
// //     a: 1,
// //     b: 2,
// //   };
// //   console.log(obj)
// //   return obj;
// // };

// // const b = function (obj, val) {
// //   return (obj.val = {
// //     a: 1,
// //     b: 2,
// //   });
// // };

// // a({}, 'val');
// // b({}, 'val');

// // var x = 1;
// // var foo = {
// //   x: 2,
// //   bar: function () {
// //     x = 3;
// //     return this.x;
// //   },
// // };
// // var run = foo.bar;

// // alert(run());

// 10 .toString();
// (10).toString();
// 10..toString();

// let wordBreak = function(s, wordDict){
//   const table = new Array(s.length+1).fill(0);
//   console.log(table);
//   table[0]= true;
//   for(let i=0; i<table.length; i++){
//     if(table[i]===false)continue;
//     for(let j=i+1; j<table.length; j++){
//            if(wordDict.includes(s.slice(i,j))){
//             table[j]=true;
//            }
//     }
//   }
//   return table[table.length - 1];
// }
// const s = 'leetcode';
// const wordDict = ['leet','code']
// console.log(wordBreak);


// function add(x, y){
//   const c = x+y;
//   return c; 
// }
// console.log(add(1,2));
// // function add(x,y,z){
// //   const a=x+y+z;
// //   return a;
// // }
// // console.log(add(1,2,3));
const duplicateArray = [14,5,6,14,3,6,7,9];
const duplicates = duplicateArray.filter((ele,ind,arr) => arr.indexOf(ele) !== ind);

console.log('ele:',duplicates);