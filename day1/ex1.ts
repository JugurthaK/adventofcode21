import { readFile } from 'fs';

readFile('./input', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let arr: Array<number> = data.split('\n').map((elm) => parseInt(elm, 10));
  let counter = 0;
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    const prevElement = arr[index - 1];

    if (element > prevElement) counter += 1;
  }

  console.log(counter);
});
