/*
####Задача 2


Напишите функцию `f` которая возвращает сумму всех параметров.
Количество параметров может быть любым. Данная функция должна обьязательно содержать проверку входных параметров,
потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number

*/


const f = function() {
  const args = arguments;
  const argsLength = args.length;

  for (let i = 0; i < argsLength; i++ ) {
    if (typeof args[i] !== 'number') throw new Error('Error: all parameters type should be a Number');
  }
  let sum = 0;
  for (let i = 0; i < argsLength; i++ ) {
    sum+=args[i];
  }
  return sum;
};

console.log(f(1,2,3));
console.log(f(1,1,1,1,1,1,1,1));
console.log(f(1,2,'s',4));
