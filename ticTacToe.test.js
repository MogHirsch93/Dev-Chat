const ticTacToe = require(./ticTacToe.js);

test('checks if no moves then no winner', () => {
  expect(ticTacToe(Array(9).fill(''))).toBe('nobody wins');
});
test('check if length of input is <9', () => {
  expect(ticTacToe(Array(8).fill(''))).toBe('invalid board');
})
test('check if first row is a win for x', () => {
  expect(ticTacToe(Array('x','x','x'))).toBe('player 1 wins')
}
