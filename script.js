

// Calculadora
var valor;
var resultado;

function botao(num) {
    valor = document.calc.visor.value += num;
}

function reseta() {
    document.calc.visor.value = '';
}

function calcula() {
    resultado = eval(valor);
    if (resultado == "Infinity") {
        document.calc.visor.value = 'Erro. Não pode dividir por zero.';            
    }
    else    document.calc.visor.value = resultado;
}
