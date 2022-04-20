'use strict'

const imagens = [
    {id: '1', url: './img/angular.png'},
    {id: '2', url: './img/react.png'},
    {id: '3', url: './img/svelte.jpg'},
    {id: '4', url: './img/vue.jpg'},
    {id: '5', url: './img/girassol.jpg'},
    {id: '6', url: 'https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg'}
]

const criarAnterior = () => {
    //cria span anterior
    const anterior = document.createElement('span')
    anterior.classList.add('slider-button')
    anterior.id = 'anterior'
    anterior.innerHTML = '&laquo'
    return anterior
}

const criarSliderItems = () => {
    //cria a div das imagens
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')
    const slides = imagens.map (item => `
            <div class="slider-item">
                <img src="${item.url}">               
            </div>
    `)

    sliderContainer.innerHTML = slides.join("")

    return sliderContainer
}

const criarProximo = () => {
    
    //cria span proximo
    const proximo = document.createElement('span')
    proximo.classList.add('slider-button')
    proximo.id = 'proximo'
    proximo.innerHTML = '&raquo'

    return proximo
}

const criarSlider = () => {

    const slider = document.querySelector('.slider')

    //inserindo os objetos HTML no DOM
    slider.appendChild(criarAnterior())
    slider.appendChild(criarSliderItems())
    slider.appendChild(criarProximo())
}


criarSlider(imagens)

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item')

const proximoSlide = () => {
    const primeiroItem = sliderItems[0]
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

const anteriorSlide = () => {
    const ultimoItem = sliderItems[sliderItems.length -1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')

}


// setInterval (() => {
//     proximoSlide()
// }, 1000)

document.getElementById('proximo').addEventListener('click', proximoSlide);
document.getElementById('anterior').addEventListener('click', anteriorSlide);
