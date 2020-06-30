const array_of_numbers = [""];
const array_of_operators = [];

function addNumber(num) {
    const len = array_of_numbers.length - 1;
    array_of_numbers[len] += `${num}`;
    console.log(array_of_numbers);
}

function getOperator(operator) {
    const index = array_of_numbers.length - 1;

    if (array_of_operators.length == index &&
        array_of_numbers[index] != "")
    {
        array_of_numbers.push("");
        array_of_operators.push(operator);
        console.log(array_of_operators);
    }
}