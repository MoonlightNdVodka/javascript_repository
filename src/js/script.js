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
