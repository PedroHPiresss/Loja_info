let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Aumenta o índice e volta para o primeiro quando chegar no final
    const newTransformValue = -currentIndex * 100; // Cada imagem tem 100% de largura, então movemos o índice
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}

// Inicia a troca automática de imagens a cada 6 segundos
setInterval(changeImage, 6000); // 6000ms = 6 segundos

// Função para adicionar produto ao carrinho (simulado)
document.getElementById('add-to-cart')?.addEventListener('click', function() {
    alert("Produto adicionado ao carrinho!");
});

// Limpa o formulário de cadastro quando o botão de envio for clicado
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert("Cadastro realizado com sucesso!");
    
    // Limpa os campos do formulário
    document.getElementById('signup-form').reset();
});
