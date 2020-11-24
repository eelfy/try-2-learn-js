// "use strict";

// let num = 3;
// alert(num);

// let a = 10,
//     b = 2;
// alert(a+b);

// let c = 15, d = 2;
// let result = c + d;
// alert(result);


// let a = prompt("Введите число");
// let b =prompt("Введите строку" );

// function Comparison(a,b){
//   if(a == b){
//     alert(true);

//   } else{
//     alert(false);

//   }
// }

// Comparison(a,b);

// let str1='Привет, ', str2='Мир!';
// let a = str1 + str2;
// alert(a);

// let a = prompt("Как вас зовут?");
// alert(`Ваше имя ${a}`);

// let str = "abcde";
// alert(str[0]);
// alert(str[2]);
// alert(str[str.length - 1]);

// var num = 47;
// num +=  7;
// num *= num - 18;
// num -= num * 10;
// num /= num / 15;
// alert(num);

// let arr = ['a', 'b', 'c'];
// alert(arr);
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// let arr = ['a', 'b', 'c', 'd'];
// alert(`${arr[0]} + ${arr[1]} , ${arr[2]} + ${arr[3]}`);

// let obj = {a: 1, b: 2, c: 3};
// alert(obj.a);

// let obj = {Коля: '1000', Вася: '500', Петя: '200'};
// alert(obj.Коля);

// let arr = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// alert(arr.js[0]);

// let a = prompt("Введите число");
// if(a != 0){
//     alert("верно");
// } else{
//     alert('Неверно');
// }

// let test = '1';
// switch(test) {
//     case '1':
//         alert("1");
//     break;

//     case '2':
//         alert("весна");
//     break;
//     case '3':
//         alert("весна");
//     break;

//     case '4':
//         alert("весна");
//     break;

// }

// let a = "1bcde";

// if(a[0] == "a"){
//     alert("da");
// } else {
//     alert("ni");
// }

// let a = "2345";
// if(a[0] == "1" || a[0] == "2" || a[0] == "3"  ){
//     alert("da");
//     } else {
//         alert("ni");
//     }

// let a = "2345";

// let b = a[0];
// let c = a[1];
// let d = b + c;
// alert(d);

// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     document.write(arr[i] + '<br>');
// }

// var result = 1;
// var arr = [2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
// 	result = result * arr[i];
// }
// alert(result);

// for(let i = 1; i <= 100; i++){
//     document.write(i + "<br>");
// }

// for(let i = 11; i <= 33; i++){
//     document.write(i+ "<br>");
// }

// for(let i =2; i <= 100; i+=2){
//     document.write(i+"<br>");
// }

// let rez = 1;
// for(let i = 1; i <= 100; i++){
//     rez = rez + i;
// }
// alert(rez);

// let arr = [2, 5 , 9 , 15 ,0 ,4];
// for(let i = 0; i < arr.length; i++){
//     if( arr[i] > 3 && arr[i] < 10){
//         document.write(arr[i] + "<br>");
//     }
// }

// let sum = 0;
// let arr = [-2, 5 , -9 , 15 ,0 ,-4, 7, 20];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         sum = sum + arr[i];

//     }
// }
// document.write(sum);


// let arr = [2, 5 , 9 , 15 ,0 ,4];
//  for(let i = 0; i < arr.length; i++){
//      if( arr[i] == 2){
//         alert("Есть");
//      }
//  }

// let arr = ['10', '20', '30', '50', '235', '3000'];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i][0]==1 || arr[i][0] == 2 || arr[i][0] == 5){
//         document.write(arr[i]);
//     }
// }


// let arr = ['10', '20', '30', '50', '235', '3000'];
// for(let i = 0; i < arr.length; i++){
//     document.write(arr[i] + "-" );
// }

// let arr = ["Понедельник","Вторник","Среда", 
//             "Четверг","Пятница","Суббота","Воскресенье"];
// for(let i = 0; i < 5; i++){
//     document.write(`<br>${arr[i]} </br> `);
// }
// document.write(` <br> <b> ${arr[5]}</b></br>`);
// document.write(` <br> <b> ${arr[6]}</b></br>`);


// for (let n = 1000, num = 0; n > 50; num++) {
//     n /= 2;
// }
// alert("result of computed variable n: " + n);
// alert("number of itaration: " + num);

// let str = "js";
// alert(str.toUpperCase());

// let str = "JS";
// alert(str.toLowerCase());

// let str = 'я учу javascript!';
// alert(str.length);

// let str = 'я учу javascript!';
// alert(str.substr(2,4));
// alert(str.substr(5,str.length));
// alert(str.substring(2,5));
// alert(str.substring(6,str.length));

// let str = 'я учу javascript!';
// alert(str.indexOf("учу"));

// let n = 4;
// let str = 'я учу javascript!';
// if (str.length > n) {
//     let res = str.slice(0, n);
//     alert(res);
// }

// let str = 'Я-учу-javascript!';
// alert(str.replace(/-/g, "!"));

// let str = '2025-12-31';
// let arr = str.split("-");
// alert(`${arr[2]} . ${arr[1]} . ${arr[0]}`);

// let arr = ['я', 'учу', 'javascript', '!'];
// alert(arr.join("+"));

// let str = 'я учу javascript!';
// let a = str.slice(1,str.length);
// let b = `Я ${a}`;
// alert(b);

// var str = 'this is string';
// alert(str.substr(0,1).toUpperCase() + str.substr(1));

// let str = 'var_test_text' ;
// alert(str.replace(/_/g, ""));

// let a = [1,2,3];
// let b = [4,5,6];
// let c = a.concat(b);
// alert(c);

// let a = [1,2,3];
// let b = a.reverse();
// alert(b);

// let a = [1,2,3];
// a.push(4,5,6);
// alert(a);

// let a = [1,2,3];
// a.unshift(4,5,6);
// alert(a);

// let a = ['js', 'css', 'jq'];
// let b = a.shift('');
// alert(b);

// let a = ['js', 'css', 'jq'];
// let b = a.pop('');
// alert(b);

// let a = [1,2,3,4,5];
// let b = a.slice(0, 3);
// alert(b);

// let a = [1,2,3,4,5];
//  let b = a.slice(3, a.length);
// alert(b);

// let a = [1,2,3,4,5,];
// a.splice(1,4,4,5);
// alert(a);

// let a = [1,2,3,4,5];
// let b = a.splice(1,3);
// alert(b);

// let a = [1,2,3,4,5];
// a.splice(3,4,'a','b','c',4,5);
// console.log(a);

// let a = [3,4,1,2,7];
// a.sort();
// alert(a);

// let onj = {js:'test', jq: 'hello', css: 'world'};
// console.log(Object.keys(onj));

// let str = "привет епт";
// str = str[0].toUpperCase() + str.substr(1);
// alert(str);

// function cube($num){
//     return $num * $num * $num
// }
// alert(cube(2));

// function double(a){
//     return a * a;
// }
// alert(double(2));

// function sum(a,b){
//     return a + b
// }
// alert(sum(4,6));


// function res(a,b,c){
//     return (a - b) / c;
// }
// alert(res(10,2,4));

// let obj = {1:"Пн",2:"Вт",3:"Ср",4:"Чт",5:"Пят",6:"Сб",7:"Вс"};

// let arr = [1,2,3,4,5,6,7,8,9];
// let flag = false;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 5){
//        flag = true;
//         break;
//     }
// }
// if (flag = true){
//     alert("da");
// } else{
//     alert("no");
// }

// let c = false;
// function foo(a,b){
//     if(a == b){
//         c = true;
//         return c;
//     }
//     return c;
// }
// alert(foo(1,2));

// let c = false;
// function foo(a,b){
//     if(a + b > 10){
//         c = true;
//         return c;
//     }
//     return c;
// }
// alert(foo(5,5));

// let c = false;
// function foo(a){
//     if(a < 0){
//         c = true;
//         return c;
//     }
//     return c;
// }
// alert(foo(4));


// let str = "";
// for(let i = 0; i < 20; i++){
//     str = str +"xx";
//     document.write(str + "<br>");
// }


// for (var i = 1; i <= 9; i++) {
// 	for (var j = 1; j <= i; j++) {
// 		document.write(i);
// 	}
// 	document.write('<br>');
// }


// let x = "";
// let arr = [];
// for(let i = 0; i < 4; i++){
//     x = x +"xx";
//     arr.push(x);  
// }
// console.log(arr);


// let arr = [];
// for(let i = 1; i < 4; i++){
//     var str = "";
//     for(let j = 1; j <= i; j++){
//         str+=i;
//     }
//     arr.push(str);  
// }
// console.log(arr);

// function foo(a,b){
//     let arr = [];
//     for(let i = 0; i <= b; i++){

//         arr.push(a);
//     }
//     return arr;
// }

// console.log(foo('x',5));

// function arraySum(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum > 10) {
//             return i + 1;
//         }
//     }
// }

// console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var result = [];
// for(let i = arr.length - 1; i >=0; i--){
//     result.push(arr[i]);
// }
// console.log(result);

// let arr = [1,2,3,4,-120,-1,-2,-3,30,32,6,5];
// function isNumberInRange(num){
//     if(num > 0 && num < 10){
//         return true;
//     } else{
//         return false;
//     }
// }
// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(isNumberInRange(arr[i])){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// function isEven(num){
//     if(num % 2 == 0 ){
//         return true;
//     } else return false;
// }
// alert(isEven(254));

// let arr = [1,2,23,4,5,565,45,,7,9,6,,63,4,54,65,41,1,3,2465,4,4,61,3,6];
// let newArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(isEven(arr[i])){
//         newArr.push(arr[i]);

//     }

// }
// console.log(newArr);


// var str = 'any words for task';

// function ucFirst(str) {

//     return str.toUpperCase(str).slice(0, 1) + str.slice(1);


// }
// var arr = str.split(' ');
// var newstr = '';
// for (key in arr) {
//     newstr += ucFirst(arr[key]) + ' ';

// }
// alert(newstr);
// for(let i = 2; i < 100; i++){
//     if((i % 2) == 0){
//         document.write(i + "<br>");
//     }
// }

// let arr = [];
// for(let i = 0; i <= 10; i++){
//     arr[i] = i;
// }
// console.log(arr);



// function func() {
//     let i = document.getElementById("lame");
// 	alert(i.value);
// }

// function func(){
//     let i = document.getElementById("lame");
//     i.value = "чото другое";
// }

// function func(){
//     let i = document.getElementById("lame");
//     i.style.backgroundColor = "black";
// }


// function fuu(elem){
//     let i = document.getElementById("hi");
//     let j = document.getElementById("bye");
//     let tmp = i.value;
//     i.value = j.value;
//     j.value = tmp;
// }

// function fuu(){
//     let i = document.getElementById("elem");

//     let ii = i.value;
//     let j = document.getElementById("double");
//     j.value = ii * ii;
// }

// function fuu(input){
//     let i = document.getElementById('lmao');
//     i.value = i.value + input;
// }

// function foo(){
//     let i = document.getElementById('spn');
//     i.innerHTML = '321';
// }

// function foo(){
//     let i = document.getElementById("spn");
//     i.innerHTML = '12<b>3</b>';
// }

// function foo(){
//     let i = document.getElementById('spn');
//     i.outerHTML = '<h3>' + i.innerHTML + '</h3>' ;
// }


// function foo(){
//     let i = +document.getElementById("first").value;
//     let j = +document.getElementById("second").value;
//     let divv = document.getElementById('dv');

//     divv.innerHTML += i + j;
// }

// function foo(){
//     let i = document.getElementsByTagName('p');
//     for(let j = 0; j <i.length; j++){
//         i[j].innerHTML = 'hi';
//     }

// }

// function foo(){
//     let int = document.getElementsByClassName('www');
//     for(let i = 1; i < int.lenght; i++){
//         int[i].innerHTML = i +1;
//     }
// }

// function foo(){
//     let i = document.getElementById('class');
//     alert(i.getAttribute('class'));
// }

// function pClass() {
//     let i = document.getElementById("test");
//     alert(i.getAttribute("class"));

// }

// function deleteClass() {
//     document.getElementById("test").setAttribute("class","new-class");


// }

// function foo() {
//     let i = document.getElementById("text");
//     let idd = document.getElementById('pId');

//     idd.innerHTML = i.value ;
// }

// function foo(){
//     let elem = document.getElementById('pId');
//     let btnElm = document.getElementById('btn');

//     elem.innerHTML = "new text";
//     elem.setAttribute('class', 'new-class');

//     btnElm.value = 'you dumb ass';
//     btnElm.disabled   = true;

// }

// function foo( ){

//     let elem = document.getElementsByTagName('p');

//     for(let i = 0; i <elem.length; i++){
//         let j = elem[i].innerHTML;
//         elem[i].innerHTML = i + j ;
//     }

// }

// let date = new Date();

// alert(date.getMonth());

// function start(){
//     window.timerId = window.setInterval(timer, 1000);
//     document.getElementById('iD').disabled = true;
// }

// function stop(){
//     window.clearInterval(window.timerId);
// }

// function timer(){
//     let elem = document.getElementById('time');
//     let arr = ['you','fucking','idiot'];
//     for(let i = 0; i < arr.length; i++){
//         if(i == arr.length){
//             i = 0;
//             timer();
//         } else{
//             elem.innerHTML = arr[i] + 1;
//         }

//     }  

// }


// let markH = 178;
// let markW = 65;
// let johnH = 180;
// let johnW= 68;

// let markBmi = markW / (markH * markH);
// let johnBmi = johnW / (johnH * johnH);

// let a;
// if(markBmi > johnBmi){
//     a = true;
// }else{
//     a = false;
// }
// console.log(`Is Mark's BMI higher then John's? ${a}`);

// let johnScore = [89,120,103];
// let mikeScore = [116,94,123];


// let johnAverage = (johnScore[0] + johnScore[1] + johnScore[2]) / johnScore.length;
// let mikeAverage = (mikeScore[0] + mikeScore[1] + mikeScore[2]) / mikeScore.length;

// let wtf = johnAverage > mikeAverage;

// if(wtf == true){
//     wtf = johnAverage;
//     console.log(`Выиграла команда Джона со средним счетом ${wtf}`);
// } else if( wtf == false){
//     wtf = mikeAverage;
//     console.log(`Выиграла команда Майка со средним счетом ${wtf}`);
// } else{
//     console.log("Ничья");
// }

// let john = {
//     name: "John",
//     weight: 178,
//     height: 64,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height * this.height;
//         return this.bmi ;
//     }
// };
// let mark = {
//     name: "Mark",
//     weight: 178,
//     height: 74,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height * this.height;
//         return this.bmi ;
//     }
// };

// if(mark.bmi > john.bmi ){
//     console.log(mark.bmi );
//     console.log(mark.name);


// } else {
//     console.log(john.name );
//     console.log( john.bmi );
// } 
// else console.log (`bmi ${mark.name} равен ${john.name} и равен ${mark.calcBmi}`)

// function tipCalculator(bill){
//     let lol;
//     if(bill < 50){
//         lol = .2;
//     } else if(bill > 50 && bill < 200){
//         lol = .15;
//     }   else{
//         lol = .1;
//     }
//     return bill * lol;
// }

// let bills = [40, 200, 300];
// let tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// let cash = [tipCalculator(bills[0]) + bills[0],
//             tipCalculator(bills[1])+ bills[1],
//             tipCalculator(bills[2])+ bills[2]];
//             console.log(tips, cash);



// let bill = {
//     bills: [124, 48, 268, 180, 42],
//     tipCalc: function () {
//         this.onlyBill = [];
//         this.blillNtip = [];

//         for (let i = 0; i < this.bills.length; i++) {
//             let per;
//             let tip = this.bills[i];
//                 if (tip <= 50) {
//                     per = .2;

//                 } else if (tip => 50 && tip < 200) {
//                     per = .15;

//                 } else {
//                     per = .1;

//                 }
//             this.onlyBill[i] = bill * per;
//             this.blillNtip[i] = bill + bill * per;
//         }

//     }
// };


//     bill.tipCalc;
//     console.log(bill);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };



//   function sumSalaries(salaries){
//       let sum = 0;
//       for (let value of Object.values(salaries)){

//           sum += value;
//       }
//       return sum;
//   }  
//   alert( sumSalaries(salaries) ); // 650

// function count(obj){
//   return  Object.keys(obj).length;
// }

// let user = {
//     name: 'John',
//     age: 30
//   };

//   alert( count(user) ); // 2

// let user = {};
// [user.name, user.surname, user.fuck] = "Ilya Kantor fuck".split(' ');

// alert(user.fuck);

// let Jan02_1970 = new Date(999999999* 1000);
// alert( Jan02_1970 );
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };

//   let json = JSON.stringify(student);

//   alert(typeof json); // мы получили строку!

//   alert(json);

// function sum1(n){
//     for(let i = n - 1; i > 0; i--){
//         n += i;
//     }
//     alert(n);
// }

// function sum2(n){
//     if(n == 0){
//         return 0;
//     } else{
//         return n + sum2(n - 1);
//     }

// }

// sum1(100);
// alert(sum2(100000));

// let n = prompt();

// function factorial(n){
//     if(n == 0){
//         return 1;
//     }   else{
//         return n * factorial(n - 1);
//     }

// }

// alert(factorial(n));

// for (var i = 'n'; i < 1; i++) {
//     // ...
//   }

//   alert(i);


//   for (let j = 'f'; j < 1; j++) {
//     // ...
//   }

//   alert(j);

// function makeWorker() {
//     let name = "Pete";

//     return function() {
//       alert(name);
//     };
//   }

//   let name = "John";

//   // create a function
//   let work = makeWorker();

//   // call it
//   work();


// w
// function sum(a){
//   return function(b){
//     return a + b;
//   };
// }

// alert(sum(10)(10));

// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return count++;
//   };

//   counter.set = value => count = value;
//   counter.decrease = () => count--;



//   counter.count = 0;

//   return counter;
// }

// let counter = makeCounter();

// counter.count = 10;
// alert( counter() ); // 10


// let user = { };

// Object.defineProperty(user, "name", {
//   value: "John",
//   writable: false,
//   configurable: false
// });

// alert(user.name);


// let head = {
//   glasses: 1,

// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
// };


// for(let elm in pockets) alert(elm);


// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   hide: true,

// };

// let lazy = {
//   hide: false,

// };

// if(speedy.hide == true){
//   speedy.__proto__ = hamster;

// }else if (lazy.hide == true){
//   lazy.__proto__ = hamster;
// } else{
//   alert("никто не нашел");
// }

// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);
// alert(rabbit.created);

// let out = document.querySelector('#out');

// for (let i = 1; i < 10; i++) {

//   for (let c = 1; c < 10; c++) {

//     out.innerHTML += `${i} * ${c} = ${i * c}<br>`;
//   }
//   out.innerHTML += `<hr>`;
// }

// function largestSwap(num) {
//   let newStr;
//   for (let i = num.length - 1; i >= 0; i--) {
//     newStr += num[i];
//   }

//   if (num > newStr) {
//     return true;
//   } else {
//     return false;
//   };

// }

// console.log(largestSwap(99));

// function largestSwap(num) {
//   return num / 10 > num % 10
// }
// console.log(largestSwap(54));

// let a = new Set();
// a.add(1); //добавляем в сэт
// a.add(2);
// a.add('str');
// a.add(1); // не добавляет дубликаты 
// a.add('1'); // можно добавить если тип другой
// //a.clear(); очищает
// a.add('hello');
// //a.delete('hello') удаляет
// console.log(a.has(1)); //проверяет есть или нет
// for (let item of a) {
//   console.log(item);
// }
// //вывод уникальных элем массива
// let arr = [1, 1, 2, 7, 23, 3, 4, 3, 4, 5, 7, 5, 5, 8, 58, 8, 6, 66, 7, 7, 8];
// let b = new Set(arr);
// console.log(b);
// console.log(b.size);
// //из Сета в массив 
// let bArr = Array.from(b);
// console.log(bArr);

// let s1 = new Set();
// s1.add('h');
// s1.add('b');
// s1.add('o');
// s1.add('h');
// console.log(s1);

// let i2 = document.getElementById('i-2');
// let i3 = document.getElementById('i-3');
// let s2 = new Set();
// s2.add('hello');

// document.getElementById('b22').addEventListener('click', f1);
// document.getElementById('b33').addEventListener('click', () => {
//   s2.add(i3.value);
//   console.log(s2);
// });

// function f1() {
//   s2.delete(i2.value);
//   console.log(s2);
// }

// let arr = document.getElementsByTagName('div').innerHTML;

// document.getElementById('b22').addEventListener('click', () => {
//   for (let item of arr) {
//     item = document.getElementsByTagName('div');
//     item.innerHTML = 3;
//   }
// });
// function fizzbuzz(n) {
//   let z;
//   (n % 3 == 0 && n % 5 == 0) ?
//   z = "FizzBuzz":
//     (n % 5 == 0) ?
//     z = 'Buzz' :
//     (n % 3 == 0) ?
//     z = 'Fizz' :
//     z = n;
//   return z;

// };
// alert(fizzbuzz(3));

// let a = [1, 2, '3', 4, 5, 6, '7'];
// let b = a.map((item, index) => {

//   return +item;
// });

// console.log(a);
// console.log(b);


// class Goods {
//   constructor(name, amount, out) {
//     this.name = name;
//     this.amount = amount;
//     this.out = out;
//   }

//   show() {
//     // console.log(`hello my name is ${this.name} and i have ${this.amount}`);
//     document.querySelector(this.out).innerHTML = `hello my name is ${this.name} and i have ${this.amount}`;
//   }
// }

// class Goods2 extends Goods {
//   constructor(name, amount, out, img, count) {
//     super(name, amount, out);
//     this.img = img;
//     this.count = count;
//   }

//   showNew() {
//     document.querySelector(this.out).innerHTML = ``
//   }
// }

// let goods = new Goods('eelfy', 'depression', '.wtf');
// goods.show();


// const testit = (a, b) => a | b;
// console.log(testit(1, 5));
// alert(document.body.childNodes[1]); //1
// alert(document.body.childNodes[3]); //1
// alert(document.body.childNodes[5]); //1
// alert(document.body.lastElementChild.lastElementChild); //1


// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// let div2 = div.cloneNode(true);
// div2.innerHTML = "хуй";


// document.querySelector(".show").addEventListener('click', () => {
//     document.body.append(div);
// });
// document.querySelector(".del").addEventListener('click', () => {
//     div.remove();
//     div2.remove();
// });
// document.querySelector(".show2").addEventListener('click', () => {
//     document.body.append(div2);
// });

// let side = document.querySelector(".side");

// document.getElementById("perBtn").addEventListener('click', () => {
//     let per = side.value * 4;
//     document.querySelector(".p").innerHTML = `периметр = ${per}`;
// });
// document.getElementById("plosBtn").addEventListener('click', () => {
//     let plos;
//     plos = side.value * side.value;
//     document.querySelector(".s").innerHTML = `Площадь = ${plos}`;

// });



// let rndm = Math.floor((Math.random() * 100) + 1);
// console.log(rndm);

// function f1() {

//     let inp = document.querySelector('.inp').value;

//     if (rndm === inp) {
//         document.querySelector('.output').innerHTML = 'вы угадали';
//     } else if (inp > rndm) {
//         document.querySelector('.output').innerHTML = 'Вы ввели число больше чем нужно';
//     } else {
//         document.querySelector('.output').innerHTML = 'Вы ввели число меньше чем нужно';
//     }

// }





// var prNum, tempOut;
// prNum = Math.floor((Math.random() * 10) + 1);
// console.log(prNum);


// function f1() {
//     var num, out;

//     num = document.getElementById('mynum').value;
//     out = document.getElementById('out');

//     if (num == prNum) {
//         out.innerHTML = 'Вы угадали';
//     } else if (num > prNum) {
//         out.innerHTML = 'Вы ввели число больше чем нужно';
//     } else {
//         out.innerHTML = 'Вы ввели число меньше чем нужно';
//     }



// let btn = document.querySelectorAll('.btn');
// let inp = document.querySelector('.inp');
// let clear = document.querySelector('.clear');
// let toUpper = document.querySelector('.toUpper');

// for (let key of btn) {
//     key.onclick = () => {
//         inp.value += key.innerHTML;
//     }
// }

// toUpper.onclick = () => {
//     inp.innerHTML.toUpperCase();
// }

// clear.onclick = () => {
//     inp.value = '';
// }


// let tags = document.querySelector('.tags');
// let tagInfo = document.querySelector('.tags-info')

// document.querySelector('.btn').addEventListener('click', () => {

//     switch (tags.value) {
//         case 'div':
//             tagInfo.innerHTML = 'div info';
//             break;
//         case 'input':
//             tagInfo.innerHTML = 'input info';
//             break;
//         case 'a':
//             tagInfo.innerHTML = 'a info';
//             break;
//         case 'img':
//             tagInfo.innerHTML = 'img info';
//             break;
//     }
// });


// let arr = [1, 2, 3, 4];
// let n;
// let sum;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         n = arr[i] * arr[i];

//     }
//     sum = n[i] + n[i];
//     console.log(sum);
// }

// function solve(str) {
//     //..

//     return str.split('').reverse('').join('');
// }



// console.log(solve('привет как дела'));
// let x, y;

// function missingValues(arr) {
//     //coding and coding..
//     for (let i = 0; i < arr.lenght; i++) {
//         arr[i]
//     }

//     for (let k = 0; k < arr.lenght; k++) {
//         arr
//     }

// }


// let one = document.querySelector('.toggle1');
// let two = document.querySelector('.toggle2');
// let spoiler1 = document.querySelector('.spoiler1');
// let spoiler2 = document.querySelector('.spoiler2');


// one.addEventListener('click', () => {
//     spoiler1.classList.toggle('active');
//     event.preventDefault();
// });

// two.addEventListener('click', () => {
//     spoiler2.classList.toggle('active');
//     event.preventDefault();
// });

// let i = 100;

// while (i >= 0) {

//     console.log(i);
//     i -= 2;
// }


// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// let i = 10;

// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// let res = 0;

// for (let i = 0; i <= 100; i += 2) {
//     res = res + i;
// }
// res
// console.log('res: ', res);


// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     let sum = arr[i] + arr[i];
//     console.log('sum: ', sum);
// }


// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arr.length; i++) {

//     console.log(arr[i]);
// }


// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }


// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//     console.log(elem);
// }



// function minMax(arr) {
//  let a, b;
//  a = Math.max(...arr);   
//  b = Math.min(...arr);
    
//  console.log(`max = ${a}, min = ${b}`);
// }

// minMax([1,2,3,4,5,6])


// let anotherArray = [1, 2,3,4,5];
// const newArray = ['first', ...anotherArray];
// console.log(newArray);

// function sortByLength(arr) {
// 	arr.sort()
 
//     console.log('arr: ', arr);
// }

// sortByLength(["a", "ccc", "dddd", "bb"])

// function chatroomStatus(users) {

//     for(let i =0; i < users.length; i++){
        
//         if(users.length = 0){

//             return alert('no one online')
        
//         }else if (users.length > 2){

//             return 	alert(`${users[0]}, ${users[1]} and ${users.length - 2} online`)

//         } else{

//             return 	alert(`${users[0]} and ${users[1]} online`)

// 	    }
//     }

	
// }

// chatroomStatus(["s234f", "mailbox2"])

// let a = 0;

// function countTrue(arr) {
     
//    let res = arr.filter(word => word == true)

//     return res.length;
// }



// alert(countTrue([true, false, false, true, false]))


// function countWords(str) {
// 	let arr = str.split(' ');

//     console.log(arr); 
//     return arr.length;
// }

// countWords("Just an example here move along") ;

// function getOnlyEvens(nums) {
// 	let arr = [];
// 	for(let i =0; i < nums.length; i++){
// 		if(nums[i] % 2 == 0 && i + 1 % 2 == 0){
// 			arr.push(nums[i])
// 		}
// 	}
//     return arr
    
//     const res = nums.filter(word => {
        
//     })
// }

//  let arr = []

//   function toArray(obj) {
// 	for (let i in obj )
// 	arr.push([i,obj[i]])
// console.log(arr);

// }


//  toArray({ a: 1, b: 2 })

// 	let arr = []
// function normalize(str) {
 

// 	arr = str.toLowerCase();
// 	console.log(arr) 
// }


// normalize("CAPS LOCK DAY IS OVER")



// document.querySelectorAll('.link').forEach(addEventListener('click', () => {
// 	document.querySelector('.tab').classList.toggle('active')
// }));




// let input = document.querySelector('#input');
// let list = document.querySelector('#list');


// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		// здесь будет код для добавление новой li в список
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task'); // добавлено
// 		task.innerHTML = this.value;
		
// 		task.addEventListener('dblclick', function() {
// 			let text = this.innerHTML;
// 			this.innerHTML = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.innerHTML = this.value;
// 				}
// 			});
// 		});
// 		li.appendChild(task);


// 		let remove = document.createElement('span');
// 		task.classList.add('remove'); // добавлено
// 		remove.innerHTML = 'удалить';
// 		li.appendChild(remove);
// 		remove.addEventListener('click', ()=>{
// 			li.style.display = 'none';
// 		})
		
// 		let mark = document.createElement('span');
// 		task.classList.add('mark'); // добавлено
// 		mark.innerHTML = 'сделано';
// 		li.appendChild(mark);
// 		mark.addEventListener('click', ()=>{
// 			li.classList.toggle('done')
// 		})
		
// 		list.appendChild(li);
		
// 		this.value = '';
// 	}
// });




// var cardsData = [
// 	{
// 	  inStock: true,
// 	  imgUrl: 'gllacy/choco.jpg',
// 	  text: 'Сливочно-кофейное с кусочками шоколада',
// 	  price: 310,
// 	  isHit: true,
// 	  specialOffer: 'Двойная порция сиропа бесплатно!'
// 	},
// 	{
// 	  inStock: false,
// 	  imgUrl: 'gllacy/lemon.jpg',
// 	  text: 'Сливочно-лимонное с карамельной присыпкой',
// 	  price: 125,
// 	  isHit: false
// 	},
// 	{
// 	  inStock: true,
// 	  imgUrl: 'gllacy/cowberry.jpg',
// 	  text: 'Сливочное с брусничным джемом',
// 	  price: 170,
// 	  isHit: false
// 	},
// 	{
// 	  inStock: true,
// 	  imgUrl: 'gllacy/cookie.jpg',
// 	  text: 'Сливочное с кусочками печенья',
// 	  price: 250,
// 	  isHit: false
// 	},
// 	{
// 	  inStock: true,
// 	  imgUrl: 'gllacy/creme-brulee.jpg',
// 	  text: 'Сливочное крем-брюле',
// 	  price: 190,
// 	  isHit: false
// 	}
//   ];
  
  /* Техническое задание
  
  Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.
  
  Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:
  
  - inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
  - imgUrl — ссылка на изображение товара.
  - text — название продукта.
  - price — цена.
  - isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
  - specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.
  
  Вот пример вёрстки одной карточки в каталоге:
  
  <ul class="goods">
	<li class="good">
	  <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
	  <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
	  <p class="good__price">110₽/кг</p>
	</li>
	...
  </ul>
  
  Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.
  
  Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.
  
  */
//   var makeElement = function (tagName, className, text) {
// 	var element = document.createElement(tagName);
// 	element.classList.add(className);
// 	if (text) {
// 	  element.textContent = text;
// 	}
// 	return element;
//   };
  
// var createCard = function(good){

// 	var listItem = makeElement('li', 'good');
	
// 	var availabilityClass = 'good--availabile'
// 	if(!good.inStock) {
	
// 	  availabilityClass = 'good--unavailable'
	
// 	}
// 	listItem.classList.add(availabilityClass)
	
// 	var title = makeElement('h2', 'good__description', good.text)
// 	listItem.appendChild(title)
  
// 	var picture = makeElement('img','good__image')
// 	picture.src = good.imgUrl
// 	picture.alt = good.text
// 	listItem.appendChild(picture)
	
// 	var price = makeElement('p', 'good__price', good.price + "₽/кг")
// 	listItem.appendChild(price)
// 	if(good.isHit){
// 		listItem.classList.add('good--hit')
// 		var specialOffer = makeElement('p','good__special-offer', good.specialOffer)
// 		listItem.appendChild(specialOffer)
// 	}
	
// 	return listItem;
// }
  
//   var renderCards = function(goods){
	
// 	var cardList = document.querySelector('.goods')

// 	for (var i = 0 ; i < goods.length; i++){
// 		var cardItem = createCard(goods[i])
// 		cardList.appendChild(cardItem)
// 	}


	
//   }
 
//   renderCards(cardsData)
  
// function duplicateEncode(str){
//   let word = str.toLowerCase()
//   let unique = ''


//     for(let i = 0; i < word.length; i++){

//       if(word.lastIndexOf(word[i]) === word.indexOf(word[i])){
//         unique += '(';
//       } else{

//        unique += ')';
//       }
     
//     } return unique;
//   }
// console.log(duplicateEncode("BaRaban"));

// function duplicateEncode(str){
//   //create a var to hold string value that IGNORES case
//   var word = str.toLowerCase();
//   //create a var to hold the finished string to return after it's looped through 
//   var unique = '';
//   //loop through all letters in string
//     for (var i = 0; i < word.length; i++) {
//   //check for any characters that repeat
//       if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
//   //for each character that never dupes, place (
//         unique += '(';
//       } else
//   //for each character that IS a dupe, place )
//       unique += ')';
//     }
//   //return the full string value where '(' are non duped and all')' are duped
//     return unique;
  
//   }
//   //test by printing this in the console
//   console.log(duplicateEncode('BaRaban'));



// let str = 'heelloo'

// let i = str.lastIndexOf('e')
// console.log(i);

// function findOdd(A) {
//   let n = 0;
//   for(let i = 0; i < A.length; i++){
//     if(A.lastIndexOf(A[i]) === A.indexOf(A[i])){
//       return A[i]
//     }
//     for(let n = 0; n < A.length; n++){
//       if(A[i] == A[n]){
//         n++;
//       }
//     }
//     if(n % 2 != 0){
//       return A[i];
//     }
//   }
//   return 0;
// }

// function findOdd(numbers) {
//   var count = 0;
//   for(var i = 0; i<numbers.length; i++){
//     for(var j = 0; j<numbers.length; j++){
//       if(numbers[i] == numbers[j]){
//         count++;
//       }
//     }
//     if(count % 2 != 0 ){
//       return numbers[i];
//     }
//   }
// };

 
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2, 5]));
// console.log(findOdd([10]));
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));


// function removeSmallest(n) {
//   let newArr = []
//   for(let i = 0;i < n.length; i++){
//     for(let n = 0; n < n.length; n++){
//       if(n[i] > n[j]){
//         newArr = newArr.push(n[i])
//         return newArr 
//       }
//     }
//   }
// }


// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }

// let mp = arr.map(function(arr){
//   return arr.length
// })
// console.log('arrLength: ', arrLength);
// console.log('mp: ', mp);



// function solution(number){
//   let m3 = []
//   let m5 = []
//   for(let i = number; i > 0; i--){
//     if(i % 3 == 0){
//       m3 += m3.push(i)
//       return m3
//     }
//     if(i % 5 == 0){
//       m5 += m5.push(i)
//       return m5
//     }  
//     if(i % 3 == 0 || i % 5 == 0){
//       m3 += m3.push(i)
//       return m3
//     } 
    
//     let sum = m3 + m5
//     return sum
//   }
//  }

// console.log(solution(10));
 
 
// // ВЛАДИЛЕН MAP

// const people = [
//   { name: 'Владилен', age: 25, budget: 40000 },
//   { name: 'Елена', age: 17, budget: 3400 },
//   { name: 'Игорь', age: 49, budget: 50000 },
//   { name: 'Михаил', age: 15, budget: 1800 },
//   { name: 'Василиса', age: 24, budget: 25000 },
//   { name: 'Виктория', age: 38, budget: 2300 },
// ];

// // for(let i = 0; i < people.length; i++){
// //   console.log(people[i]);
// // }

// // for(let person of people){
// //   console.log(person);
// // }

// // forEach

// // people.forEach( person => console.log(person) )
 

// // Map

// // const newPeople = people.map(person =>{
// //   return person.age * 3
// // })

// // Filter

// // const abults = people.filter( person => {
// //   if (person.age >= 18){
// //     return true
// //   }
// // })

// // const abultsSlim = people.filter( person => person.age >= 18)
 

// // Reduce

// // const amount = people.reduce((total, person)=>{
// //   return total + person.budget
// // }, 0)
// // const amountSlim = people.reduce((total, person) =>  total + person.budget, 0)

// // Find

// // const igor = people.find(person => person.name === 'Игорь')


// // // FindIndex

// // const igorindex = people.findIndex(person => person.name === 'Игорь')



// // =======================
// const amount = people
//   .filter(person => person.budger > 3000)
//   .map(person => {
//     return{
//       info: `${person.name} (${person.age})`,
//       budget: person.budget
//     }
//   })
//   .reduce((total, person) => total + person.budget, 0)

// console.log(amount);


// function getCount(str) {
//   var vowelsCount = 0;
//   let low = ['a', 'e', 'i', 'o', 'u'];
//   // enter your majic here
//   let strArr = str.split('')
//     for(let i in strArr){
//         for(let n in low){
//           if(strArr[i] === low[n]){
//           vowelsCount++
//         }
//       }
//     }
//   return vowelsCount ;
// }
// console.log(getCount('abracadabra'));


// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((c, index) => {
//     return chars.indexOf(c) === index;
// });

// console.log(uniqueChars);


// const removeConsecutiveDuplicates = s => {
//   let sArr = s.split(' ')
//   let newS = sArr.filter((c,index)=>{
//     return sArr.indexOf(c) === index
//   })
//   return newS
// }

// console.log(removeConsecutiveDuplicates('hello hello hello'));


// const fndPi = n => Math.PI.toFixed(n)

// const fndPi = n => Math.floor(Math.PI * 10**n) / 10**n

// console.log(fndPi(5));

// const fndE = n =>{
//   if(n <= 15){
//     return Math.floor(Math.E * 10**n) / 10 ** n
//   } else{
//     return console.log('превышен лимит');
//   }
// }

// console.log(fndE(2));

// const primeFactors = (n) => {
//   let factors = []
//   let factor = []
//     for(let i = 1; i < 11; i++){
//       factors.push(i)
//       for(let k = 0; k < factors.length; k++){
//           if(n % factors[k] === 0 && factor.includes(factors[k]) === false){
//           factor.push(factors[k]) 
//         }
//       }
//   } 
//   return factor;
// }

 
// console.log(primeFactors(30030))

// const next = n =>{
//   let arr = []
//   for(let i= 0; i < n; i++){
//     arr.push(i)
//   }
//   return arr
// }

// console.log(next(10));


//  const price = function(height, weight, price){
//     let totalCoast =  height * weight * price
//     return totalCoast;
//  }

//  console.log(price(2,2,2));

// let changeReturn = function(cost, amount){
//   let back = cost - amount;
  
// }
// console.log('changeReturn: ', changeReturn(10,5));

// let enter = document.querySelector('.enter')
// let convert = document.querySelector('.convert')
// let need = document.querySelector('.need')

// convert.addEventListener('click', function(){
//   // метры в сантиметры (10**3)
//   need.value = enter.value * 10**3
// })


//   let city1_lenght = document.querySelector('.city1_lenght');
//   let city1_width = document.querySelector('.city1_width');
  
//   let city2_lenght = document.querySelector('.city2_lenght');
//   let city2_width = document.querySelector('.city2_width');

//   let distance = document.querySelector('.distance');


// document.querySelector('.btn').addEventListener('click', () =>{
//   distance.innerHTML = Math.acos(Math.sin(city1_width.value) * Math.sin(city2_width.value) + Math.cos(city1_width.value) * Math.cos(city2_width.value) * Math.cos( city1_lenght.value - city2_lenght.value));
// })


// let coast = document.querySelector('.coast')
// let stateTax = document.querySelector('.stateTax')

// let tax = document.querySelector('.tax')
// let taxCoast = document.querySelector('.taxCoast')

// document.querySelector('.btn').addEventListener('click', function(){
//   tax.value = coast.value * stateTax.value;
//   taxCoast.value =  Number.parseInt(tax.value)+ Number.parseInt(coast.value);
// })

// let resh = document.querySelector('.resh')
// let orel = document.querySelector('.orel')

// document.querySelector('.flip').addEventListener('click', function(){
//   let random = Math.floor(Math.random() * Math.floor(2)) 
//   switch (random){
//     case 0:
//       orel.innerHTML+= 1
//       break;
//     case 1:
//       resh.innerHTML+= 1
//       break
//   }
// })

// const fn = n =>{
//   let step = 0;
//   while( n != 1){
//     alert(n)
//     if(n % 2 == 0){
//       n = n / 2;
//     }
//     if(n % 2 != 0){
//       n = n * 3 + 1
//     }
//   }
  
// }


// console.log(fn(20));


// var collatz = function (n) {
//   "use strict";

//   var steps = 0;

//   (function recursive(n) {
//       if (n <= 1) {
//           return;
//       }
//  alert(n)
//       n = n % 2 === 0 ? n / 2 : n * 3 + 1;

//       steps++;
//       recursive(n);
     
//   }(n));

//   // return steps;
// };

// collatz(20);



// var sieve = function (n) {
//   "use strict";

//   var array = [],
//       primes = [],
//       i,
//       j;

//   for (i = 0; i < n; i++) {
//       array.push(true);
//   }

//   for (i = 2; i <= Math.sqrt(n); i++) {
//       if (array[i]) {
//           for (j = i * i; j < n; j += i) {
//               array[j] = false;
//           }
//       }
//   }

//   for (i = 2; i < n; i++) {
//       if (array[i]) {
//           primes.push(i);
//       }
//   }

//   return primes;
// };

// this.console.log(sieve(1000000));

// function isOdd(num) { return num & 1; };

// function solution(str){
//   let arr = str.match(/.{1,2}/g);
  
  
//    if (str.length == 0) {
//      return []
//    } else if(isOdd(str.length) == 1) {
//       let x = str + "_"
//       return arr = x.match(/.{1,2}/g);
//    } else {
//       return arr;
//    }
  
// }


// // Refactored 

// function solution(str) {
//   if (str.length == 0) {
//     return []
//   };
  
//   return (str.length % 2 ? str + '_' : str).match(/../g);
// }


// function getMiddle(s){
//   let arr = s.split('')
//       let middle = arr.length % 2
//       let res = 0
//       let mid =  arr.length / 2

//        if(middle == 1){
//         mid = Math.floor(mid)
//         res = arr[mid]
//         return res

//        }
//        if(middle == 0){      
//         res =arr[mid - 1] + arr[mid] 
//         return res
//     }
 
// }

// console.log(getMiddle('test'));


// Регулярный выражения 
// . - любой одиночный символ
// [] -  [любой из введенных внутри символов], диапозоны
// $ - конец строки
// \ - экранирование(спец сивмвол становится обычным)
// ^ - начало строки
// /n - перенос строки

// ^[^b] - строкак НЕ начинается с b
// \d - любая цифра
// \В - все что угодно кроме цифр 
// \s - пробел 
// \S - все кроме пробела 
// \w - буква  
// \W - все кроме букв и цифр 
// \b - граница слова 
// \B - все кроме не границ слова

// Квантификация 
// n{4} - искать символ n подряд 4 раза 
// n{4,5} - искать n от 4 до 6 
// * 0 - от нуля совпадений и выше
// + - от одного совпадения и больше 
// ? - ноль или одно совпдадение 

// FizzBuzz
// let numbers = []
// for(let i = 0; i < 100; i++){
//   numbers[i] = numbers.push(i)
//   if(numbers[i] % 3 == 0 && numbers[i] % 5 == 0 ){
//     numbers[i] = 'FizzBuzz'
//   }else if(numbers[i] % 3 == 0){
//     numbers[i] = 'Fizz'
//   }else if(numbers[i] % 5 == 0){
//     numbers[i] = 'Buzz'
//   } 
// }
// console.log(numbers);

//  reverse string 
// const reverse = str => str.split('').reverse().join('') == str ? true: false

// console.log(reverse('heeh'));

// function anagrams(word, words) {
//   let w = word + ','
//   let newArr = w.concat(words).split(',')

//   let map = new Map
//   for(let word of newArr){
//     let sorted = word.toLowerCase().split('').sort().join('')
//     let i = map.set(sorted, word)
//     return i
//   }
 

// }

//  Pig latin

// const pig = word =>{
//    let cons = ['b', 'c', 'd','f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't','v', 'w', 'x', 'z']
//   wArr = word.split('')
//   for(let i = 0; i < cons.length; i++){
//       if(word[0] === cons[i]){
//         let res = wArr.splice(1,word.length - 1).join('') + '-' + wArr[0] + 'ay'
//         return res
//       }
      
//   }

 
// }

// console.log(pig("banana")); 


//  count lowels 

// const count = str =>{
//   let arr_en = ['e','i','o','u','y' ];
//   let arr = str.toLowerCase().split('');
//   let val = 0;
//   let newArr = [];

//   for(let i = 0; i < arr.length; i++){

//     for(let n of arr_en){

//       switch(arr[i]){
//         case n:
//           newArr[i] = newArr.push(arr[i]);
//           val++;
//           break;
//         case !n:
//           newArr[i] = 'hi';
//           break;
//       }
    
      
//     }
    
//   }
//   return val;
// }

// console.log(count('Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found. '));


// Check if Palindrome

// const pal = w => w.split('').reverse().join('').toLowerCase() == w.toLowerCase() ? true: false

// console.log(pal('racecaR'));

// let repeats = arr => {
//   //..
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     for(let k = 0; k < arr.length; k++){
//       if(arr[i] == arr[k]){
//         newArr[i] = newArr.push(arr[i])
//       }
//     }  
//   }
//    return newArr 
// }

//   console.log(repeats([4,5,7,5,4,8]));


// let accum = s => {
//   let str = ''
//   s.toLowerCase().split('').map((el,index) => str += el.toUpperCase() + el.repeat(index) + '-').pop().substring(0, str.length - 1)
// }
// let arr = [1,2,3]

// console.log( arr.map((el, indx) => el * 3));
// console.log(accum('elsGSe'))


// function persistence(num) {
//   //code me
//   let arr = num.toString().split('')
//   let indx = 0
//   let nb = 0
//  if(arr.length == 1){
//    return indx
//  }else{
//   let repeat = n =>{
//     arr2 = n.toString().split('')
//     if(arr2.length == 1){
//       return indx
//     }else{
      
//       nb = arr2.reduce((a,b) => a * b)
//       indx++
//       repeat(nb)
//     }
//   }
//   repeat(num)
//   console.log(indx); 
//  }
// }


// persistence(999);

// function firstNonRepeatingLetter(s) {
//   // Add your code here
//   let arr = s.split('')
//   for(let i = 0; i < s.length; i++){
//     if(arr.indexOf(s[i]) == arr.lastIndexOf(s[i])){
     
//       return s[i]
//     }
//   }
   
// }

// console.log(firstNonRepeatingLetter('stress'));

// const fu = arr =>{
//  let globalArr = []
// for(let i of arr){
//   let newArr = arr.filter(item =>{

//     return item === i

//   })
//   globalArr.push(newArr.length)
  
// }
// let set = new Set(globalArr)
// return globalArr
// }

// console.log(fu([1,2,3,4,4,4,5,4,1,5,4,3]));


// function createPhoneNumber(n){
//   return `(${n[0]}${n[1]}${n[2]})`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));



// function generateHashtag(str) {
//   let hash = str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ').replace(/ +/g, '');

//   if(hash.length > 140 || hash.length == 0){
//     return false 
//   } 
//   if(str[0] == '#'){
//     return hash
//   }
//   else{
//     return `#${hash}`
    
//    }
// } 

// console.log(generateHashtag("Codewars is nice"));

// let wtf = [-120750639,-178452069,170317035,11921853,-127192623,100080637,-136004429,41338527,170704583,-96692363,191547007,111366843,123693517,76063645,-84614539,-63589441,51913577,-52148768,38337749,-23549427,-198397693,-15160223,45979031,10602899,-52542925,-36221519,-195901013,-168589091,-134979381,68670793,160042213,-51792721,169470671,61237439,-1777493,177561135,151955069,-135647759,38698619,-150679371,-197848201,119754747,84758541,-5954267,69314629,116911479,-115932655,148562193,162597957,68489809]
// let ayyoWtf = wtf.reduce((a,b) => a + b)
// console.log(ayyoWtf)

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  
  for (i = 0; i < input.length; i++) {
    ch = [...input].splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  let newSet = new Set(permArr) 
  console.log(newInp);
  return newSet
};

 
console.log(permute('abcd'));
 