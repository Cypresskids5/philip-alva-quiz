let score =0;
let points =10;

let questions = document.body.childNodes;  //;ist of question
let questionIterator =1;

function correct(button){
    score+=10; // add 10 to score
    button.style.backgroundColor = "green";
    let parent = button.parentNode;
    let siblings =parent.childNodes;
    siblings.forEach(element => {
        element.disabled = true
    });
    questionIterator+=2
    questions[questionIterator].scrollIntoView({
        behavior: "smooth",
        
    })
}


function incorrect(button){
    score-=10; // - 10 to score
    button.style.backgroundColor = "red";
    let parent = button.parentNode;
    let siblings =parent.childNodes;
    siblings.forEach(element => {
        element.disabled = true
    });

    questionIterator+=2
    questions[questionIterator].scrollIntoView({
        behavior: "smooth",
        
    })
}

function calculateScore(button){
    
    button.innerHTML = "Grade:" + score; }