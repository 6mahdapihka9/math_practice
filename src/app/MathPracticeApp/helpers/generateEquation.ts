import { Operations, operationsType } from '../types';
import isPrime from './isPrime';
import isMultiple from './isMultiple';

export default function generateEquation(cap: number, operators: operationsType) {
  const operator = operators[Math.floor(Math.random() * operators.length)]
      || Operations.Add;
  let a: number;
  let b: number;
  let c: number;

  switch (operator) {
    case Operations.Add:
      // a + b = c
      // a >= 1 && a <= cap - 1
      // b >= 1 && b <= cap - a
      // c >= 2 && c <= cap
      a = Math.floor(Math.random() * (cap - 1) + 1);
      b = Math.floor(Math.random() * (cap - a) + 1);
      c = a + b;
      break;
    case Operations.Subtract:
      // a - b = c
      // a >= 2 && a <= cap
      // b >= 1 && b <= a - 1
      // c >= 1 && c <= cap - b
      a = Math.floor(Math.random() * (cap - 2) + 2);
      b = Math.floor(Math.random() * (a - 1) + 1);
      c = a - b;
      break;
    case Operations.Multiply:
      // a * b = c
      // a >= 2 && a <= cap / 2
      // b >= 2 && b <= cap / a
      // c >= 4 && c <= cap
      a = Math.floor(Math.random() * (cap / 2 - 2) + 2);
      b = Math.floor(Math.random() * (cap / a - 2) + 2);
      c = a * b;
      break;
    case Operations.Divide:
      // a / b = c
      // a >= 4 && a <= cap && a !== prime
      // b >= 2 && b <= cap / 2 && a % b === 0
      // c >= 2 && c <= cap / b
      a = Math.floor(Math.random() * (cap - 4) + 4);
      while (isPrime(a)) {
        a = Math.floor(Math.random() * (cap - 4) + 4);
      }

      b = Math.floor(Math.random() * (cap / 2 - 2) + 2);
      while (!isMultiple(a, b)) {
        b = Math.floor(Math.random() * (cap / 2 - 2) + 2);
      }
      c = a / b;
      break;
    default:
      return {
        task: 'invalid data',
        result: -1,
      };
  }

  return {
    task: `${a} ${operator} ${b} = `,
    result: c,
  };
}
