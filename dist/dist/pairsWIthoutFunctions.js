"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by torcap on 25.08.2017.
 */
/*
 Пары неотрицательных чисел можно представить числами и арифметическими операциями.
 Можно считать, что пара чисел a и b – это 2^a * 3^b.
 Функции car и cdr при этом будут просто вычислять значения a и b
 (кратности двойки и тройки, соответственно), раскладывая аргумент на множители.
 Например, имея пару 5, 8 в виде числа 209952 (2^5 * 3^8), можно получить первый
 элемент пары, разложив число на множители и вычислив факторизацию для числа 2, а второй элемент пары – разложив число на множители и вычислив факторизацию для числа 3.
 pairs.js
 Реализуйте и экспортируйте следующие функции в соответствии с алгоритмом выше:
 cons
 car
 cdr
 Пример:
 const pair = cons(5, 8);	// 2^5 * 3^8 = 209952
 car(pair); // 5
 cdr(pair); // 8
 */
var cons = function cons(a, b) {
  return Math.pow(2, a) * Math.pow(3, b);
};
var getFact = function getFact(num, mult) {
  var counter = 0;
  function runCounting(a) {
    if (a % mult === 0) {
      counter++;
      runCounting(a / mult);
    }
  }
  runCounting(num);
  return counter;
};

var car = function car(pair) {
  return getFact(pair, 2);
};
var cdr = function cdr(pair) {
  return getFact(pair, 3);
};

exports.cons = cons;
exports.car = car;
exports.cdr = cdr;
//# sourceMappingURL=pairsWIthoutFunctions.js.map