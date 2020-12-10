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
    // alert(fahrenheit)
    document.querySelector("#results").innerText = fahrenheit

    if (fahrenheit <= 32) {
        document.querySelector('body').style.backgroundImage = "url('https://i.pinimg.com/originals/d9/a2/e3/d9a2e334546198f92d1414ab332c3fd0.gif')"
        document.querySelector('body').style.color = 'lightblue'
    }
    else if (fahrenheit <= 50) {
        document.querySelector('body').style.backgroundImage = "url('https://media.tenor.com/images/fcab1cabb968df2261fc6d909c8fd152/tenor.gif')"
        document.querySelector('body').style.color = "white"
    }
    else if (fahrenheit <= 75) {
        document.querySelector('body').style.backgroundImage = "url('https://humoringthegoddess.files.wordpress.com/2017/02/163921-beautiful-spring-day.gif')"
        document.querySelector('body').style.color = "white"
    }
    else {

        document.querySelector('body').style.backgroundImage = "url('https://media1.giphy.com/media/xT0Gqz4x4eLd5gDtaU/giphy.gif')"
        document.querySelector('body').style.color = "white"
    }
}