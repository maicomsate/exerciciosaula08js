function valorInput() {
    // Captura o valor do input pelo ID
    var inputElement = document.getElementById('inputValor');
    var valorDigitado = inputElement.value;

    // Captura o parágrafo pelo ID onde os valores serão exibidos
    var paragrafoValor = document.getElementById('valorExibido');

    // Cria um novo elemento de parágrafo para exibir o valor digitado
    var novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Valor digitado: ' + valorDigitado;

    // Adiciona o novo parágrafo ao parágrafo principal
    paragrafoValor.appendChild(novoParagrafo);

    // Limpa o input após exibir o valor
    inputElement.value = '';
}
