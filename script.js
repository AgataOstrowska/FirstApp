let czy_x = true;
let game = true;

function userClicked(cell) {
    if( game == true &&
        document.getElementById(cell).innerHTML == "" ){
        if(czy_x === true){
            document.getElementById(cell).innerHTML = "X";
            czy_x = false;

            if(checkWin("X") == true) {
                console.log("Wygrało X")
                game = false;
            }
        }else {
            document.getElementById(cell).innerHTML = "O";
            czy_x = true;

            if(checkWin("O") == true) {
                console.log("Wygrało O")
                game = false;
            }
        }
    }
}

function checkWin(player) {
    if(document.getElementById(1).innerHTML == player &&
       document.getElementById(2).innerHTML == player &&
       document.getElementById(3).innerHTML == player){
         return true;
    }

    if(document.getElementById(4).innerHTML == player &&
        document.getElementById(5).innerHTML == player&&
            document.getElementById(6).innerHTML == player){
                return true;
    }

    if(document.getElementById(7).innerHTML == player &&
        document.getElementById(8).innerHTML == player&&
            document.getElementById(9).innerHTML == player){
                return true;
    }

    if(document.getElementById(1).innerHTML == player &&
        document.getElementById(4).innerHTML == player&&
            document.getElementById(7).innerHTML == player){
                return true;
    }

    if(document.getElementById(2).innerHTML == player &&
        document.getElementById(5).innerHTML == player&&
            document.getElementById(8).innerHTML == player){
                return true;
    }

    if(document.getElementById(3).innerHTML == player &&
        document.getElementById(6).innerHTML == player&&
            document.getElementById(6).innerHTML == player){
                return true;
    }

    if(document.getElementById(1).innerHTML == player &&
        document.getElementById(5).innerHTML == player&&
            document.getElementById(9).innerHTML == player){
                return true;
    }


    if(document.getElementById(3).innerHTML == player &&
        document.getElementById(5).innerHTML == player&&
            document.getElementById(7).innerHTML == player){
                return true;
    }



    if( document.getElementById(1).innerHTML !== "" &&
        document.getElementById(2).innerHTML !== "" &&
        document.getElementById(3).innerHTML !== "" &&
        document.getElementById(4).innerHTML !== "" &&
        document.getElementById(5).innerHTML !== "" &&
        document.getElementById(6).innerHTML !== "" &&
        document.getElementById(7).innerHTML !== "" &&
        document.getElementById(8).innerHTML !== "" &&
        document.getElementById(9).innerHTML !== "") {
            console.log("remis")
            game = false;
        }
    return false;
  }