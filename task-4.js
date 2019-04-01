/*
####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке.
Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

const f = function(n) {
  if (typeof n !== 'number') throw new Error('parameter type is not a Number');
  if (n < 1 || n > 7) throw new Error('parameter should be in the range of 1 to 7');

  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  return days[n-1];
};

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));
