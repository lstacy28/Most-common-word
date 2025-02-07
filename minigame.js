var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Language%20%26%20Literature/Words.csv"
var word = getColumn(url, 1);
var speech = getColumn(url, 2);
var frequency = getColumn(url, 3);
var length = getColumn(url,4);
// // This funciton changes the page to send it to either the correct html or wrong html for Word 1
    function changePage(destination1,destination2){
        for (var i = 0; i < word.length; i++){
            if(frequency[place] > frequency[place2]){
                changefLocation(destination1);
            }
            if(frequency[place] <= frequency[place2]){
                changefLocation(destination2);
            }
        }
    }
var place = Math.floor(Math.random()*word.length);
var place2 = Math.floor(Math.random()*word.length);

console.log(word[place]+": "+place);
console.log(word[place2]+": "+place2);

document.getElementById("Word_1").innerHTML = word[place];
document.getElementById("Word_2").innerHTML = word[place2];


