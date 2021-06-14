const btnNum = document.querySelectorAll('.num')
const btnOp = document.querySelectorAll('.op')
const screen = document.querySelector('#textinput')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')

let preNum = null;
let currentNum = '';
let operator = '';
let sum = 0;
let screenArr = [];

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
function times(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function calculate(op, preNum, currentNum) {
    let newSum = 0;


    switch (op) {
        case '+': newSum = add(preNum, currentNum);
            operator = '+';
            break;
        case '-': newSum = sub(preNum, currentNum);
            operator = '-';
            break;
        case '*': newSum = times(preNum, currentNum);
            operator = '*';
            break;
        case '/': newSum = divide(preNum, currentNum);
            operator = '/';
    }
    return newSum;
}


function addToScreen(str) {
    screen.innerText = str

}

function operate(e) {
    if (preNum == null) {
        preNum = currentNum;
        currentNum = ''
        operator = e.target.innerText;
    } else {
        preNum = calculate(operator, parseInt(preNum), parseInt(currentNum));
        operator = e.target.innerText;
        currentNum = '';
    }
}

btnNum.forEach(el => {
    el.addEventListener('click', (e) => {
        currentNum += e.target.innerText;
        screenArr.push(e.target.innerText);
        addToScreen(screenArr.join(''))
    })
})

btnOp.forEach(el => {
    el.addEventListener('click', (e) => {
        screenArr.push(e.target.innerText);
        addToScreen(screenArr.join(''))
        operate(e);
    })
})

equals.addEventListener('click', (e) => {
    addToScreen(calculate(operator, parseInt(preNum), parseInt(currentNum)))
})

clear.addEventListener('click', (e) => {
    currentNum = '';
    operator = '';
    sum = 0;
    screenArr = [];
    preNum = null;
    addToScreen(0);
})
