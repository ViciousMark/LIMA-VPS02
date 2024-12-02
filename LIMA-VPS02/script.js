let currentIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
const totalSlides = slides.length; // Total de slides
const radioButtons = document.querySelectorAll('input[name="radio-btn"]'); // Seleciona os botões de rádio

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = index * -100; // Calcula o deslocamento negativo
    slidesContainer.style.transform = `translateX(${offset}%)`; // Aplica a transformação
    currentIndex = index; // Atualiza o índice atual
}

// Função para mudar para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementa o índice
    showSlide(currentIndex); // Mostra o próximo slide
}

// Função para mudar para o slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrementa o índice
    showSlide(currentIndex); // Mostra o slide anterior
}

// Muda de slide a cada 5 segundos
setInterval(nextSlide, 7000);

// Adiciona evento de clique aos botões de rádio
radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('click', () => {
        showSlide(index); // Mostra o slide correspondente ao botão de rádio clicado
    });
});