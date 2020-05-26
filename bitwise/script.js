
const max = document.querySelector(".inputs").childElementCount;

let operator = 
{
  value : "and", 
};

function select(element)
{
  if (element.getAttribute("bit-value") == "false")
  {
    element.setAttribute("bit-value", "true");
    element.classList.toggle("selected");
  }
  else
  {
    element.setAttribute("bit-value", "false");
    element.classList.toggle("selected");
  }

  setOutput();
}

function setOutput()
{
  for(let i = 1; i <= max; i++)
  {
    let output = document.getElementById(`output${i}`);

    let i1 = document.getElementById(`i1-${i}`).getAttribute("bit-value");
    let i2 = document.getElementById(`i2-${i}`).getAttribute("bit-value");
    
    if (operator.value === "and")
    {
      if (i1 == "true" && i2 == "true")
      {
        output.classList.add("selected");
      }
      else
      {
        output.classList.remove("selected");
      }
    }
    else if (operator.value === "or")
    {
      if (i1 == "true" || i2 == "true")
      {
        output.classList.add("selected");
      }
      else
      {
        output.classList.remove("selected");
      }
    }
    else if (operator.value === "xor")
    {
      if (i1 == i2)
      {
        output.classList.add("selected");
      }
      else
      {
        output.classList.remove("selected");
      }
    }
    
    if (operator.value === "not")
    {
      document.getElementById(`i2-${i}`).classList.add("not");
      document.getElementById(`i2-${i}`).setAttribute("onclick", "");

      if (i1 !== "true") 
      {
        output.classList.add("selected");
      }
      else
      {
        output.classList.remove("selected");
      }
    }
    else 
    {
      document.getElementById(`i2-${i}`).classList.remove("not");
      document.getElementById(`i2-${i}`).setAttribute("onclick", "select(this)");
    }
  }
}

function setOperator(element)
{
  operator.value = element.getAttribute("value");
  setOutput();

  let operators = document.querySelector(".operators").children;

  for (let i = 0; i < operators.length; i++)
  {
    operators[i].classList.remove("operator-selected");
  }
  
  element.classList.add("operator-selected");
}
