function ticTacToe(board) {
  if(board.length<9){
    return 'invalid board';
  }
  if (board[0] == x && board[1] == x && board[2] == x) {
    return 'x wins';
  }
  return 'nobody wins'
}
module.exports =ticTacToe;
