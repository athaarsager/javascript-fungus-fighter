
let fungusHP = 100;
let heroAP = 100;

function onReady() {
    console.log("Ready to go!")

    // attach event listeners to all buttons once DOM loads
    const attackButtons = document.getElementsByClassName("attack-btn");
    for (let button of attackButtons) {
        button.addEventListener("click", attack);
    }
}

onReady()

function attack(e) {
    const attackType = e.target.className.split(" ")[1];

   // Update variable values (state) based on attack stats given in README.md
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

    // Render different things based on different states
    // set variable values to zero before rendering so that no negative numbers display, though maybe still another way to condense...
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

    } else if (fungusHP < 50) {
        renderAttack();
        setInterval(regenerateHP, 1000);

    } else {
        renderAttack();
    }

    // This checks if any buttons need to be disabled based on remaining AP
    checkRemainingAP();
}

// Renders the result of each attack (i.e. changes AP and HP display on screen)
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

// Renders the fungus's death.
function renderWin() {
    const enemy = document.querySelector(".freaky-fungus");
    enemy.classList.replace("walk", "dead");
}

// Renders the fungus's death. What a fun guy!
function renderGameOver() {
    const enemy = document.querySelector(".freaky-fungus");
    enemy.classList.replace("walk", "jump");
}

// Checks remaining AP and disables appropriate attack buttons. Also displays game over if all buttons disabled and fungus still alive.
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

// used for regenerating hp every 1 second based on the setInterval used in render()
function regenerateHP() {
    // if (fungusHP >= 50) {
    //     return;
    // }
    // use above conditional to stop HP regeneration once back to 50.
    // current function does not stop incrementing until fungus back to full health
    if (fungusHP === 100) {
        return;
    }
    const hpText = document.querySelector(".hp-text");
    hpText.textContent = `${fungusHP + 1} HP`;
    const hpMeter = document.getElementById("hp-meter");
    hpMeter.value = `${fungusHP + 1}`;
    fungusHP++; // if this doesn't increment, then it will only update once
}