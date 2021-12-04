import { readFile } from 'fs';

readFile('./input', 'utf-8', (_, data) => {
  let epsilon = new Array(12).fill(0);
  let gamma = new Array(12).fill(0);
  const arr: string[] = data.split('\n');
  arr.forEach((line, index) => {
    const values = line.split('').map((elm) => +elm);
    gamma = gamma.map((v, i) => {
      return v + values[i];
    });
  });

  gamma = gamma.map((v, index) => {
    if (v >= 500) {
      epsilon[index] = 0;
      return 1;
    }
    epsilon[index] = 1;
    return 0;
  });
  console.log(parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2));
});
