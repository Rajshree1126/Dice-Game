var a = Math.floor(Math.random()*6)+1;
var b = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src",`./images/dice${a}.png`);

document.querySelector(".img2").setAttribute("src",`./images/dice${b}.png`);

if(a>b)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if(b>a)
{
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins ";
}
else {
  document.querySelector("h1").innerHTML = "Tie";
}