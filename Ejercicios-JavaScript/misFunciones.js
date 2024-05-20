/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirgr(id) {
    if (id == "grados") {
        let grad = document.getElementById("grados").value;
        let rad = grad * Math.PI / 180;
        document.getElementById("radianes").value=rad;
    } else if (id == "radianes") {
        let rad = document.getElementById("radianes").value;
        let grad = rad * 180 / Math.PI;
        document.getElementById("grados").value=grad;
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
    num2 = Number (document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].value = num1 + num2;
}