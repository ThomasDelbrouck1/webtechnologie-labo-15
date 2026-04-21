const classicMemes = ["Distracted Boyfriend", "Drake Hotline Bling", "Two Buttons"];
const deepFriedMemes = ["Big Chungus", "Ugandan Knuckles", "Stonks"];
const currentMemes = ["He's Right You Know", "This is Fine", "Woman Yelling at Cat"];

function combineMemes(...memeCategories) {
    let combinedMemes = [];

    for (let i = 0; i < memeCategories.length; i++) {
        combinedMemes = [...combinedMemes, ...memeCategories[i]];
    }

    return combinedMemes;
}

const fullMemeList = combineMemes(classicMemes, deepFriedMemes, currentMemes);
console.log("Volledige memelijst:");
console.log(fullMemeList);

const extendedMemeList = [...fullMemeList, "NPC Streamer", "Italian Brainrot"];
console.log("Uitgebreide memelijst:");
console.log(extendedMemeList);

console.log("Originele lijst ongewijzigd:");
console.log(fullMemeList);
