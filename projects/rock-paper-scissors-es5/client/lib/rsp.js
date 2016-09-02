function mod(a, b) {
    c = a % b
    return (c < 0) ? c + b : c
}
function compare(choice1, choice2, choices) {
    x = choice1
    y = choice2
    if (x == y) {
        return "Tie";
    }
    if (mod((x - y), choices.length) < choices.length / 2) {
        return choices[choice1] + " wins. You WIN!";
    } else {
        return choices[choice2] + " wins. You lose.";
    }
}

window.rps = {
  compare: compare
}
