// "use strict"; //режим современного "строгого" кода
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     geners: [],
//     privat: false,

//     rememberMyFilms: function  () {
//         for(let i = 0; i < 2; i++){

//             const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt("На сколько оцените его", "");

//             if (a != null && b != null && a != "" && b != "" && a.length < 30 ) {
//             personalMovieDB.movies[a] = b;  
//             } else {
//                 i--;
//             }
//         }
//     },

//     start: function () {
//         personalMovieDB.count = +prompt("Сколько фильмов уже посмотрели?", "");
//         while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt("Сколько фильмов уже посмотрели?", "");

//         }
//     },

//     detectPersonalLevel: function () {
//         if (personalMovieDB.numberOfFilms < 10) {
//             alert ("Просмотрено довольно мало фильмов");
//            } else if (personalMovieDB.numberOfFilms >=10 && personalMovieDB.numberOfFilms <= 30) {
//                alert ("Вы классический зритель");
//            } else if (personalMovieDB.numberOfFilms > 30) {
//                alert ("Вы киноман");
//            } else {
//                alert ("Произошла ошибка");
//            }
//     },
//     showMyDB: function  (hidden){
//         if (!hidden ){
//             console.log (personalMovieDB);
//         }
//     },

//     writeYourGenres: function  () {
//         for(let i = 1; i <= 3; i++){
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`,"");
//             if(genre == "" || genre == null) {
//                 i--;
//                 continue;
//             } else {personalMovieDB.geners[i - 1 ] = genre;}
//         }
//         personalMovieDB.geners.forEach((item, i )=> {
//             console.log(`Любимый жанр №${i+1} - это ${item}`);
//         });

//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     } 

// };


// //FUNCTION DECLARATION 
// // //функции созданные таким образом существуют еще до того, как код начнет свое дейсвтие,
// // т.к скрипт первым делом подгрузит все функции и var-ы, а потом начнет свою работу
// // мы можем вызывать такие функции еще до того, как они будут обьявлены в коде 
// getUser();

//  function getUser() {
//     let gleb = 'User_Gleb';
//   console.log(gleb);
// }
// // FUNCTION EXPRESSION
// // функции, обьявленные таким образом, могут быть вызваны только после их обьявления
// // myFunc();
// const myFunc = function getUser() {
//   let mark = 'User_Mark';
// console.log(mark);
// };
// myFunc();
// //СТРЕЛОЧНЫЕ ФУНКЦИИ
// // такие функции не имеют своего контекста вызова
// const calc = (a, b) =>  a + b;
//  console.log(calc(1,5));



// // CALLBACK функции, при их обьявлении, 
// // выполняются строго после определенных действий, 

// function learnJS(lang, callback) {
//     console.log(`I'm learn: ${lang} `);
//  //тут мы вызываем колбэк функцию, которая будет передана аргументом при вызове функции выше
//     callback();

// }
// function done() {
//     console.log('I complete this lesson!');
// }

// //здесь мы при вызове функции "learnJS" передаем аргументом функции другую функцию "done",
// //  которая передается в аргумент и становится callback-функцией
// learnJS('JavaScript', done);

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1125,
//    colors: {
//        border: 'black',
//        bg: 'red'
//    },
//     makeTest: function (){
//         console.log("Эта функция работает внутри обьекта");
//    }
// };

// options.makeTest();

// //ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТА 
// const {border, bg} = options.colors; 
// console.log(border);


// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);

//     }
// }

// //Позволяет собирать значения ключей объекта в отдельный массив 
// console.log(Object.keys(options));


// const arr = [ 2, 4, 5, 7, 10];

// arr.forEach(function(arrValue, arrIndex, arrLink) {
//     console.log(`Индекс элемента: ${arrIndex}; Значение элемента:${arrValue} внутри массива: ${arrLink}`);
// });


// // ПЕРЕДАЧА ПО ССЫЛКЕ, ГЛУБОКОЕ  И ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ ОБЪЕКТОВ

// function copy(mainObj) {
//     //эта функция реализует поверхностное копирование обьекта,
//     //если в копируемом обьекте будет свойство массив или обьект,
//     //то это свойство не скоприруется,  
//     //а создастся ссылка на это свойство в исходном обьекте
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// //при изменении вложенного массива или обьекта в новом скопированном обьекте, 
// // мы изменяем его везде, т.е и в исходном обьекте тоже,
// //  т.к изменение происходит по ссылке

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     b: 31,
//     h: 4
// };

// //создаст поверхностную копию обьектов "NUMBERS, ADD", И запишет их в "Clone"
// const clone = Object.assign({numbers}, add);
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];
// //slice - позволит создать новую поверхностную копию массива
// const newArray = oldArray.slice();

// newArray[1] = 'Aboba';

// console.log(newArray);
// console.log(oldArray); 


// // SPREAD оператор: "..." вытаскивает элементы из массивов или обьектов 
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//       console.log(internet);

// //Раскрытие обьекта и вставка в функцию через SPREAD 
// function logs(a, b, c) {
// console.log(a);
// console.log(b);
// console.log(c);
// }

// const numb = [1, 5, 8];
// logs(...numb);

// //копирование массивов через SPREAD
// const arr1 = [1, 5, 7];
// const arr2 = [...arr1];
// console.log(arr2);

// //копирование обьектов через SPREAD
// const obj1 = {
//     one: 4,
//     two: 52,
//     three: 17
// };
// const obj2 = {...obj1};
// console.log(obj2);

// // ООП, можно сказать что JS это прототипно-ориентированный язык.
// //В нем обьекты наследуют свойства от прототипов
// const solder = {
//     health: 400,
//     armor: 100,
//     sayHi: function() {
//         console.log("HELLO SIR!");
//     }
// };

// //мы создали обьект Джон, он пока не наследует ничего
// const john = {
//     health: 100
// };
// console.log(john);

// // Тут можно увилить как Джон наследует свойство брони от обьекта Солдат
// Object.setPrototypeOf(john, solder);
// console.log(john.armor);

// //Тут мы сразу создаем обьект Майк который наследует прототип Соладат
// const mike = Object.create(solder);
// mike.sayHi();



// // Какое будет выведено значение: let x = 5; alert( x++ ); ?   
// //   ОТВЕТ: 5 выведет, а потом увеличит до 6    

// // // Чему равно такое выражение: [ ] + false - null + true ?    
// // ОТВЕТ:[] пустой массив конвертируется в пустую строку: "", 
// // Затем строка складывается с false 
// // и получается строка "false", при сложении Этого с null и true ПОЛУЧАЕМ:  NaN  

// // // Что выведет этот код: let y = 1; let x = y = 2; alert(x); 
// //  ОТВЕТ:  2, послед-е присваивание с права на лево                                  

// // // Чему равна сумма [ ] + 1 + 2?                              
// // ОТВЕТ: 12,  пустая строка + "1" + "2"

// // // Что выведет этот код: alert( "41"[0] )?
// //  ОТВЕТ:  4 - выводит элемент строки с 0 индексом - а это и есть 4,               

// // // Чему равно 2 && 1 && null && 0 && undefined ?              
// // ОТВЕТ:  null, ПОТОМУ ЧТО ОПЕРАТОР "&&"" запинается на лжи,
// //  как только он встречает null проверка дальше прекращается, С ОПЕРАТОРОМ "||" ИНАЧЕ
// // ОН ОСТАНОВИТСЯ ПРИ ПЕРВОМ ЖЕ ИСТИННОМ ЗНАЧЕНИИ                  

// // // Есть ли разница между выражениями? !!( a && b ) и (a && b) 
// // ОТВЕТ: есть, в 1 случае это будет булиновое значение из-за "!!"                             

// // // Что выведет этот код: alert( null || 2 && 3 || 4 ); ?      
// // ОТВЕТ:  3, по приоритету первым проверится оператор "И", дальше слева на право пойдут 
// // операторы "ИЛИ",                          

// // // a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?       
// // ОТВЕТ: нет, хоть и значения в массивах равны, сами массивы - это разные хранилища информации
// // и они по определению не могут быть одинаковы, т.к мы не сравниваем именно их содержание                          

// // // Что выведет этот код: alert( +"Infinity" ); ?              
// // ОТВЕТ:    Infinity с типом данных number                

// // // Верно ли сравнение: "Ёжик" > "яблоко"?                     
// // ОТВЕТ: нет, false - нужно смотреть юникод            

// // // Чему равно 0 || "" || 2 || undefined || true || falsе ?    
// // ОТВЕТ: 2, 0 в лог-м контексте это falsе. "" тоже falsе, 2 - true, оператор или остановится на 2                        


//ВСЕ ЭТИ ОБЬЕКТЫ ЭТО ПСЕВДО-ЭЛЕМЕНТЫ, ДЛЯ НИХ НЕТ МЕТОДОВ
// //получает элемент по его ID
// const box = document.getElementById('box');
// console.log(box);

// //получает ВСЕ элементы по их тэгу, записывая как коллекцию обьектов
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);

// //получает ВСЕ элементы по имени их класса, записывая как коллекцию обьектов
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// //получает ВСЕ элементы по их названию из всей коллекции обьектов записывая их в массив
// //для этого метода доступен перебор через forEach
// const hearts = document.querySelectorAll('.heart');
// hearts.forEach(key=> {
//     console.log(key);    
// });

// //получает первый найденный элемент по его названию
// const myHeart = document.querySelector('button');
// console.log(myHeart);

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName ('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),

//       //если у нас уже есть родитель "wrapper", то мы можем заменить
//     // обращение с document на wrapper
//       hearts = wrapper.querySelectorAll('.heart'),
//       onrHeart = wrapper.querySelector('.heart');

//       box.style.backgroundColor = 'green';
//       box.style.width = '300px';

//       box.style.cssText = 'background-color: brown; width: 370px';

//       btns[1].style.borderRadius = '10 0%';
//       //т.к это псевдо-массивы, обращаться нужно только к конкретному айди, 
//       //обращение ко всему массиву сразу не сработает
//       circles[0].style.backgroundColor = "yellow";

//     hearts.forEach(item => {
//         item.style.backgroundColor = 'blue';
//     });

//     //СОЗДАЕТ элемент, но только внутри js, извне js его не изменить
// const div = document.createElement('div');
// div.classList.add('black');
// //СОЗДАЕТ новый блок в начале класса  wrapper
// wrapper.append(div);
// //СОЗДАЕТ блок в конце класса wrapper
// // wrapper.prepend(div);
// // СОЗДАЕТ блок (до/после) конкретного эл.
// // hearts[2].before(div);
// //УДАЛЯЕТ определенный элемент в верстке
// // circles[0].remove();
// //ЗАМЕНЯЕТ элементы из одного блока, другим 
// hearts[0].replaceWith(circles[0]);
// //позволяет вставлять как обычный текст в блок, так и 
// // html элементы внутрь блока 
// div.innerHTML = "<h1>Hello:)</h1>";
// //помещает внутрь блока текст
// // div.textContent = 'Hello!';
// //позволяет вставить кусок html кода до/после элемента вначале или в конце
// div.insertAdjacentHTML("beforebegin", '<h2>Hey!</h2>');


// ОБРАБОТЧИКИ СОБЫТИЙ 
// const btns = document.querySelectorAll('button');
// const overlay = document.querySelector('.overlay');

// // btn.onclick = function() {
// //     alert('Click');
// // };//не совсем верный способ реализации, удалить его нельзя
// // при повторении кода действие перезапишется  \\

// btns.addEventListener('click', () => {
//   // alert('Clic1k');
// });
// // btn.addEventListener('mouseenter', () => {
// //   alert ('Clic2k');
// // });
// // event - обьекты события 
// //ВАЖНО!! event-ы передаются как аргументы в callback функцию

// //
// let i = 0;
// const deleteElement = (element) => {
//   console.log(element.currentTarget);
//   console.log(element.type);

//   // i++;
	
//   // if(i==1){
//   // // удаление эвента
//   // btn.removeEventListener('click', deleteElement);
//   // }
//   // element.target.remove();
// };

// //Всплытие событий - это когда обработчик событий идет
// // от активного элемента выше по DOM-дереву

// //Удаление обработчика с элемента по клику
// // btn.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement);

//  btns.forEach(btn =>  {
//    //Самый правильный спопоб вешать одинаковые обработчики событий на несколько 
//    //одинаковых элементов сразу. Т.к у querySelectorAll получаемые элементы это ПСЕВДОМАССИВ,
// его мы можем использовать только перебирая каждый элемент через forEach
//      btn.addEventListener('click', deleteElement);
//  });

// const link = document.querySelector('a');
// console.log(link);

// link.addEventListener('click', function(event) {

//   //метод "preventDefault" отменяет стандартное поведение элемента на странице, 
//   // и применяет к нему поведение, которое указано будет ниже
//     event.preventDefault();

//     console.log(event.target);
// });


//НАВИГАЦИЯ ПО DOM дереву

// console.log(document.head);
// console.log(document.documentElement);

// функция childNodes позволяет получить все элементы(ноды), которые находятся внутри родителя
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

//parentNode выведет родительский элемент, в котором querySelector нашел обьект
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentNode.parentElement);


//  DATA-АТРИБУТЫ

// что бы получить какой-либо атрибут html, мы ставим "[ ]"
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);


//У каждой ноды есть свое nodeName, если в этом условии нода будет с именем текста, мы пропустим ее показ
// for (let node of document.body.childNodes) {

//   if (node.nodeName == '#text') {
//     continue;
//   }
//   if (node.nodeName == '#comment') {
//     continue;
//   }
//   console.log(node);
// }

//СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ

 //touchstart
 //touchmove
 //touchend
 //touchenter - как только палец зашел на пределы этого элемента 
 //touchleave - как только палец ушел с пределов этого элемента
 //touchcancel  - точка соприкосновения больше не регистрируется на окне браузера

// window.addEventListener('DOMContentLoaded', () => {
// 	const box = document.querySelector('.box');

// 	box.addEventListener('touchstart', (e) => {
// 		e.preventDefault();
// 		console.log('Start');
// 		console.log(e.targetTouches);
// 	});

// 	box.addEventListener('touchmove', (e) => {
// 		e.preventDefault();
// 		console.log(e.targetTouches[0].pageX);
// 	});

// 	box.addEventListener('touchend', (e) => {
// 		e.preventDefault();
// 		console.log('End');
// 	});

// 	//Hammer.js - скрипт для добавления моб-го функционала

// 	//touches - кол-во пальцев на экране
// 	//targetTouches
// 	//changedTouches - содержит список пальцев, котопый был убран
// });


// АССИНХРОННОСТЬ

///* <script defer src="./js/script.js"></script> */
// defer - говорит компилятору загружать скрипт в фоне, вместе с версткой не ожидая дозагрузки страницы
// - такие скрипты будут всегда дожидаться полной дозагрузки ДОМ дерева html что бы начать выполнение

///* <script async src="./js/script.js"></script> */
// async - загужается так же в фоне, не ожидая дозагрузки, но начнет выполнятся как только загрузится сам,
//не дожидаясь полной прогрузки ДОМ дерева

// const p = document.querySelectorAll('div');
// console.log(p); 

// function loadScript(src) {
// 	const script = document.createElement('script');
// 	script.src = src;

// 	//за счет отключенной ассинхронности, они будут выполняться друг за другом
// 	script.async = false;
// 	document.body.append(script);
// }

// loadScript("js/test.js");
// loadScript("js/some.js");


//CLASS LIST и ДЕЛЕГИРОВАНИЕ СОБЫТИЙ 

// const btns = document.querySelectorAll('button');
// const wrapper = document.querySelector ('.btn-block');

// console.log(btns[0].classList);

// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(0));
// // console.log(btns[1].classList.add('red', 'green'));
// // console.log(btns[0].classList.remove('blue'));

// // переключает классы, если класс такой есть - удаляет его с ээлемента
// // если такой класс отсутствует в элементе - добавляет 
// // console.log(btns[0].classList.toggle('blue'));
// // console.log(btns[0].classList.item(0));

// // if (btns[1].classList.contains('red')) {
// //     console.log ('red!!');
// // }ф

// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }

//     //делает то же самое
//     btns[1].classList.toggle('red');
// });

// //выводит имена всех классов элемента в одну строчку
// console.log(btns[0].className);

// // делегирование - разграничение действий на определенных элементах 
// // в зависимости от необходимого функционала 
// // console.dir(wrapper);
// wrapper.addEventListener('click', (event) => {

//     //тут мы вешаем обработчкик на новые кнопки с классом red
//     //которые мы создаем ниже
//     if (event.target && event.target.matches("button.red")) {
//         console.log('Hello');
//     }
//     // if (event.target && event.target.tagName == "BUTTON") {
//     //     console.log('Hello');
//     // }
//     // if (event.target && event.target.classList.contains('some')) {
//     //     console.log('Hello BLUE');
//     // }
//     // if (event.target && event.target.tagName == "DIV") {
//     //     console.log('Hello DIV!!');
//     // }
// });
// // Тут делегирование не работает - новые элементы не будут получать
// //этот же класс который вешается для всех остальных кнопок.
// // btns.forEach(btn => {
// //     btn.addEventListener('click', () => {
// //         console.log('Hello');
// //     });
// // });
// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);


// Временные скрипты 
//  Этот скрипт вставляет в верстку таймер с обратным отсчетом
	//Timer

//     const deadline = '2021-12-19';

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date()),
//         //находит целое кол-во дней для таймера, остаток неполного дня отбрасывает
//               days = Math.floor(t / (1000 * 60 * 60 * 24)),
//               //находит кол-во часов для таймера, остаток в виде целых дней и секунд отбрасывает
//               hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//               //остаток только минут
//               minutes = Math.floor((t / 1000 / 60) % 60),
//               seconds = Math.floor((t / 1000) % 60);

//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//               days = timer.querySelector('#days'),
//               hours = timer.querySelector('#hours'),
//               minutes = timer.querySelector('#minutes'),
//               seconds = timer.querySelector('#seconds'),
//               timeInterval = setInterval(updateClock, 1000);

//         updateClock();

//         function updateClock() {
//             const t = getTimeRemaining(endtime);

//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }

//     setClock ('.timer', deadline)
// });


//Функции-конструкторы
//Нужны для создания различных по св-вам но одинаковым по шлаблону обьектов
// function User(name, id) {           
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     };
   
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел` );
// };

// let ivan = new User('Ivan', 28);    // 4)
// let alex = new User ('Alex', 20);

// ivan.exit();
// ivan.hello();
// alex.hello();


//Контекст вызова This

// 'use st rict'
// function showThis(a, b) {    //1)
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);


// const obj = {   //2)
//     a: 20,
//     b: 15,
//     sum: function() {
//         //!!! функция ,которая запускается внутри метода, теряет контекст вызова
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }
// // .bind создает новую функцию на основании сущ-ей функции 
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
//  Если мы исползуем метод внутри обьекта,
//  то контекст вызова всегда будет сслыаться на этот обьект
// 3) this в конструкторах и классах - новый экземпляр обьекта
//  Внутри функций-конструкторов контекстом вызова для всех методов 
//  и св-в будет только что созданный новый обьект
// 4) Ручная привзяка this:  call, apply, bind

// const btn = document.querySelectorAll('button');

// btn.forEach(item => {
//     //в случае ображения к обьекту через коллбэк функцию обычного
//     // формата( не стрелочную!!! =>), контекстом вызова будет являться 
//     // изначальный обьект, у стрелочной функции нет констекста вызова, 
//     // она будет брать его у родительского элемента
//     item.addEventListener('click', function() {
//         console.log(this);
//         this.style.backgroundColor = 'red';
//     });
//     //ИЛИ
//     // item.addEventListener('click',(e) => {
//     //     e.target.style.backgroundColor = 'red';
//     // });
// }); 


// const obj = {
//     num: 5, 
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };
//         say();
//     }
// };
// obj.sayNumber();


//КЛАССЫ ES6
 
// class Rectangle {
//     //конструктор вызывается как только создается обьект класса 
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
// //Метод super НАСЛЕДУЕТ указанный функционал от того класса, который мы наследуем
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangWithText(25, 10, "Hello World", 'red');

// div.showMyProps();
// console.log(div.calcArea());



// // REST operator ES6 - отдельные элементы обьединяет в один массив

// const log = function (a, b ,...rest){
//     //...rest - собирает отдельные сущности в массив
//     console.log(a, b, rest);
// }
// log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(3);


//JSON формат передачи данных

// const persone = {
//     name: 'Alex',
//     tel : '+7413332321',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };
// //JSON.stringify преобразует данные в нужный  для браузера формат
// //JSON.parse - разбирает формат JSON в нормальный код

// //с помощью конструкции JSON.parse(JSON.stringify()) можно делать глубокое клонирование
// // обьектов в js. Где будут копироваться и вложенные обьекты 
// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';
// console.log(persone);
// console.log(clone);


// //XMLHttpRequest
// const inputRub = document.querySelector('#rub');
// const inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();
//     //МЕТОДЫ ОБЬЕКТА XMLHttpRequest
//     // этот метод собирает настройки которые помогут сделать запрос
//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();//body

//     //readystatechange - отслеживает статус нашего запросса (readySstate) в текущий момент
	
//     request.addEventListener('load', () => {
//         //если у нас статус 4(Done) и статус ответа 200 
//         if (request.status === 200) {
//             // console.log(request.response);
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'Error';
//         }
//     });
//     // status: ответы в кодах от сервера
//     // statusText
//     // response - ответ от сервера 
//     // responceText
//     // readySstate - содержит текущее состояние запроса (0-4)
// });


//PROMISE в JS
//может выполнять последовательность действий, если произошли определенные условия

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {

// 	setTimeout(() => {
// 		console.log('Подготовка данных...');

// 		const product = {
// 			name: 'TV',
// 			price: 2000
// 		};
//  	 //эта функция запустится только если код вверху корректно отработал 		
// 		resolve(product);
// 	}, 2000);
// });
// //then отработает в случае удачного выполнения промиса
// req.then((product) => {
// 	const req2 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			resolve(product);
// 			// reject();
// 		}, 2000);
// 	});	
// 	// при выполнении кода вызывается resolve, который обьявляется дальше в - then
// 	// при не выполнении кода(ошибке) вызывается reject, который обьявляется дальше в - catch
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then(data => {
// 	console.log(data);
// 	// .catch(() => {})
// }).catch(() => {
// 	console.error('Произошла ошибка');
// 	// .finally(() => {}); - выполняется всегда, вне зависимости от исхода кода
// }).finally(() => {
// 	console.log('Finally');
// });
// //этот setTimeout запустится только если код вверху корректно отработал 

// const test = time => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(), time);
// 	});
// };

// // Promise.all - отрабатывает только когда все промисы до этого отработали, 
// // если все корректно прошли - отработает .then(), если нет - .catch() 
// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });

// // Promise.race - отрабатывает  когда самый первый промис отработал.
// Promise.race([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });


// МЕТОДЫ ПЕРЕБОРА МАССИВОВ

//forEach -  перебирает массив, но не возвращает новый массив

//filter - возвращает новый массив отфильтрованный по функции
// const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

// const shortNames = names.filter(function(name){
// 	return name.length < 5;
// });

// console.log (shortNames);

// //map - позволяет взять исходный массив и изменить каждый элемент внутри него.
// // Мы получим новый массив с измененными данными
// const answers = ['IvAn', 'AnnA', 'HellO'];
// const result = answers.map(item => item.toLowerCase());
// // let answers1 = ['IvAn', 'AnnA', 'HellO'];
// // answers1 = answers1.map(item => item.toLowerCase());
// console.log (answers);
// console.log (result);

// //every - перебирает массив, если все элементы подходят по 
// // условию колбэк функции, возращает - true, если же нет - false

// //some - перебирает массив, если ходя бы один элемент подходит по 
// // условию колбэк функции, возращает - true, если же нет - false
// const someThing = [4, 'qwq', 'stersdf4'];
// console.log(someThing.some(item => typeof(item) === 'number'));

// console.log(someThing.every(item => typeof(item) === 'number'));

// // reduce - схопывает массив в одно единое целое (метод перебора каждого элемента)
// const nubmers = [4, 5, 1, 3, 2, 6];
// // 			 0 + 4
// // 				 4 +5
// // 					5 +1
// //если поставить после запятой элемент - он будет начальным при сложении
// const res = nubmers.reduce((sum, current) => sum + current, 3);
// console.log(res);
// // text fields
// const fruits = ['apple', 'cherry', 'strawberry'];
// const fruitBag = fruits.reduce((sum, current) => `${sum}, ${current}`);
// console.log(fruitBag);


// //нужно вытащить имена людей отсюда
// const obj = {
// 	ivan: 'persone',
// 	ann: 'persone',
// 	dog: 'animal',
// 	cat: 'animal'
// };

// //делает из обьекта матрицу, содержащую массивы
// const newArr = Object.entries(obj)
// //фильтрует и созает новый массив подходящих массивов по ключу "persone" 
// .filter(item => item[1] === 'persone')
// //выводит первые элементы (имена) из уже вновь созданного массива.
// .map(item => item[0]);

// console.log(newArr);


// LOCAL STORAGE - это обьект, который встроен в браузеры. 
//  И он может хранить различеные данные. 
// Обьект существуют в рамках однго домена
// и может хранить ограниченное кол-во данных(до 5 мб.) 
//данные не сбрасываются при перезагрузке

// window.localStorage
// console.log('working...');

// localStorage.setItem('number', 5);

// // localStorage.removeItem('number');
// // localStorage.clear();
// console.log(localStorage.getItem('number'));

// const checkbox = document.querySelector('#checkbox'),
// 	  form = document.querySelector('form'),
// 	  change = document.querySelector('#color');

// if (localStorage.getItem('isChecked')) {
// 	checkbox.checked = true;
// 	// localStorage.removeItem('isChecked');
// }
// if (localStorage.getItem('bg') === 'changed') {
// 	form.style.backgroundColor = 'red';
// }

// checkbox.addEventListener('change', () => {
// 	localStorage.setItem('isChecked', true);
// });


// change.addEventListener('click', () => {
// 	if (localStorage.getItem('bg') === 'changed') {
// 		localStorage.removeItem('bg');
// 		form.style.backgroundColor = 'white';
// 	} else {
// 		localStorage.setItem('bg', 'changed');
// 		form.style.backgroundColor = 'red';
// 	}
// });

// const persone = {
// 	name: 'Alex',
// 	age: 25
// };

// const serializedPersone = JSON.stringify(persone);
// localStorage.setItem('alex', serializedPersone);

// console.log(JSON.parse(localStorage.getItem('alex')));

// REGULAR EXPRESSIONS - РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
// const ans = prompt('Enter your name');

// const reg = /\d/;
// console.log(ans.match(reg));


// const str = 'My name is R2D2';

// console.log(str.match(/\W/i));
//Классические флаги регулярных выражений:
// i - если мы хотим найти что-то вне зависимости от регистра
// g - когда  мы хотим попробовать найти сразу несколько вхождений
// m - включает многострочный режим

// КЛАССЫ В РЕГУЛЯРНЫХ ВЫРАЖЕНИЯХ
	// \d - мы ищем только цифры
	// \w - мы ищем все слова
	// \s - мы ищем только пробелы

// ОБРАТНЫЕ КЛАССЫ 
	// \D - найти все не числа
	// \W - найти все не буквы

// МЕТОДЫ РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ
// метод: test относится непосредственно к регуляркам,
//  и работает только с ними. Выдает true или false
// метод: search ищет первое вхождение в строке и возвращает логический ответ
// метод: match ищет первое вхождение в строке и возвращает массив

// такая запись значит - "/./" что мы забираем все символы из строки
// это значит /\./ - мы экранируем символы с помощью "\"  

// console.log(ans.search(reg));
// const pass = prompt('Password');
// console.log(pass.replace(/./g,  "*"));
// console.log("12-34-56".replace(/-/g,  ":")); 


// ГЕТТЕРЫ и СЕТТЕРЫ(свойства обьектов)

// const persone = {
// 	name: "Alex",
// 	age: 24,

// 	// get позволяет получить значение свойсвта этого обьекта
// 	get userAge() {
// 		return this.age;
// 	},
// 	// set позволяет получить изменить свойсвто этого обьекта
// 	set userAge(num) {
// 		this.age = num;
// 	}
// };

// console.log(persone.userAge);
// console.log(persone.userAge = 33);


// ИНКАПСУЛЯЦИЯ

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		//ниже мы создаем свойство обьекта, которое нельзя изменить извне
// 		this._age = age;
// 	}

// 	#surname = 'PEPE';

// 	get surName() {
// 		return this.#surname;
// 	}
// 	set surnameSet(surname) {
// 		this.#surname = surname;
// 	}

// 	say() {
// 		console.log(`This user name: ${this.name} ${this.#surname}, age: ${this._age}`);
// 	}
// 	//c помощью геттеров и сеттеров мы закрыли доступ к изменению извне
// 	get age() {
// 		return this._age;
// 	}

// 	set age (age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			this._age = age;
// 		} else {
// 			console.log('Недопустимое значение');
// 		}
// 	}
// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.surName); 
// ivan.surnameSet ='POPO';
// console.log(ivan.surName); 

// ivan.say();


// Прием "МОДУЛЬ"

// const number = 1;

// //function declaration - для обьявления функции необходимо имя
// // function ( ) {};

// //анонимная самовызывающаяся функция:

// (function() { // - function expression

// 	// это позволяет уменьшить количество глобальных переменных, что улучшает кач-во кода 
// 	const number = 2;
// 	console.log (number);
// 	console.log (number + 3 );
// }());

// console.log(number);

// const user = (function(){ 
// 	//мы создаем анонимную самовызывающуюся ф-ию, которая забирает методы и свойства,
// 	// которые мы укажем, и которые нам нужны
// 	const privat = function() {
// 		console.log('I am privat!');
// 	};
// 	return {
// 	//здесь мы констркируем новый обьект, в который передаем ссылку на приватную ф-ию
// 		sayHello: privat	
// 	};
// }());

// user.sayHello();


//GULP - планировщик задач, 
// мы можем создавать различные таски, выполняемые в оп. обстоятельствах

//WEBPACK - сборщик модулей, может запускаться с помощью GULP 

// function myModule() {
// 	this.hello = function() {
// 		console.log('hello');
// 	};

// 	this.goodbye = function() {
// 		console.log('bye!');
// 	};
// }

//CommonJs =- так экспортируются файлы
// module.exports = myModule;

//ES6 - так экспортируются файлы

//именованный экспорт
export let one = 1;

let two = 2;

export{two};

export function sayHi(){
	console.log('Hello');
}

//Экспорт по умолчанию должен быть только один
export default function sayHiDef() {
	console.log('Hello Default');
}

// можно в индексе подключать модулями файлы js, но нужно настраивать экспорты и полностью прописывать пути.
// <script type='module' src="./dist/js/bundle.js"></script>


// ОБРАБОТКА ОШИБОК

try {
    console.log('Normal');
    console.log(a); //намеренная ошибка
    console.log('result');
} catch (error) {
    //error  отработает вслучае ошибки выше и ее можно будет разобрать
    //на составляющие
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    //выполнится при любом исходе
}

//после try код продолжит выполнение, когда в обычном случае
//ошибка вызовет остановку кода
console.log('Still work');

//Babel - трансформирует новый код для старых браузеров  
//Polyfil - определенные участки кода, которые эмулируют поведение современного кода  
//coreJS - стандартная библ для ДЖСа,
//  которая содержит максимально полный набор полифилов
// corejs: 3,
//функция ниже помогает выбирать полифилы только те, которые исп-ся в коде
//useBuiltIns: "usage"


// ANGULAR что бы знать:
// -node.js//install
//-TypeScript - understand & knowlege
//-Webpack - knowlege
//-MVC-pattern
//-Angular

// REACT что бы знать:
// -node.js//install
// JSX preprocessor
// Babel
// Webpack
// React

// Vue.js что бы знать:
// -node.js//install
// Webpack
// Vue



//работа с jQuery
// работа с библиотекой при разработке проекта с нуля не обязательна, большинство функций уже реализовано в нативном JS
// при поддержке старых проектов знание библиотеки может понадобиться
// основная навигация и документация по библиотеке здесь:
// https://page2page.lohmach.info/index.php5/Заглавная_страница.html


// Функции генераторы function*
// Генераторы являются функциями с возможностью выхода и последующего входа. 
// Их контекст исполнения (значения переменных) сохраняется при последующих входах.
function* generator() {
	yield 'S';
	yield 'C';
	yield 'P';
}

const str = generator();
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);

function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}
//генератор можно запустить передав нужный итератор
const counter = count(4);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);


//функцию генератор можно перебрать
//  через цикл что бы не вызывать постояно консоль лог
for (let k of count(7)) {
	console.log(k);
}

// ГОТОВЫЕ РЕШЕНИЯ ДЛЯ КОДА

// желательно использовать плагины, которые не использую какх то зависимостей, типо jquery и тд.
//популярные слайдеры: OwlCarousel, Slick(jquery), tiny-slider, galleria, fotorama, glide 
// https://nisnom.com/category/veb-razrabotki/