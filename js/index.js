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


});
















//descargable


  function convertirYDescargar() {
    // Selecciona la sección que deseas convertir a imagen
    var seccion = document.getElementById('vista');

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

