const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    ////we must create an array
    //must have # for hexcode so we must = # 
    //then a loop that must run 6 times
    let hexColor = '#'
    //i starts at 0
    //i runs until 6
    //i should add 1
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

//we need it to be randomized

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}