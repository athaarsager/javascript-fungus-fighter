// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;

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
    const attackType = e.target.className;
    // alert(attackType); --lists both class names
    // make Freaky Fungus lose HP, reduce your AP based on given stats in README.md
    //  --check button attack class to determine the above information
    // HP and AP cannot go negative, set to zero

}