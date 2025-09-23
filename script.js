window.onload = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
        })
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    });
    
    // Impede arrastar imagens
document.addEventListener('dragstart', function(event) {
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
    }
});

// Aguarda o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as imagens do slider e os botões
    const images = document.querySelectorAll('#imagem-big .slide-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImgIndex = 0;
    const intervalTime = 3000; // 5 segundos, ajuste conforme preferir
    let slideInterval;

    // Função para mostrar a imagem atual e reiniciar o temporizador
    function showImage(index) {
        // Remove a classe 'active' de todas as imagens
        images.forEach(img => {
            img.classList.remove('active');
        });

        // Adiciona a classe 'active' à imagem no índice atual
        images[index].classList.add('active');
    }

    // Função para mostrar a próxima imagem
    function nextImage() {
        currentImgIndex = (currentImgIndex + 1) % images.length;
        showImage(currentImgIndex);
    }

    // Função para iniciar o slide automático
    function startAutoSlide() {
        // Limpa qualquer temporizador anterior para evitar conflitos
        clearInterval(slideInterval);
        // Define um novo temporizador que chama nextImage a cada `intervalTime`
        slideInterval = setInterval(nextImage, intervalTime);
    }

    // Função para mostrar a imagem anterior
    function prevImage() {
        currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
        showImage(currentImgIndex);
    }

    // Adiciona os event listeners aos botões
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextImage();
            startAutoSlide(); // Reinicia o temporizador após o clique manual
        });
        prevBtn.addEventListener('click', () => {
            prevImage();
            startAutoSlide(); // Reinicia o temporizador após o clique manual
        });
    }

    // Exibe a primeira imagem e inicia o slide automático
    if (images.length > 0) {
        showImage(currentImgIndex);
        startAutoSlide();
    }
});