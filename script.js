

let current_value = '0'
const current_expression = []
const current_expression_element = document.getElementById('current_expression')

const historic = []
const historic_element = document.getElementById('historic')

const phrases = {
    hacker: [
        "Não achou que seria tão fácil assim né?",
        "Parece que temos um aspirante a desenvolvedor entre nós!",
        "Já ouviu falar de CyberSecurity? acho que você tem talento!"
    ]
}


const available_operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};




function init(){
    current_expression_element.textContent = current_value
    historic_element.textContent = historic
}


function calculateValuesOnHold(){
    if(current_expression.length === 0){
        return
    }
    current_expression.push(current_value)

    let first_number = null
    let second_number = null
    let operator

    let summary = 0

    current_expression.forEach(value_from_expression => {
        console.log(value_from_expression)
        if(value_from_expression in available_operators){
            operator = value_from_expression
        } else {
            if(first_number === null){
                first_number = Number(value_from_expression)
            } else {
                second_number = Number(value_from_expression)
            }
        }

        if(operator && first_number !== null && second_number !== null){
            console.log(available_operators, operator, first_number, second_number)
            summary += available_operators[operator](first_number, second_number)
            first_number = null
            second_number = null
            operator = undefined
        } 
    })

    historic.length = 0
    historic.push(String(summary))
    historic_element.textContent = historic

    current_value = String(summary)
    current_expression.length = 0
    current_expression_element.textContent = summary
}



function number_function(event, value){
    const innerHMTLvalue = Number(event.target.textContent)
    if(innerHMTLvalue != value){
        let available_phrases = phrases['hacker']

        let range = available_phrases.length
        let sorted_index = Math.floor(Math.random() * range)
        let sorted_phrase = available_phrases[sorted_index]

        console.log(sorted_phrase)
    } else {
        if(typeof value === 'number'){
            current_value = current_value === '0' ? String(value) : current_value + String(value)
            current_expression_element.textContent = current_value
        }
        
    }
}


function clear_all_on_display(event){
    current_expression.length = 0
    historic.length = 0

    current_value = '0'


    current_expression_element.textContent = current_value
    historic_element.textContent = historic
}


function add_function(){
    
    if(current_value === '0' || !current_value){
        return
    }

    current_expression.push(current_value)
    historic.push(current_value)
    current_expression.push('+')
    historic.push('+')

    current_value = '0'

    current_expression_element.textContent = current_expression
    historic_element.textContent = historic
}


init()