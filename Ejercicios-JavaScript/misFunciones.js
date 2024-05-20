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
    let cant,unid,urlcomp;
    cant= document.getElementById("distancia").value;
    unid= document.getElementsByName("unidades")[0].value;
    console.log(cant)
    console.log(unid)
    urlcomp="segundaweb.html#" + cant + "#" +unid;
    window.open(urlcomp);

}

let cargarValores = () => {
    let cant
}