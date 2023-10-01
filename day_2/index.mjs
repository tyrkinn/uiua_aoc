import { readFileSync } from 'fs'
const data = readFileSync('./input.txt')

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(size) {
    const clone = [...this]
    const chunks = []
    while(clone.length) {
      chunks.push(clone.splice(0, size))
    }
    return chunks;
  }
})

Object.defineProperty(Array.prototype, 'duplicate', {
  value: function() {
    return [[...this], [...this]];
  }
})


Object.defineProperty(Array.prototype, 'fork', {
  value: function(mapper1, mapper2) {
    if (this.length !== 2) return this
    const [f, s] = this;
    return [mapper1(f), mapper2(s)];
  }
})

const sumWith = valueMapper => list => list.reduce((acc, v) => acc + valueMapper(v), 0)

const lu = ['ABC', 'XYZ']

const mod = (n, p) => n - p * Math.floor(n / p);

const lines = data
  .toString()
  .replaceAll('\n', ' ')
  .split(' ')
  .map((c, i) => lu[i % 2].indexOf(c))
  .chunk(2)
  .duplicate()
  .fork(
    sumWith(([op, my]) => my + 1 + mod(my - op + 1, 3) * 3),
    sumWith(([op, my]) => my * 3 + mod(my + op - 1, 3) + 1),
  )

console.log(lines)

