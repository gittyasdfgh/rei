player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question turn -"+ player1_name;
document.getElementById("playeranswer").innerHTML= "Answer turn-"+player2_name;

function send()
{
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
first=word.charAt(1);
second=Math.floor(word.length/2);
charAt2=word.charAt(second);
third=word.length-1;
charAt3=word.charAt(third);
remove_charAt1=word.replace(first,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");

    
    question_word="<h4 id='word_display'> Q." +remove_charAt3+"</h4>";
    
    input_box="<br>Answer:<input type='text' id='input_check_box'>";

    check_button="<br> <br><button class='btn btn-info' onclick='check()'> Check </button>";

    row=question_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";
function check(){
get_answer=document.getElementById("input_check_box").value;
answer=get_answer.toLowerCase();
if(answer==word)


{
if (answer_turn=="player1")
{
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;

}
}
if(question_turn=="player1")
{
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question turn-"+player2_name;

}
else{
question_turn="player1";
document.getElementById("player_question").innerHTML="question turn-"+player1_name;


}
if(answer_turn=="player1")
{
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="answerturn-"+player2_name;
    

}
else{answer_turn="player1";
document.getElementById("player_answer").innerHTML="answerturn-"+player1_name;





}
document.getElementById("output").innerHTML="";
}
