p1name=localStorage.getItem("player_1");
p2name=localStorage.getItem("player_2");

p1score=0;
p2score=0;

document.getElementById("p1name").innerHTML=p1name+" : ";
document.getElementById("p2name").innerHTML=p2name+" : ";

document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;

document.getElementById("player_ques").innerHTML="Question Turn : "+p1name;
document.getElementById("player_ans").innerHTML="Answer Turn : "+p2name;

function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + "X"+number2+"</h4>";
input_box="<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_number+input_box+check_button;

document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";

}

