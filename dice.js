function diceRoller() {
    const noOfDice = document.getElementById("noOfDice").value;
    const resultDiv = document.getElementById("result");
    const imgresult = document.getElementById("imgresult");
    let values = [];
    let images = [];
    for (let i = 0; i < noOfDice; i++) {
        const roll = Math.floor(Math.random()*6) + 1;
        values.push(roll);
        images.push(`<img src="dice_images/dice-six-faces-${roll}.png" alt="Dice ${roll}">`);
    }
    resultDiv.innerHTML = `You rolled: ${values.join(", ")}`;
    imgresult.innerHTML = images.join("");
}