const panas = ["El Piti", "Chinoide", "Rascuacho"]

console.log('Console 1');
console.log(panas);

function getPanas(){
    return panas;
}

console.log('Console 2');
console.log(getPanas());

function asyncGetPanas(){
    setTimeout(() => panas, 2000);
}

console.log('Consoe 3');
console.log(asyncGetPanas());
console.log('Termina Script');
