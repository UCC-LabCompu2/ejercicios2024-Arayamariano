/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirgr(id) {
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (id == "grados") {
        let grad = document.getElementById("grados").value;
        let rad = grad * Math.PI / 180;
        document.getElementById("radianes").value = rad;
    } else if (id == "radianes") {
        let rad = document.getElementById("radianes").value;
        let grad = rad * 180 / Math.PI;
        document.getElementById("grados").value = grad;
    }
}

let mostrarOcultar = (valorMO) => {
    if (valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = block;
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = none;
    }
}

let sumar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

let pasarPagina = () => {
    let cant, unid, urlcomp;
    cant = document.getElementById("distancia").value;
    unid = document.getElementsByName("unidades")[0].value;
    console.log(cant)
    console.log(unid)
    urlcomp = "segundaweb.html#" + cant + "#" + unid;
    window.open(urlcomp);

}

let cargarValores = () => {
    let cant
}

function dibujarCirculoCuadrado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const xmax = canvas.width;
    const ymax = canvas.height;
    ctx.fillStyle = "#ff0bb2";
    const lado = 100;
    const margen = 10;
    ctx.fillRect(0 + margen, ymax - lado - margen, lado, lado);

    ctx.fillStyle = "rgba(76,175,80,0.99)";
    ctx.arc(xmax / 2, ymax / 2, 50, 0, 2 * Math.PI);
    ctx.fill();
}

/**
 * Dinuja una linea en la posicion que determina el usuario con el mouse
 * @method cargarlisteners
 */
function cargarlisteners() {
    document.getElementById("lienzo").addEventListener("mousemove", dibujar);
}

var bandera;

function dibujar(event) {
    const canvas = document.getElementById("lienzo");
    const ctx = canva.getContext("2d");

    let posx = event.clientX;
    let posy = event.clientY;
    console.log(posx, posy);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    ctx.fillStyle = "rgba(76,175,80,0.99)";
    if (bandera) {
        ctx.fillRect(posx, posy, 5, 5);
    }


}

function limpiarCanvas() {
    const canvas = document.getElementById("lienzo");
    canvas.width = canvas.width;
}