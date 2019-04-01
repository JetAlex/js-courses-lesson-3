/*
####Задача 7

Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей
(чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```
*/

const getDivisors = function(n) {
  if (typeof n !== 'number') throw new Error('parameter type is not a Number');
  if (n === 0) throw new Error('parameter can\'t be a 0');

  let arr = [];
  for (let i = 1; i <= n; i++) {
    !(n % i) && arr.push(i);
  }

  return arr;
};

console.log(getDivisors(12));
console.log(getDivisors('Content'));
console.log(getDivisors(0));





