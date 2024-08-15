
function calcular(){
    var op1 = document.querySelector("input[type='radio'][name='q1']:checked").value
    var op2 = document.querySelector("input[type='radio'][name='q2']:checked").value
    var op3 = document.querySelector("input[type='radio'][name='q3']:checked").value
    var op4 = document.querySelector("input[type='radio'][name='q4']:checked").value
    var op5 = document.querySelector("input[type='radio'][name='q5']:checked").value
    var pontos = 0

    if(op1 == "2"){
        pontos++
    }
    if(op2 == "3"){
        pontos++
    }
    if(op3 == "3"){
        pontos++
    }
    if(op4 == "2"){
        pontos++
    }
    if(op5 == "2"){
        pontos++
    }
    document.getElementById("resultado").innerHTML = pontos
}