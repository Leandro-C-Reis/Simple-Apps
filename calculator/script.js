const array_of_numbers = [""];
const array_of_operators = [];

const before = document.getElementById("before");
const current = document.getElementById("current");

function addNumber(num) {
    const len = array_of_numbers.length - 1;
    
    if (array_of_numbers[len] === "" && num === ".") return; 
    else {
        array_of_numbers[len] += `${num}`;
        current.innerHTML = array_of_numbers[len];
    }
}

function getOperator(operator) {
    const index = array_of_numbers.length - 1;

    if (array_of_operators.length == index &&
        array_of_numbers[index] != "")
    {
        array_of_numbers.push("");
        array_of_operators.push(operator);
        
    }
    
    print();
} 

function result() {
    const index = array_of_numbers.length - 1;

    if (array_of_numbers[index] == "") {
        switch(array_of_operators[index - 1])
        {
            case "+": 
                array_of_numbers[index] = "0";
                break;
            case "-": 
                array_of_numbers[index] = "0";
                break;
            case "x": 
                array_of_numbers[index] = "1";
                break;
            case "/": 
                array_of_numbers[index] = "1";
                break;
        }
    }
    
    let result = array_of_numbers.reduce((total, current, index) => {
        switch(array_of_operators[index - 1])
        {
            case "+": return parseFloat(total) + parseFloat(current);
            case "-": return parseFloat(total) - parseFloat(current);
            case "x": return parseFloat(total) * parseFloat(current);
            case "/": return parseFloat(total) / parseFloat(current);
        } 
    });

    clearAll();
    
    before.innerHTML = result;
    array_of_numbers[0] = before.innerHTML;
    current.innerHTML = "0";
}

function clearAll() {
    const len = array_of_numbers.length;

    for (let i = 0; i < len; i++)
    {
        array_of_numbers.pop()
        array_of_operators.pop()
    }

    array_of_numbers.push("");
    current.innerHTML = "0";
    before.innerHTML = "";
}

function clearCurrently() {
    current.innerHTML = "0";

    array_of_numbers.pop();
    array_of_numbers.push("");
}

function percentage() {
    const len = array_of_numbers.length - 1;
    if (array_of_numbers[len] !== "")
    {
        array_of_numbers[len] = `${ parseFloat(array_of_numbers[len]) / 100}`;
        current.innerHTML = array_of_numbers[len];
    }
}

function print() {
    before.innerHTML = "";
    
    array_of_numbers.map((num, index) => {
        before.innerHTML += num;
        if (array_of_operators[index] != null) {
            before.innerHTML += ` ${array_of_operators[index]} `;
        }
    });
    
    current.innerHTML = "0";
}