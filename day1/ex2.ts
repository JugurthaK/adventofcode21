import { readFile } from 'fs';

readFile('./input', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let arr: Array<number> = data.split('\n').map((elm) => parseInt(elm, 10));
  let counter = 0;
  for (let index = 3; index < arr.length; index++) {
    const curr = [arr[index - 2], arr[index - 1], arr[index]].reduce(
      (previous, current) => previous + current
    );
    const prev = [arr[index - 3], arr[index - 2], arr[index - 1]].reduce(
      (previous, current) => previous + current
    );

    if (curr > prev) counter += 1;
  }

  console.log(counter);
});
