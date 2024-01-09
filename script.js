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

    if (heroAP <= 0) {
        heroAP = 0;
        renderAttack();
        renderGameOver();
        return;
    } else if (fungusHP <= 0) {
        fungusHP = 0;
        renderAttack();
        renderWin();
        return;
    } else {
        renderAttack();
    }

    checkRemainingAP();
}

// Render state changes to the DOM

// Update the text above the attack buttons (eg, "100 AP")
// Update the text above the enemy fungus (eg, "100 HP")
// If the Freaky Fungus runs out of HP, the monster is dead and you win! 
// Replace the walk class with a dead class on the freaky-fungus element, to make them fall over and die.
// If you run out of AP, the monster wins and humanity is doomed 😢 
// Replace the walk class with a jump class on the freaky-fungus element, to make them jump for the glory of the fungal race.
// You may no longer attack, if AP is 0. Give all of the attack buttons a disabled attribute, so they may no longer be used.

function renderAttack() {
    const apText = document.querySelector(".ap-text");
    apText.textContent = `${heroAP} AP`;
    const apMeter = document.getElementById("ap-meter");
    apMeter.value = `${heroAP}`;

    const hpText = document.querySelector(".hp-text");
    hpText.textContent = `${fungusHP} HP`;
    const hpMeter = document.getElementById("hp-meter");
    hpMeter.value = `${fungusHP}`;
}

function renderWin() {
    const enemy = document.querySelector(".freaky-fungus");
    enemy.classList.replace("walk", "dead");
}

function renderGameOver() {
    const enemy = document.querySelector(".freaky-fungus");
    enemy.classList.replace("walk", "jump");
}

function checkRemainingAP() {
    const attackButtons = document.getElementsByClassName("attack-btn");
    let disabledCount = 0;
    for (let button of attackButtons) {
        const apCost = button.dataset.apCost;
        if (heroAP < apCost) {
            button.disabled = true;
            disabledCount++;
        }
    }
    if (disabledCount === 4) {
        renderGameOver();
    }
}