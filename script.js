(function () {
	 "use strict";

	 // alert('Ia lybly borsch');
	 // document.write('sdfsdfsfsf');

	 // var name, admin;
	 // name = "Vlka";
	 // admin = name;
	 // document.write(admin);

	 // var planet = 'Zemlia';
	 // var client = 'Petia';
	 //  var name = prompt('kto ti');
	 //  alert(name);
	 //  confirm(name)

	 // var a = prompt('Кто пришел?', '');
	 // if(a == 'Admin'){
	 // 	var b = prompt('Пароль?', '');
	 // 	if(b == 'Черный Властелин'){
	 // 		 alert('Добро пожаловать!');
	 // 	} else if (b == null){
	 // 	alert('Вход отменён');
	 // } else {
	 // 	alert('Пароль неверен');
	 // }
	 // } else if(a == null) {
	 // 	alert('Вход отменен');
	 // } else {
	 // 	alert('Я вас не знаю');
	 // }
	 // var a = prompt('Кто пришел?','');
	 // switch (a){
	 // 	case null:
	 // 		 alert('Вход отменен');
	 // 		 break;
	 // 	case !'Admin':
	 // 		 alert('Я вас не знаю');
	 // 		 break;
	 // 	default:
	 // 		 prompt('Пароль?');
	 //
	 // }

	 //---------------------------------------Суммирование чисел
	 // var a = +prompt('Enter first number'),
	 // 			b = +prompt('Enter second number');
	 // if(isNaN(a) || isNaN(b)){
	 // 	 alert('Not a number!');
	 // } else{
	 // 	 alert(a+b);
	 // }
	 // (isNaN(a) || isNaN(b)) ? alert('Not a number!'): alert(a+b);

//----------------------------------Проверка введенного значения
	 // var answer = prompt('Каково официальное название JavaScript'),
	 //    rightAnswer = 'ECMAScript'.toLowerCase();
	 // // if(rightAnswer.toLowerCase() == answer.toLowerCase()){
	 // // 	 alert('Верно!');
	 // // } else{
	 // // 	 alert('Не знаете? "ECMAScript"');
	 // // }
	 // if (answer){
	 // 	 answer = answer.toLowerCase();
	 // 	(rightAnswer == answer)? alert('Верно!') : alert('Не знаете? "ECMAScript"');
	 // }

	 //-------------------------------------Сравнение значений
	 // var a = 1, b = 2;
	 // var result = (a + b < 4) ? 'malo' : 'mnogo';
	 // alert(result);

	 // var item1 = generateNumber(6),
	 //  item2 = generateNumber(6);
	 //
	 // console.log(item1 + ' - ' + item2);
	 //
	 // var variants = ['orel', 'reshka'],
	 //  side = generateNumber(2);
	 //
	 // console.log(variants[side - 1]);
	 //
	 // var min = prompt('Enter min number?');
	 // var max = prompt('Enter max number?');
	 //
	 // if (!Number(max)|| !Number(min)) {
	 // 	alert('Your enter not a number');
	 // } else {
	 // 	alert(generateNumber(max));
	 // }
	 //
	 // function generateNumber(max,min) {
	 // 	max = max ? max : 1;
	 // 	min = min ? min : 1;
	 // 	return Math.round(Math.random() * (max - min)) + +min;
	 // }
	 //дз пока пользоват не ввел число!

//--------------------------------Вывод натурального числа (не раб)
	 // var first = +prompt('Vvedite pervoe chislo','');
	 // var second = +prompt('Vvedite vtoroe chislo','');
	 // function simple() {
	 // 	for(var i=2; i<10; i++){
	 // 		 for( var j=2; j<i; j++){
	 // 				if(i % j == 0) {
	 // 					 continue;
	 // 				}
	 // 		 }
	 // 		 console.log(i);
	 // 	}
	 // }
	 // var car = {
	 // 	color: "green",
	 // 	model: "bmw",
	 // 	isNew: false,
	 // 	sizes: {
	 // 		 width: {
	 // 				one: 12,
	 // 				two: {}
	 // 		 },
	 // 		 length: 4,
	 // 		 height: 1.5
	 // 	},
	 // 	year: 2018,
	 // 	price: 21000,
	 // 	currency: 'USD',
	 // 	showFullName: function () {
	 // 		 alert(this.model + ' ' + this.year);
	 // 	}
	 // };
	 // for (var property in car){
	 // 	 console.log(typeof car[property]);
	 // }
	 // car.showFullName();
	 // console.log(car);
	 //
	 // if (car.isNew) {
	 // 	alert('My new car is ' + car.model);
	 // } else {
	 // 	alert('My ' + car.model);
	 // }

	 // ----------------------------Тест для пользователя

// 	 var right = [],
// 	  questions = [{
// 	 	 text : 'Какой метод объединяет два массива и создает новый?',
// 			answers : ['a. join()',
// 				 'b. concat()',
// 				 'c. shift()',
// 				 'd. push()'
// 			], rightAnswer: {key : 'b', num : 2}
// 	 	},
// 			{
// 				 text:'Как получить количество элементов в массиве ages?',
// 				 answers:['a. count(ages)',
// 						'b. ages.count',
// 						'c. ages.count()',
// 						'd. ages.length',
// 						'e. ages.length()'
// 				 ], rightAnswer: {key : 'd', num : 4}
// 			},
// 			{
// 				 text:'Можно ли добавлять несколько значений в массив командой push(). напр scores.push( 77, 76, 89 );?',
// 				 answers:['a. Yes',
// 									'b. No'
// 				 ], rightAnswer: {key : 'a', num : 1}
// 			},
// 			{
// 				 text: "Как добавить число 23 в начало массива ages?",
// 				 answers: [
// 						"a. ages.pop(23)",
// 						"b. ages.unshift(23)",
// 						"c. ages.shift(23)",
// 						"d. ages.push(23)"
// 						],rightAnswer: {key : "b", num : 2}
//       }
// 	 ];
//
// 	 for(var i = 0; i<questions.length; i++){
//
// 	 	 var question = questions[i];
//
// 			var answer = prompt(question.text + '\n' + question.answers.join('\n'));
//
// 			if(answer){
// 				if(question.rightAnswer.key == answer.toLowerCase() ||
// 					 question.rightAnswer.num == answer){
// 					right.push(i);
// 				}
// 			}
// 	 }
// // 	alert('You got ' + count + ' question(s) right.');
//
// 	  document.getElementById('resultTitle')
// 		 .innerText = `You got ${right.length} question(s) right.`;
//
//
// 	 var ulRight = document.getElementById('right'),
// 		 ulWrong = document.getElementById('wrong'),
// 		 titleRight = document.getElementById('rightTitle'),
// 		 titleWrong = document.getElementById('wrongTitle');
//
// 	 titleRight.innerText = right.length ? 'Вы ответили правильно на:' : '';
// 	 titleWrong.innerText = right.length != question.length ? 'Вы ответили неправильно на:' : '';
//
// 	 for (var i = 0; i < questions.length; i++) {
// 			var question = questions[i];
//
// 			var newLi = document.createElement('li');
// 			newLi.innerText = question.text;
//
// 			if (right.indexOf(i) != -1) {
// 				 ulRight.appendChild(newLi).style.color = '#00ff00';
// 			} else {
// 				 ulWrong.appendChild(newLi).style.color = '#ff0000';
// 			}
// 	 }

// ДЗ div превращать в textarea при нажатии Ctrl+E и передавать в него текст

	 // var div = document.getElementById('change');
	 // var ta = document.createElement('textarea');
	 //
	 // document.onkeydown = function(e) {
	 //
	 // 	function divToTextArea() {
	 //
	 // 		 div.replaceWith(ta);
	 //
	 // 		 if (e.keyCode == 27) { // escape
	 // 				cancel();
	 // 				return false;
	 // 		 }
	 // 		 if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
	 // 				edit();
	 // 				return false;
	 // 		 }
	 // 		 if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
	 // 				save();
	 // 				return false;
	 // 		 }
	 // 	}
	 // };
	 // function edit() {
	 // 	div.style.display = 'none';
	 // 	ta.value = div.innerHTML;
	 // 	ta.style.display = 'block';
	 // 	ta.focus();
	 // }
	 //
	 // function save() {
	 // 	ta.style.display = 'none';
	 // 	div.innerHTML = ta.value;
	 // 	div.style.display = 'block';
	 // }
	 //
	 // function cancel() {
	 // 	ta.style.display = 'none';
	 // 	div.style.display = 'block';
	 // }

	 // function map() {
	 //
	 // function square(x) {
	 // 	 return x * x; // возведение в квадрат
	 // }
	 //
	 // console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
	 // console.log(map(square, [])); // []
	 // }
	 // map()
})();