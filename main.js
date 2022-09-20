function convert () {
    event.preventDefault()
    
    let escalaResul = document.querySelector('#escalaResul').value
    let escalaInicio = document.querySelector('#escalaInicio').value
    let temp1 = Number(document.querySelector('#temp1').value)
    let resultado = document.querySelector('#resultado')

    if(escalaInicio == 'Celsius' && escalaResul == 'Celsius') {
        resultado.innerHTML = temp1 
    } else if(escalaInicio == 'Fahrenheit' && escalaResul == 'Fahrenheit') {
        resultado.innerHTML = temp1
    } else if(escalaInicio == 'Kelvin' && escalaResul == 'Kelvin') {
        resultado.innerHTML = temp1
    } else if (escalaInicio == 'Celsius' && escalaResul == 'Fahrenheit') {
        resultado.innerHTML = temp1 * (9/5) + 32
    } else if (escalaInicio == 'Celsius' && escalaResul == 'Kelvin') {
        resultado.innerHTML = temp1 + 273.15, '°K'
    } else if (escalaInicio == 'Fahrenheit' && escalaResul == 'Celsius') {
        resultado.innerHTML = (5 * (temp1-32) / 9)
    } else if (escalaInicio == 'Fahrenheit' && escalaResul == 'Kelvin') {
        resultado.innerHTML = (temp1-32) * 5/9 + 273.15
    } else if (escalaInicio == 'Kelvin' && escalaResul == 'Celsius') {
        resultado.innerHTML = temp1 - 273.15
    } else if (escalaInicio == 'Kelvin' && escalaResul == 'Fahrenheit') {
        resultado.innerHTML = (temp1-273.15) * 9/5 + 32
    }
}
