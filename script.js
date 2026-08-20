
const on_hold_values = []

const phrases = {
    hacker: [
        "Não achou que seria tão fácil assim né?",
        "Parece que temos um aspirante a desenvolvedor entre nós!",
        "Já ouviu falar de CyberSecurity? acho que você tem talento!"
    ]
}


function calculateValuesOnHold(){
    on_hold_values.push(document.getElementById('current_on_hold').textContent)
    console.log(on_hold_values)
}



function number_function(event, value){
    const innerHMTLvalue = Number(event.target.textContent)
    if(innerHMTLvalue != value){
        let available_phrases = phrases['hacker']

        let range = available_phrases.length
        let sorted_index = Math.floor(Math.random() * range)
        let sorted_phrase = available_phrases[sorted_index]

        console.log(sorted_phrase)
    }
}