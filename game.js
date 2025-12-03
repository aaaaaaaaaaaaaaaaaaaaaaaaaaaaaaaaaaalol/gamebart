/Script start
let board = [["c","c","c"],
      	 	 [" "," "," "],
             ["o","o","o"]];
let sx = 0;
let sy = 0;
function setToBoard(){
	let st = "";
	for(let i = 0;i<board.length;i++){
		for(let j = 0;j<board[i].length;j++){
			st+=board[i][j];
		}
		st+="<br>"
	}
	return st;
}
document.getElementById("Board").innerHtml = setToBoard();
