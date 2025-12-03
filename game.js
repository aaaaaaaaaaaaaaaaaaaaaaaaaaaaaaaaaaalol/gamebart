//Script start
      let board = [["c","c","c"],
                   [" "," "," "],
                   ["o","o","o"]];
      let sx = 0;
      let sy = 0;
      document.getElement
      document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    board[sx][sy].toUpperCase
  }
}
//Script End
