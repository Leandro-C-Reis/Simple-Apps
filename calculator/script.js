let current_value = 0;
let before_value = '';
let operatorB = '';
const values = ['', ''];

const MAX_Caracters = 15;

function addNumber(number){
  if (document.getElementById("current").innerHTML == 0){
    document.getElementById("current").innerHTML = ''
  }

  if (document.getElementById("current").innerHTML.length < MAX_Caracters)
  {
    document.getElementById("current").innerHTML += number; 
  }
}

function addZero(){
  document.getElementById("current").innerHTML += 0;
}

function operation(number1, number2, operator)
{
  switch(operator)
  {
    case '/' : return number1 / number2;
    case 'x' : return number1 * number2;
    case '+' : return number1 + number2;
    case '-' : return number1 - number2;
  }
}

function getOperator(operator){
  displayRender(operator);

  operatorB = operator;
}

function displayRender(operator)
{
  if (values[0] == ''){
    if (document.getElementById('before').innerHTML != '')
    {
      values[0] = document.getElementById('before').innerHTML;
    }else
    {
      values[0] = document.getElementById('current').innerHTML;
    }
  }else {
    values[1] = document.getElementById('current').innerHTML.substring(values[0].length + 1);
  }

  if (operatorB != '')
  {
    document.getElementById('before').innerHTML = operation(parseFloat(values[0]), parseFloat(values[1]), operatorB); 
    clearCurrently();
  }else{
    document.getElementById('current').innerHTML += operator;
  }
}

function addComma(){}
function percentage(){}

function clearAll(){
  document.getElementById("current").innerHTML = '';
  document.getElementById('before').innerHTML = '';

  current_value = 0;
  before_value = '';
  values[0] = '';
  values[1] = '';
  operatorB = '';

  addZero();
}
function clearCurrently(){
  document.getElementById('current').innerHTML = '';

  values[0] = '';
  values[1] = '';

  addZero();
}
function result(){
  if (operatorB != ''){
    values[1] = document.getElementById('current').innerHTML.substring(values[0].length + 1);
    document.getElementById('before').innerHTML = operation(parseFloat(values[0]), parseFloat(values[1]), operatorB);
  }

  values[0] = '';
  values[1] = '';
  operatorB = '';
  clearCurrently();
}


addZero();