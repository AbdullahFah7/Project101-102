function printNumbers(to) {
    if(to > 10){
        return;
    }

    for(let i = 1; i <= to; i++){
        console.log(i);
    }
    return;
}

function add(firstNumber , secondNumber){
    return firstNumber + secondNumber;
}

printNumbers(5);
printNumbers(11);