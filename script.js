const quiz=[
 {q:"Which language styles a webpage?",o:["HTML","CSS","JavaScript","Python"],a:1},
 {q:"Which language handles button clicks?",o:["HTML","CSS","JavaScript","PHP"],a:2},
 {q:"Which tag creates a link?",o:["<a>","<div>","<p>","<h1>"],a:0},
 {q:"Which file controls layout and colors?",o:[".js",".html",".css",".php"],a:2},
 {q:"Which is a frontend library?",o:["React","Node","MySQL","PHP"],a:0}
];

let index=0;
let score=0;
let locked=false;

function startQuiz(){
 document.getElementById("startScreen").classList.add("hide");
 document.getElementById("quizScreen").classList.remove("hide");
 loadQuestion();
}

function loadQuestion(){
 locked=false;
 const q=quiz[index];
 document.getElementById("question").innerText=q.q;
 document.getElementById("options").innerHTML="";
 document.getElementById("progressText").innerText=`Question ${index+1}/${quiz.length}`;
 document.getElementById("progressBar").style.width=((index/quiz.length)*100)+"%";

 q.o.forEach((opt,i)=>{
   const btn=document.createElement("button");
   btn.innerText=opt;
   btn.onclick=()=>checkAnswer(btn,i);
   document.getElementById("options").appendChild(btn);
 });
}

function checkAnswer(btn,i){
 if(locked) return;
 locked=true;

 const buttons=document.querySelectorAll("#options button");
 if(i===quiz[index].a){
   btn.classList.add("correct");
   score++;
 }else{
   btn.classList.add("wrong");
   buttons[quiz[index].a].classList.add("correct");
 }
}

function nextQuestion(){
 if(!locked) return alert("Please select an option");
 index++;
 if(index<quiz.length) loadQuestion();
 else showResult();
}

function showResult(){
 document.getElementById("quizScreen").classList.add("hide");
 document.getElementById("resultScreen").classList.remove("hide");
 document.getElementById("score").innerText=score+"/"+quiz.length;

 let msg="";
 if(score==5) msg="🔥 UI Master! You are internship ready 🚀";
 else if(score>=3) msg="✨ Great job! Your frontend skills are shining";
 else msg="💖 Keep practicing, you are getting better";

 document.getElementById("msg").innerText=msg;
}

/* 🌗 Theme Toggle */
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
 document.body.classList.toggle("light");
 toggle.innerText=document.body.classList.contains("light")?"🌞":"🌙";
};
