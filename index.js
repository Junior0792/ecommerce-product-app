//Elementos do DOM 
var display = document.getElementById('display');
var disminuir = document.getElementById('subtract');
var adicionar = document.getElementById('add');
var modal = document.getElementById('myModal');
var mostrarModal = document.getElementById('mostrarModal');
var totalValor = document.getElementById('totalValue');
var productImage = document.getElementById('productImage');
var productTitle = document.querySelector('.title-product');
var currencySpan = document.getElementById('currency');
var emptyCartMessage = document.getElementById('emptyCartMessage');
var logoCarrinho = document.querySelector('.logo-carrinho');
var botaoCheckout = document.querySelector('.buttom-checkout');
var iconeDelete = document.getElementById('iconeDelete');


// Seleciona as imagens da galeria
const imagens = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const fechar = document.querySelector('.close-image');
const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');
let imagemAtual = 0;


var notification = document.querySelector('.notification');


//Valor inicial do Display
var contador = 0;
var valorProduto = 125;
var contadorProdutos = 0;

//Função para atualizar o valor exibido no display (contador)
function atualizarValor() {
    display.textContent = contador;
}

//evento listener para o botão de disminuir
disminuir.addEventListener('click', function() {
    if (contador > 0) {
        contador--;
        atualizarValor();
    } else {
        alert('The counter is at zero!');
    }
    
});

//evento listener para o botão de adicionar
adicionar.addEventListener('click', function() {
    contador++;
    atualizarValor();
});

//Inicia oculta 
notification.style.display = 'none';

// Notification 
document.getElementById('mostrarModal').addEventListener('click', function() {
    var displayValue = parseInt(display.textContent);

    if (displayValue >= 0) {
        notification.textContent = (displayValue > 0 ) ? displayValue : '0';
        
    }
    notification.style.display = displayValue > 0 ? 'block' : 'none';
    notification.textContent = displayValue;
})

mostrarModal.addEventListener('click', function() {
    var displayValue = parseInt(display.textContent);

    if (displayValue === 0){

        emptyCartMessage.style.display ='block';
        productImage.style.display ='none';
        totalValor.style.display ='none';
        currencySpan.style.display ='none';
        productTitle.style.display = 'none';
        botaoCheckout.style.display = 'none';
        iconeDelete.style.display = 'none';


    } else {

        emptyCartMessage.style.display ='none';
        productImage.style.display ='block';
        totalValor.style.display ='block';
        productTitle.style.display = 'block';
        currencySpan.style.display ='none';
        botaoCheckout.style.display = 'block';
        iconeDelete.style.display = 'block';



        productImage.src = './img/image-product-1.jpg';
        productTitle.textContent = 'Fall limited Edition Sneakers';
        iconeDelete.src = './img/icon-delete.svg';



        var total = (displayValue * valorProduto).toFixed(2);

        totalValor.textContent = '$' + total;

    }

    modal.style.display = 'block';
  
});

modal.querySelector('.close').addEventListener('click', function() {
    modal.style.display = 'none';
});




// Função para exibir o modal do carrinho
function exibirModalCarrinho() {
  var displayValue = parseInt(display.textContent);

 
  if (displayValue === 0) {
    // Se o valor for zero, exibe a mensagem de carrinho vazio e oculta as outras informações
    emptyCartMessage.style.display = 'block';
    totalValor.style.display = 'none';
    currencySpan.style.display = 'none'; // Oculta o cifrão ($) quando estiver vazio
    productImage.style.display = 'none';
    productTitle.style.display = 'none';
    botaoCheckout.style.display = 'none';
    iconeDelete.style.display = 'none';


  } else {
    // Caso contrário, exibe as informações do produto e oculta a mensagem de carrinho vazio
    emptyCartMessage.style.display ='none';
        productImage.style.display ='block';
        totalValor.style.display ='block';
        productTitle.style.display = 'block';
        botaoCheckout.style.display = 'block';
        iconeDelete.style.display = 'block';




        productImage.src = './img/image-product-1.jpg';
        productTitle.textContent = 'Fall limited Edition Sneakers';

        var total = (displayValue * valorProduto).toFixed(2);

        totalValor.textContent = '$' + total;

    }

    modal.style.display = 'block';
  
}
 
// Abre o lightbox e exibe a imagem selecionada
function abrirLightbox(index) {
  lightbox.style.display = 'block';
  lightboxImg.src = imagens[index].src;
  imagemAtual = index;
}
 
// Fecha o lightbox
function fecharLightbox() {
  lightbox.style.display = 'none';
}
 
// Event listeners para abrir e fechar o lightbox
imagens.forEach((imagem, index) => {
  imagem.addEventListener('click', () => abrirLightbox(index));
});
 
fechar.addEventListener('click', fecharLightbox);
 
// Avança para a próxima imagem
proximo.addEventListener('click', () => {
  imagemAtual++;
  if (imagemAtual >= imagens.length) {
    imagemAtual = 0;
  }
  lightboxImg.src = imagens[imagemAtual].src;
});
 
// Volta para a imagem anterior
anterior.addEventListener('click', () => {
  imagemAtual--;
  if (imagemAtual < 0) {
    imagemAtual = imagens.length - 1;
  }
  lightboxImg.src = imagens[imagemAtual].src;
});


  
// Adiciona um evento de clique ao ícone do carrinho para chamar a função que exibe o modal
logoCarrinho.addEventListener('click', exibirModalCarrinho);
