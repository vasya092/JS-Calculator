const numberButtons = document.querySelectorAll('.calculator__number')
const mainInput = document.querySelector('.calculator__input')
const plusButton = document.querySelector('.calculator__plus')
const minusButton = document.querySelector('.calculator__minus')
const multiplyButton = document.querySelector('.calculator__mtp')
const divideButton = document.querySelector('.calculator__div')
const calculateButton = document.querySelector('.calculator__calculate')

let numbers = [null, null]
let operation = '+'
let inputValue = ""
numberButtons.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        if(numbers[0] != null) {
            numbers[1] = item.value
            mainInput.value += item.value.toString()
        }
        else {
            inputValue+=item.value.toString()
            mainInput.value = inputValue
        }
    })
})
function SelectCurrentOperator(operator) {
    if(numbers[0] == null) {
        numbers[0] = +mainInput.value
        operation = operator
        mainInput.value += ` ${operator} `
    }
    else {
        numbers[1] = +mainInput.value
        opertaion = operator
        mainInput.value += ` ${operator} `
    }
}
plusButton.addEventListener('click', ()=>{
    SelectCurrentOperator('+')
})
minusButton.addEventListener('click', ()=>{
    SelectCurrentOperator('-')
})
multiplyButton.addEventListener('click', ()=>{
    SelectCurrentOperator('*')
})
divideButton.addEventListener('click', ()=>{
    SelectCurrentOperator('/')
})
calculateButton.addEventListener('click', ()=>{
    if(numbers[1] !== null){
        parceNumbers()
        calculateResult()
    }
})
const calculateResult = () => {
    switch(operation) {
        case '+': {
            mainInput.value = numbers[0]+numbers[1]
            numbers[0] = +mainInput.value
        }
        case '-': {
            mainInput.value = numbers[0]-numbers[1]
            numbers[0] = +mainInput.value
        }
        case '*': {
            console.log(numbers);
            mainInput.value = numbers[0]*numbers[1]
            numbers[0] = +mainInput.value
        }
        case '/': {
            mainInput.value = numbers[0]/numbers[1]
            numbers[0] = +mainInput.value
        }

        numbers[1] = null
    }
}

const parceNumbers = () => {
    
    numbers = mainInput.value.split(` ${operation} `)
    for(let i = 0;i<numbers.length;i++) {
        numbers[i] = +numbers[i]
    }
}