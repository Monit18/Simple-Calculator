var inputBox = document.querySelector('.inputBox');
var inputEq = document.querySelector('.inputEq');
var historyDiv = document.querySelector('.history');
var answers = [];
var equations = [];

function setVal(num)
{
    if(inputBox.value == 0)
        inputBox.value = num;
    else
        inputBox.value += num;
}

function clearInput()
{
    inputBox.value = 0;
    inputEq.value = '';
}

function getAns()
{
    equation = inputBox.value + " = ";
    equations.unshift(equation);
    answers.unshift(eval(inputBox.value));
    // console.log("Equation : ", equations);
    // console.log("Answer : ", answers);
    inputEq.value = inputBox.value + " = ";
    inputBox.value=eval(inputBox.value);
}

function showHistory()
{
    historyDiv.innerHTML = "";
    for(let i=0; i < answers.length; i++)
    {
        historyDiv.innerHTML += '<div class="output">' + '<h4>' + equations[i] + '</h4>' + '' + '<h2>' + answers[i] + '</h2>' + '</div>'
        // console.log(equations[i]," ", answers[i]);
    }
}