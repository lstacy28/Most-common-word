// ORIGNAL SOURCE:https://github.com/b-mcavoy/datasets/blob/main/Language%20%26%20Literature/Words.csv
// This function makes it so everthing inside of it will only run when the a button is pressed
function findWord(){
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Language%20%26%20Literature/Words.csv";
var word = getColumn(url, 1);
var speech = getColumn(url, 2);
var frequency = getColumn(url, 3);
var length = getColumn(url, 4);

var wordCount = parseFloat(document.getElementById("wordCount").value);
var partOfSpeech = document.getElementById("partOfSpeech").value;


var i = 0
var result = ""
var counter = 0;
// I am reducing the amount of words to one by only finding the first word that meets the criteria
while(counter < 3 && i < word.length){
// I am using "parceFloat" to transform all of the numbers in a list to numbers that my code can use easier
    if(speech[i].includes(partOfSpeech) && parseFloat(length[i]) == wordCount){
        // This is filtering which words to use and then adding them to a list
        result = result + word[i]+", ";
        counter++
    }
    i++
}
if(result.length == 0){

if(wordCount > 14){
    result = "!No words found above 14 letters!";
} else if(wordCount < 1){
    result = "!No words found below 1 letter!";
}else{
    result = "!No words found!";
}
}

console.log("wordCount: "+wordCount);
console.log("partOfSpeech: "+partOfSpeech);  
console.log("Words: "+result);  
document.getElementById("outputBox").innerHTML = result;
}






