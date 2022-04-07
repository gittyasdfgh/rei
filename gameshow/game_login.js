function adduser()
{
    player1=document.getElementById("player1name").value;
    player2=document.getElementById("player2name").value;
localStorage.setItem("player_1", player1);
localStorage.setItem("player_2", player2);
window.location.replace("game_page.html");
}