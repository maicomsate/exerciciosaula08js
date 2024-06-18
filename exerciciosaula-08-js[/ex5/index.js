function trocarImagem() {
  const imagemElement = document.getElementById('imagemTroca');
  
  
  if (imagemElement.src.endsWith('imagem1.jpg')) {
    // Trocar para outra imagem
    imagemElement.src = 'imagem2.jpg';
    imagemElement.alt = 'Imagem 2';
  } else {
    
    imagemElement.src = 'imagem1.jpg';
    imagemElement.alt = 'Imagem 1';
  }
}
