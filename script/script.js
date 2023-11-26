const botao1 = document.querySelector('#converterAnosLuz');
const botao2 = document.querySelector('#converterKms');
const resultado1 = document.querySelector('.result1');
const resultado2 = document.querySelector('.result2');
const tabela = document.querySelector('.tabela');

function obterDataAtual() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    return `${ano}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
}

function exibirResultado1(event) {
    event.preventDefault();
    const numero1 = document.querySelector('#anos').value;
    if (numero1 < 1) {
        showErrorPopup()
        resultado1.innerHTML = ""
        tabela.innerHTML += "<tr><td>-</td><td>-</td><td>-</td></tr>"
    } else {

        const anosLuzEmKm = 9.461 * Math.pow(10, 12);
        const distanciaKm = numero1 * anosLuzEmKm;

        const dataAtual = obterDataAtual();


        tabela.innerHTML += `<tr><td>${dataAtual}</td><td>${distanciaKm} Km</td><td>${numero1} Anos-Luz</td></tr>`;

        resultado1.innerHTML = `<p>Resultado: ${distanciaKm} Km</p>`;
    }
}

function exibirResultado2(event) {
    event.preventDefault();
    const numero2 = document.querySelector('#kms').value;
    if (numero2 < 1) {
        showErrorPopup()
        resultado2.innerHTML = ""
        tabela.innerHTML += "<tr><td>-</td><td>-</td><td>-</td></tr>"

    } else {

        const kmEmAnosLuz = 1 / (9.461 * Math.pow(10, 12));
        const distanciaAnosLuz = numero2 * kmEmAnosLuz;

        const dataAtual = obterDataAtual();


        tabela.innerHTML += `<tr><td>${dataAtual}</td><td>${numero2} Km</td><td>${distanciaAnosLuz} Anos-Luz</td></tr>`;

        resultado2.innerHTML = `<p>Resultado: ${distanciaAnosLuz} Anos-Luz</p>`;
    }
}



function showErrorPopup() {
    document.getElementById('errorPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('errorPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    
    document.body.style.overflow = 'auto';
}


botao1.addEventListener('click', exibirResultado1);
botao2.addEventListener('click', exibirResultado2);

