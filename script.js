

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


function init(){
    current_expression_element.textContent = current_value
    historic_element.textContent = historic
}


function calculateValuesOnHold(){
    current_expression.push(current_expression_element.textContent)
    console.log(current_expression)
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