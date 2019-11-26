let czy_O = true;

function userClicked(cell) {
    if(czy_O === true) {
        if(document.getElementById(cell).innerHTML == "")
        document.getElementById(cell).innerHTML = "O";
        czy_O = false;
    }else {
        if(document.getElementById(cell).innerHTML == "")
        document.getElementById(cell).innerHTML = "X";
        czy_O = true;
    }
}

