const form = document.getElementById('form');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('form-nome');
    const telefone = document.getElementById('form-telefone');

    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const dadosTabela = document.querySelector('tbody');
    dadosTabela.innerHTML = linhas;

    nome.value = '';
    telefone.value = '';
})