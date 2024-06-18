
var nomesDigitados = [];

function getValue() {
    var inputElement = document.getElementById('inputValor');
    
   
    var valorDigitado = inputElement.value;
    

    nomesDigitados.push(valorDigitado);
    
   
    var valorParagrafo = document.getElementById('valorDigitado');
    
 
    valorParagrafo.textContent = '';
    
   
    for (var i = 0; i < nomesDigitados.length; i++) {
        valorParagrafo.textContent += nomesDigitados[i] + '\n';
    }
    
   
    inputElement.value = '';
}



