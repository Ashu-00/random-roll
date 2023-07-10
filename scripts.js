function roll() {
    var roll1 = document.getElementById("roll1");
    var roll2 = document.getElementById("roll2");
    var win = document.getElementById("winner");
    roll1.textContent = String(Math.floor((Math.random() * 6) + 1));
    roll2.textContent = String(Math.floor((Math.random() * 6) + 1));
    if (Number(roll2.textContent) > Number(roll1.textContent)) {
        win.textContent = "Winner is Player 2";
    }
    else if (Number(roll2.textContent) < Number(roll1.textContent)) {
        win.textContent = "Winner is Player 1";
    }
    else {
        win.textContent = "Oops! No winner please roll again!";
    }

}