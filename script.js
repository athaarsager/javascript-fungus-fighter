// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let heroAP = 100;

function onReady() {
    console.log("Ready to go!")

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    const attackButtons = document.getElementsByClassName("attack-btn");
    for (let button of attackButtons) {
        button.addEventListener("click", attack);
    }


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

function attack(e) {
    const attackType = e.target.className.split(" ")[1];
    // make Freaky Fungus lose HP, reduce your AP based on given stats in README.md
    //  --check button attack class to determine the above information
    if (heroAP <= 0) {
        alert("Out of AP. We're DOOOOOOOOOOOOOOOOOOOOOOOOOOOMED!");
        return;
    }
    // display the changes in HP and AP on the DOM
    switch (attackType) {
        case "arcane-scepter":
            heroAP -= 12;
            fungusHP -= 14;
            break;
        case "entangle":
            heroAP -= 23;
            fungusHP -= 9;
            break;
        case "dragon-blade":
            heroAP -= 38;
            fungusHP -= 47;
            break;
        case "star-fire":
            heroAP -= 33;
            fungusHP -= 25;
            break;
    }
    console.log(`Hero AP: ${heroAP}, fungus HP: ${fungusHP}`);
    // HP and AP cannot go negative, set to zero
}