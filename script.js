/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
*/
function calcularGrados() {
    const celsius = parseFloat(document.getElementById("gradoCel").value);
    let Fah = (celsius*9/5)+32;
    let Kel = celsius + 273.15 ;

    //creo elemento para escribir los grados en el index
    const textFahrenheit = document.createElement("p");
    const textKelvin = document.createElement("p");

    textFahrenheit.textContent = `Temperatura en Fahrenheit: ${Fah.toFixed(1)}`;; 
    textKelvin.textContent = `Temperatura en Kelvin: ${Kel.toFixed(2)}`;

    //llamando a el contenedor donde se coloca el resultado 
    const contenedor = document.getElementById("resultado");
    contenedor.appendChild(textFahrenheit);
    contenedor.appendChild(textKelvin);

}