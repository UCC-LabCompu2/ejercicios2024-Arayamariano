/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id //El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor //El valor de los inputs de metros, pulgadas, pies y yardas
 */
function cambiarUnidades(id, valor) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    } else if (id == "metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09362 * valor;
    } else if (id == "pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_pie.value = 0.08333 * valor;
        document.lasUnidades.unid_yarda.value = 0.02777 * valor;
    } else if (id == "pie") {
        document.lasUnidades.unid_metro.value = 0.3048 * valor;
        document.lasUnidades.unid_pulgada.value = 12 * valor;
        document.lasUnidades.unid_yarda.value = 0.33333 * valor;
    } else if (id == "yarda") {
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
        document.lasUnidades.unid_pulgada.value = 36 * valor;
    }
}


/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas con otro tipo de funcion
 * @method cambiarUnidades
 * @param {string} id //El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor //El valor de los inputs de metros, pulgadas, pies y yardas
 */
convertirUnidades = (id, valor) => {
    let met, pul, pie, yar;
    if (valor.includes(",")) {
        valor = valor.replace(",", ".")
    }
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        met = valor * 0.0254;
        pul = valor;
        pie = valor * 0.83333;
        yar = valor * 0.0277778;
    } else if (id === "pie") {
        met = valor * 0.3048;
        pul = valor * 12;
        pie = valor;
        yar = valor * 0.333333;
    } else if (id === "yarda") {
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
        yar = valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met * 100) / 100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul * 100) / 100;
    document.lasUnidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasUnidades.unid_yarda.value = Math.round(yar * 100) / 100;
}

function convertirGR(id) {
    var grad, rad;
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


/**
 * Conversion de de grados a radianes
 * @method convertirgr
 * @param {string} id //El id de los inputs de grados y radianes
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

/**
 * Mostrar o ocultar un div
 * @method mostrarOcultar
 * @param {number} valorMo //El valor de los inputs de suma, resta, multiplicacion y division
 */
let mostrarOcultar = (valorMO) => {
    if (valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}
let sumar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}
let restar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}
let multiplicar = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}


let division = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
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

/**
 * Dibujar circulo y cuadrado dentro de un canva
 * @method dibujarCirculoCuadrado
 * @param {string} id //El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor //El valor de los inputs de metros, pulgadas, pies y yardas
 */
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

/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id //El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor //El valor de los inputs de metros, pulgadas, pies y yardas
 */
function dibujar(event) {
    const canvas = document.getElementById("lienzo");
    const ctx = canvas.getContext("2d");

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

/**
 * Conversion de unidades, de metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id //El id de los inputs de metros, pulgadas, pies y yardas
 * @param {number} valor //El valor de los inputs de metros, pulgadas, pies y yardas
 */
function limpiarCanvas() {
    const canvas = document.getElementById("lienzo");
    canvas.width = canvas.width;
}

/**
 * Dinuja una linea en la posicion que determina el usuario con el mouse
 * @method dibujarCuadriculado
 */
function dibujarCuadriculado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const alturamaxima = canvas.height;
    const anchomaximo = canvas.width;
    const paso = 20;

    for (let i = paso; i < alturamaxima;) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchomaximo, i);
        ctx.strokeStyle = "#585555";
        ctx.stroke();
        ctx.closePath();
        i = i + paso;
    }
    for (let i = paso; i < anchomaximo;) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturamaxima);
        ctx.strokeStyle = "#585555";
        ctx.stroke();
        ctx.closePath();
        i = i + paso;
    }
    ctx.strokeStyle = "#3e0565";
    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturamaxima / 2);
    ctx.lineTo(0, anchomaximo);
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchomaximo / 2, 0);
    ctx.lineTo(alturamaxima, 0);
    ctx.stroke();
    ctx.closePath();
}