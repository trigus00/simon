// This file contains the game logic.
// All the event-listening should happen in buttons.js
let pressed = true;
let game_list = []; 

function createList(list) {
    let colors = ["green", "red", "yellow", "blue"]
    let random = Math.floor(Math.random() * 4);

    switch (random) {
        case 0:
            list.push("green");
            break;
        case 1:
            list.push("red");
            break;
        case 2:
            list.push("blue");
            break;
        case 3:
            list.push("yellow");
            break;
    }

    console.log(list)


}



let sample = ["red, blue, blue, green"];

createList(game_list)