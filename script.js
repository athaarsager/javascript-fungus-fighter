
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