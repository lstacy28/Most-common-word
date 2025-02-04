var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Language%20%26%20Literature/Words.csv"
var word = getColumn(url, 1);
var speech = getColumn(url, 2);
var frequency = getColumn(url, 3);
var length = getColumn(url,4);
    function ChangePage(){
    for (var i = 0; i < word.length; i++){
        if(frequency[place] > frequency[place2]){
            window.location.href = ("correct.html");
        }
        if(frequency[place] <= frequency[place2]){
            window.location.href = ("wrong.html");
        }
    }
        
    }
    function ChangePage1(){
        for (var i = 0; i < word.length; i++){
            if(frequency[place] > frequency[place2]){
                window.location.href = ("wrong.html");
            }
            if(frequency[place] <= frequency[place2]){
                window.location.href = ("correct.html");
            }
        }
    }
  
 
var place = Math.floor(Math.random()*word.length);
var place2 = Math.floor(Math.random()*word.length);
console.log(place);
document.getElementById("Word_1").innerHTML = word[place];
document.getElementById("Word_2").innerHTML = word[place2];
