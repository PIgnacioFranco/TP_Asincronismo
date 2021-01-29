var titulo = document.getElementsByTagName("h1");
var cuerpo = document.getElementsByTagName ('main')[0];

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
            "Septiembre","Octubre","Noviembre","Diciembre"];

var diaDelMes = [31,28,31,30,31,30,31,31,30,31,30,31];

let tabla = document.createElement ("table");
tabla.setAttribute ('ID', 'tablaID');
let tlbody = document.createElement ("tbody");


function dibujar () {

    i = 0;

    titulo[0].style.color = "green";

        cuerpo.appendChild (tabla);

        dibujarCabecera();

    let recorrido = setInterval (() => {
            if (i < meses.length) {

                dibujarTabla(i);

                i++;
            }
            else {
                clearInterval (recorrido);
            }

    }, 125 );
}

function dibujarCabecera() {
    let fila = document.createElement ("tr");

    let celdaMes = document.createElement ("th");
    let contMes = document.createTextNode ( 'Meses');
    celdaMes.appendChild(contMes);
    fila.appendChild (celdaMes);
    let celdaDias = document.createElement ('th');
    contDias  = document.createTextNode ('Días');
    celdaDias.appendChild (contDias);
    fila.appendChild (celdaDias);

    tlbody.appendChild (fila);
    tabla.appendChild (tlbody);
}

function dibujarTabla( i ) {
    let fila = document.createElement ("tr");

    let celdaMes = document.createElement ("td");
    let contMes = document.createTextNode (meses[i]);
    celdaMes.appendChild(contMes);
    fila.appendChild (celdaMes);

    let celdaDias = document.createElement ('td');
    contDias  = document.createTextNode (diaDelMes[i]);
    celdaDias.appendChild (contDias);
    fila.appendChild (celdaDias);

    tlbody.appendChild (fila);
    tabla.appendChild (tlbody);
}

function modoDiurno () {
    document.body.style.backgroundColor = "lightslategrey";

    let filaTemp = document.getElementsByTagName ('tr');

    i = 1;

    let recorrido = setInterval (() => {

        if ( i < meses.length + 1 ) {
            filaTemp[i].style.color = "black";

            if ( i%2 == 0 ) {
                filaTemp[i].style.backgroundColor = "palevioletred";
            }
            else {
                filaTemp[i].style.backgroundColor = "pink";
            }
            i++;
        } else {
            clearInterval (recorrido);
        }
    }, 125);
}

function modoNocturno () {

    document.body.style.backgroundColor = "darkslategrey";
    let filaTemp = document.getElementsByTagName ('tr');

    i = 1;

    let recorrido = setInterval (() => {
        if ( i < meses.length + 1 ) {
            filaTemp[i].style.color = "white";

            if ( i%2 == 0 ) {
                filaTemp[i].style.backgroundColor = "grey";
            }
            else {
                filaTemp[i].style.backgroundColor = "black";
            }

            i++;

        } else {
            clearInterval (recorrido);
        }
    }, 125);
}
