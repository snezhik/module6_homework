// Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function func1(a){
 // возвращаем функцию
  return function func2(b){
    return a + b;
  }
}

let res_func = func1(12);
let res = res_func(26);

console.log(res);
