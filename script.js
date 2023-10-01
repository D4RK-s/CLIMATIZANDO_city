
const Key = '2c5c2c32db519012b58fef7084b76b8d'


function LayoutDados(dados) {

    console.log(dados)

    document.querySelector('.Max').innerHTML = 'Máx: ' + Math.floor(dados.main.temp_max) + '°C'
    document.querySelector('.Min').innerHTML = 'Min: ' + Math.floor(dados.main.temp_min) + '°C'
    document.querySelector('.Title').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.°C').innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector('.Temp').innerHTML = dados.weather[0].description
    document.querySelector('.Umid').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    document.querySelector('.prevision-Temp').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function BuscCity(City) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Key}&lang=pt_br&units=metric`).then( resposta => resposta.json() )

    LayoutDados(dados)
}

function ClickTheBtn() {
    const City = document.querySelector('.DigCity').value

    BuscCity(City)
}
