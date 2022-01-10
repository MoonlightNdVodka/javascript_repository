//импорт из module.exports = myModule;
// const myModule = requre('../src/js/main.js');
// const myModuleInstatce = new myModule();

// myModuleInstatce.hello();
// myModuleInstatce.goodbye();


//импорт из ES6 для именнованного экспорта(где можно менять имя эксплртируемых переменных)
// import { one as first, two } from "./main";
import * as data from "./main";

// console.log(`${first} and ${two}`);
console.log(`${data.one} and ${data.two}`);
data.sayHi();

//неименнованный экспорт
import sayHiDef from "./main";
sayHiDef();


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

