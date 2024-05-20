/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirgr(id) {
    if (id == "grados") {
        let gra = document.getElementById("grados").value;
        let grad = grad * Math.PI / 180;
        document.getElementById("radianes").value;
    } else if (id == "radianes") {
        let rad = document.getElementById("radianes").value;
        let rad = rad * 180 / Math.PI;
        document.getElementById("grados").value;
    }
}