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