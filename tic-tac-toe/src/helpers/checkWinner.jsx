export default function isWinner(board, symbol) {

    const ans = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let winner = '';

    ans.forEach((v) => {
        if (board[v[0]]== board[v[1]] && board[v[1]] == board[v[2]] && board[v[2]] == symbol)  winner=symbol;
        

    })
    return winner;


}