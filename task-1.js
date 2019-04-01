/*
####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обьязательно содержать проверку входного параметра,
потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```

*/

const f = function(n) {
  if (typeof n !== 'number') {
    throw new Error(`Error: parameter type is not a Number`);
  } else {
    return n*n*n;
  }
};

console.log(f(2));
console.log(f('Content'));



