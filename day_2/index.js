const { readFileSync } = require('fs')
const data = readFileSync('./input.txt')

const lu = ['ABC', 'XYZ']
const lines = data
  .toString()
  .trim()
  .split('\n')
  .map(
    l => l
      .split(' ')
      .map((c, i) => lu[i].indexOf(c)))

const mod = (n, p) => n - p * Math.floor(n / p);

const part1 = lines.reduce(
  (acc, [o, m]) =>
    acc + m + 1 + mod(m - o + 1, 3) * 3,
  0
)

const part2 = lines.reduce(
  (acc, [o, m]) => 
    acc + m * 3 + mod(m + o - 1, 3) + 1,
   0
)


console.log(part1)
console.log(part2)

