/*
Ejercicio cuenta de banco

*/


let cuentaBanco = {
    numero:2893,
    saldo:1000
}

function depositar(monto){
    return cuentaBanco.saldo +=monto;
};

function retirar(monto){
return cuentaBanco.saldo -= monto;
};


console.log( depositar(200) );
// Debe imprimir 1200


console.log( retirar(70)  );
//Debe imprimir 1130
