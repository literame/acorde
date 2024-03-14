//Nos permite controlar si estamos dentro del cuadro de cejillas
//si es que ya esta activa una cejilla mantiene el boton activo, aun despues de salirse del contexto.
//es decorativo. no ejecuta funciones especificas

const cj = document.querySelectorAll('.lateralcejilla');
const vistaAcorde = document.getElementById('vistaAcorde');

function mouseSobre() {
    cj.forEach(function (itemCejilla) {
    vistaAcorde.addEventListener('mouseover', function () {
        if(itemCejilla.style.backgroundColor === 'white'){
            itemCejilla.style.backgroundColor = 'white';
        } else{
            itemCejilla.style.backgroundColor = '#e4e4dd62';
        }

    });

    });
};

function mousefuera(){
    cj.forEach(function (itemCejilla) {
vistaAcorde.addEventListener('mouseout', function () {
    //itemCejilla.style.backgroundColor = '';
    if(itemCejilla.style.backgroundColor === 'white'){
        itemCejilla.style.backgroundColor = 'white';
    } else{
        itemCejilla.style.backgroundColor = '';
    }


 });
});
};
