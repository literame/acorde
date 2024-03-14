    const content = document.querySelectorAll('.point');
    const contextMenu = document.getElementById('context-menu');

    const cejillas = document.querySelectorAll('.lateralcejilla');
    const cejillaactiva = document.querySelectorAll('.cejillaactiva');


    content.forEach(function (element) {
        //menu flotante de opciones
        element.addEventListener('contextmenu', function (e) {
            e.preventDefault();

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            contextMenu.style.display = 'block';
            contextMenu.style.left = mouseX + 'px';
            contextMenu.style.top = mouseY + 'px';


        });

        //puntos de coordenadas activar y desactivar
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

     cejillas.forEach(function (cejilla) {
        cejilla.addEventListener('click', function() {
            controlBgItem(cejilla)
                // Desactivar todas las cajas
            controlcejilla(cejilla.id)
        })

        
    });

    function controlBgItem(item){
        if (item.style.backgroundColor === 'white') {
            item.style.backgroundColor = '';
            } else {
                item.style.backgroundColor = 'white';
        }
    }

function controlcejilla(idcejilla) {
    const tipocj = document.getElementById(idcejilla);
    switch (idcejilla) {
        case 'h':
            const ca_h = document.getElementById('CA1');
            ca_h.style.display = 'block';
            // ca_h.style.backgroundColor = 'white';
            controlBgItem(ca_h);
            console.log('h');
        break;
        case 'j':
            const ca_j = document.getElementById('CA2');
            ca_j.style.display = 'block';
            // ca_j.style.backgroundColor = 'white';
            controlBgItem(ca_j);
        console.log('j');
        break;
        case 'k':
            const ca_k = document.getElementById('CA3');
            ca_k.style.display = 'block';
            // ca_k.style.backgroundColor = 'white';
            controlBgItem(ca_k);
        console.log('k');
        break;
        case 'l':
            const ca_l = document.getElementById('CA4');
            ca_l.style.display = 'block';
            // ca_l.style.backgroundColor = 'white';
            controlBgItem(ca_l);

        console.log('l');
        break;

        default:
            const ca_ñ = document.getElementById('CA5');
            ca_ñ.style.display = 'block';
            // ca_ñ.style.backgroundColor = 'white';
            controlBgItem(ca_ñ);

        console.log('ñ');
        break;
    }
}











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

















//Pruebas

  