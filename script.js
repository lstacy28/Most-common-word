// ORIGNAL SOURCE:https://github.com/b-mcavoy/datasets/blob/main/Language%20%26%20Literature/Words.csv
// This function makes it so everthing inside of it will only run when the "find the most common word" button is pressed
function findWord(){
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Language%20%26%20Literature/Words.csv";
var word = getColumn(url, 1);
var speech = getColumn(url, 2);
var frequency = getColumn(url, 3);
var length = getColumn(url, 4);

var wordCount = parseFloat(document.getElementById("wordCount").value);
var partOfSpeech = document.getElementById("partOfSpeech").value;


console.log(wordCount)
console.log(partOfSpeech)

var i = 0
var result = []
while(result.length == 0 && i < word.length){
    if(speech[i].includes(partOfSpeech) && parseFloat(length[i]) == wordCount){
        result.push(word[i]) 
    }
    i++
}
    


console.log(result)
document.getElementById("outputBox").innerHTML = result;
}

// Once the "game" function is activated your location gets replaced with "minigame.html"
function game(){    
    location.replace("minigame.html");
}
