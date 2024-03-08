// if(activo){
    
//     element.style.background =  'red';

//     console.log("activo" + " " + element.id);
//     activo = false;

// }else{
//     element.style.background =  '#e4e4dd62';

//     console.log(" no activo" + " " + element.id);
//     activo = true;
// }


document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelectorAll('.point');
    const contextMenu = document.getElementById('context-menu');
    const cejillas = document.querySelectorAll('.cj');
    const cejillaactiva = document.querySelectorAll('.cejillaactiva');


    content.forEach(function (element) {
        element.addEventListener('contextmenu', function (e) {
            e.preventDefault();

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            contextMenu.style.display = 'block';
            contextMenu.style.left = mouseX + 'px';
            contextMenu.style.top = mouseY + 'px';


        });

        element.addEventListener('click', function (e) {
            if (element.style.backgroundColor === 'white') {
            element.style.backgroundColor = '';
            } else {
            element.style.backgroundColor = 'white';
            }
        });
        });

        document.addEventListener('click', function () {
        contextMenu.style.display = 'none';
        // element.style.background =  '#e4e4dd62';
    });

     cejillas.forEach(function (itmCejilla) {
        itmCejilla.addEventListener('click', function(c) {
            if (itmCejilla.style.backgroundColor === 'white') {
                itmCejilla.style.backgroundColor = '';
                } else {
                itmCejilla.style.backgroundColor = 'white';
            }
        })
     });
});

function mouseSobre() {
    const cj = document.querySelectorAll('.cj');
    const vistaAcorde = document.getElementById('vistaAcorde');

    cj.forEach(function (itemCejilla) {
    vistaAcorde.addEventListener('mouseover', function (event) {
        if(itemCejilla.style.backgroundColor === 'white'){
            itemCejilla.style.backgroundColor = 'white';
        } else{
            itemCejilla.style.backgroundColor = '#e4e4dd62';
        }

    });
    // vistaAcorde.addEventListener('mouseout', function (event) {
    //     itemCejilla.style.backgroundColor = '';
        
    
    // });
    });
}

// Llama a la función cuando se carga el documento
document.addEventListener('DOMContentLoaded', mouseSobre);















//descargable


  function convertirYDescargar() {
    // Selecciona la sección que deseas convertir a imagen
    var seccion = document.getElementById('vistaAcorde');

    // Utiliza html2canvas para convertir la sección a una imagen
    html2canvas(seccion).then(function(canvas) {
      // Crea un enlace para descargar la imagen
      var enlace = document.createElement('a');
      enlace.href = canvas.toDataURL('image/png');
      enlace.download = 'mi_imagen.png';

      // Agrega el enlace al documento y haz clic en él para iniciar la descarga
      document.body.appendChild(enlace);
      enlace.click();

      // Limpia el enlace después de la descarga
      document.body.removeChild(enlace);
    });
  }

