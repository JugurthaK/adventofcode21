import { readFile } from 'fs';
import Directive from './Directive';

readFile('./input', 'utf-8', (err, data) => {
  const directives: Array<Directive> = data.split('\n').map((elm) => {
    const [order, value] = elm.split(' ');
    return { order, value: parseInt(value) };
  });

  let x = 0;
  let y = 0;
  let aim = 0;
  directives.forEach((directive) => {
    switch (directive.order) {
      case 'forward':
        x += directive.value;
        y += directive.value * aim;
        break;
      case 'down':
        aim += directive.value;
        break;
      case 'up':
        aim -= directive.value;
        break;
      default:
        break;
    }
  });

  console.log(x * y);
});
