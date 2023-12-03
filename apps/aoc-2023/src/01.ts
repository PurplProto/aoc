import { readFileSync } from 'fs';
import { resolve } from 'path';

const input = readFileSync(resolve(__dirname, './assets/01.txt'), 'utf8').split('\n');

const calibrationValues = input.map((value) => {
  const matches = value.match(/\d/g);
  return matches ? parseInt(`${matches[0]}${matches.at(-1)}`) : 0;
});

const calibrationSum = calibrationValues.reduce((acc, value) => acc + value, 0);

console.log(calibrationSum);
