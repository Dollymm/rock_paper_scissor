let[computer_score,user_score]=[0,0];


let result_ref = document.getElementById("result");
let choices_op ={
    'rock' :{
        'rock': 'draw',
        'scissor':'win',
        'paper': 'lose'
    },
    'paper' :{
        'rock': 'win',
        'scissor':'lose',
        'paper': 'draw'
    },
    'scissor' :{
        'rock': 'lose',
        'scissor':'draw',
        'paper': 'win'
    }
}


function Checker(input){
    var choices=["rock","paper","scissor"];
    var num= Math.floor(Math.random()*3);

    document.getElementById("Computer_choice").
innerHTML=
`Computer choose <span>${choices[num].
    toUpperCase()}</span>`;

    document.getElementById("user_choice").
innerHTML=
`You choose <span> ${input.toUpperCase()} </span>`;

let Comp_choice=choices[num];
switch(choices_op[input][Comp_choice]){
    case 'win':
        result_ref.innerHTML="you win";
        user_score++;
        break;
        case 'lose':
            result_ref.innerHTML="you lose";
            computer_score++;
            break;
            default:
                result_ref.innerHTML="Draw";
                break;
}
document.getElementById("computer_score").innerHTML= computer_score;
document.getElementById("user_score").innerHTML= user_score;
}