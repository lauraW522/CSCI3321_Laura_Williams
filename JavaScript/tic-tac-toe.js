var turn = "End";
 
function clicked_square(my_panel, my_square) {
  if (document.getElementById(my_panel).className == "flip-panel") {
     if (turn == "X") {
        document.getElementById("play-button").style.display = "none";
        document.getElementById(my_square).style.display = "inline";
        document.getElementById(my_panel).className = "flipped-panel";
        for (var i = 1; i < 10; i++) {
            if (document.getElementById("panel" + i).className == "flip-panel") {
               document.getElementById("square" + i).innerHTML = "O";
               document.getElementById("square-back" + i).innerHTML = "O";
            }
        }
        turn = "O";
        document.getElementById("instructions").innerHTML = "Player " + turn + "'s turn."
        check_win();
     }
     else if (turn == "O") {
        document.getElementById("play-button").style.display = "none";
        document.getElementById(my_square).style.display = "inline";
        document.getElementById(my_panel).className = "flipped-panel";
        for (var i = 1; i < 10; i++) {
            if (document.getElementById("panel" + i).className == "flip-panel") {
	       document.getElementById("square" + i).innerHTML = "X";
               document.getElementById("square-back" + i).innerHTML = "X";  
            }
        }
        turn = "X";
        document.getElementById("instructions").innerHTML = "Player " + turn + "'s turn."
        check_win()
     }
    else if (turn == "End") 
        document.getElementById("instructions").innerHTML = "Click the button to play."
  }
 }
function check_win() {
  const a1 = document.getElementById("square-back1").innerHTML;
  const a2 = document.getElementById("square-back2").innerHTML;
  const a3 = document.getElementById("square-back3").innerHTML;
  const b1 = document.getElementById("square-back4").innerHTML;
  const b2 = document.getElementById("square-back5").innerHTML;
  const b3 = document.getElementById("square-back6").innerHTML;
  const c1 = document.getElementById("square-back7").innerHTML;
  const c2 = document.getElementById("square-back8").innerHTML;
  const c3 = document.getElementById("square-back9").innerHTML;
  if (check_flipped("panel1") && check_flipped("panel2") && check_flipped("panel3")) {
     if (a1 == a2 && a2 == a3) {
        turn = "End";
        end_game(a1);
     }
  } 
  if (check_flipped("panel1") && check_flipped("panel4") && check_flipped("panel7")) {
     if (a1 == b1 && b1 == c1) {
        turn = "End";
        end_game(a1);
     }
  }
  if (check_flipped("panel2") && check_flipped("panel5") && check_flipped("panel8")) {
     if (a2 == b2 && b2 == c2) {
        turn = "End";
        end_game(a2);
     }
  }
  if (check_flipped("panel3") && check_flipped("panel6") && check_flipped("panel9")) {
     if (a3 == b3 && b3 == c3) {
        end_game(a3);
        turn = "End";
     }
  }
  if (check_flipped("panel3") && check_flipped("panel5") && check_flipped("panel7")) {
     if (a3 == b2 && b2 == c1) {
        turn = "End";
        end_game(a3);
     }
  }
  if (check_flipped("panel4") && check_flipped("panel5") && check_flipped("panel6")) {
     if (b1 == b2 && b2 == b3) {
        turn = "End";
        end_game(b1);
     }
  }
  if (check_flipped("panel1") && check_flipped("panel5") && check_flipped("panel9")) {
     if (a1 == b2 && b2 == c3) {
        turn = "End";
        end_game(a1);
     }
  }
  if (check_flipped("panel7") && check_flipped("panel8") && check_flipped("panel9")) { 
     if (c1 == c2 && c2 == c3) {
        turn = "End";
        end_game(c1);
     }
  }
  if (check_flipped("panel1") && check_flipped("panel2") && check_flipped("panel3") && check_flipped("panel4") && check_flipped("panel5") && check_flipped("panel6") && check_flipped("panel7") && check_flipped("panel8") && check_flipped("panel9") && turn != "End") {
        turn = "End";
        end_game("tie");
  }
}
function check_flipped(panel) {
  if (document.getElementById(panel).className == "flipped-panel")
     return true;
  else
     return false;
}
function end_game(victor) {
  if (victor == "tie") 
     document.getElementById("instructions").innerHTML = "It's a tie!";
  else
     document.getElementById("instructions").innerHTML = "Player " + victor + " won the game!";
  for (var i = 1; i < 10; i++) {
      document.getElementById("square-back" + i).style.display = "none";
  }
  document.getElementById("play-button").innerHTML = "Replay";
  document.getElementById("play-button").style.display = "block";
}
function restart_game() {
    for (var i = 1; i < 10; i++) {
      document.getElementById("panel" + i).className = "flip-panel"; 
      document.getElementById("square-back" + i).innerHTML = "X"; 
      document.getElementById("square-back" + i).style.display = "inline";
      document.getElementById("square-back" + i).style.lineHeight = "100px";
      document.getElementById("square-back" + i).style.marginLeft = "25px";
      document.getElementById("square" + i).innerHTML = "X";
      document.getElementById("square" + i).style.display = "none";
  }
  turn = "X";
  document.getElementById("instructions").innerHTML = "Player " + turn + "'s turn."
}