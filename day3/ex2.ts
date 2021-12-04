import { readFile } from 'fs';

const mostCommonAtIndex = (arr: string[], index: number): number => {
  let res = 0;
  arr.forEach((number) => {
    let valueAtIndex = +number.split('')[index];
    res += +valueAtIndex;
  });

  return res >= arr.length / 2 ? 1 : 0;
};

readFile('./input', 'utf-8', (_, data) => {
  let arr: string[] = data.split('\n');

  let o2 = [...arr];
  let co2 = [...arr];

  for (let i = 0; i < 12; i++) {
    o2 = o2.filter((number) => {
      const mostCommon = mostCommonAtIndex([...o2], i);
      return +number.split('')[i] === mostCommon;
    });

    if (co2.length > 1) {
      co2 = co2.filter((number) => {
        const mostCommon = mostCommonAtIndex([...co2], i);
        return +number.split('')[i] !== mostCommon;
      });
    }
  }
  console.log(parseInt(o2.join(''), 2) * parseInt(co2.join(''), 2));
});
