function verificaNumero(x , y){
    if(x == "") 
        throw 'x empty';
    if(y == "") 
        throw 'y empty';
    if(isNaN(x)) 
        throw "x not a number";
    if(isNaN(y)) 
        throw "x not a number";
}


function somar(x, y){
    verificaNumero(x, y)
    return x+y;
}

function multiplicar(x, y){
    verificaNumero(x, y)
    return x*y;
}

function subtrair(x, y){
    verificaNumero(x, y)
    return x-y;
}

function dividir(x, y){
    verificaNumero(x, y)
    return x/y;
}

module.exports = {
    somar: somar,
    multiplicar: multiplicar,
    subtrair: subtrair,
    dividir: dividir,
    verificaNumero: verificaNumero
};

