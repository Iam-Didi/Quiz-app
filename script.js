//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//if start Quiz button is clicked 
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

//if Exit button is clicked 
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info box
}

//if continue button is clicked 
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info box
    quiz_box.classList.add("activeQuiz");  //show the quiz box
}