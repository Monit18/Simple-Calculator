var inputBox = document.querySelector('.inputBox');
var inputEq = document.querySelector('.inputEq');
var historyDiv = document.querySelector('.historyContent');
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
    inputEq.value = inputBox.value + " = ";
    inputBox.value=eval(inputBox.value);
}

function showHistory()
{
    document.querySelector('.history').style.display = 'block';
    historyDiv.style.display = 'block';
    document.querySelector('.close').style.display = 'block';
    document.querySelector('.delete').style.display = 'block';
    document.querySelector('.historyContent').innerHTML = "";
    for(let i=0; i < answers.length; i++)
    {
        document.querySelector('.historyContent').innerHTML += '<div class="output">' + '<h4>' + equations[i] + '</h4>' + '' + '<h2>' + answers[i] + '</h2>' + '</div>';
    }
}

function deleteHistory()
{
    var status = confirm("Are you sure you want to delete history ?");
    if(status){
        historyDiv.innerHTML = "";
        answers = [];
        equations = [];
    }
}

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.history').style.display="none";
 
})