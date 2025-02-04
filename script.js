
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

var counter = 1
var result = []
for(var i = 0; i < word.length; i++){
    if(speech[i].includes(partOfSpeech) && parseFloat(length[i]) == wordCount && counter < 2){
        result.push(word[i])
        counter++
    }

}

console.log(result)
document.getElementById("outputBox").innerHTML = result;
}

function game(){    
    location.replace("minigame.html");
}



