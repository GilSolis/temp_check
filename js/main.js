// on click  get value from input

// do maths

// return results


document.querySelector('#btn').addEventListener('click', convert)

function convert() {

    celcius = document.querySelector('#celsius').value
    if (!celcius) {
        alert("Please enter your temp in Celcius")
        return
    }
    fahrenheit = (celcius * 1.8) + 32
    alert(fahrenheit)
}