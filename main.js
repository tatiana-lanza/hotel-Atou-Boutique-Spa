alert("Bienvenido al Hotel Atou Boutique & SPA");
let nombre = prompt("Indique su nombre y apellido para iniciar una reserva");
alert("Bienvenido " + nombre + ". A continuacion, coloque mes de reserva.");
console.log("Nombre de la persona que reserva: " + nombre);

let numero;
do {
    numero = parseInt(prompt("Utilice un solo digito para referirse al mes que desea reservar"));
    console.log("Mes seleccionado: " + numero);
} while (isNaN(numero) || numero < 5);
if (numero >= 5) {
    alert("Tenemos disponibilidad para este mes");
} else {
    alert("Lo sentimos, no disponemos de habitaciones para el mes seleccionado");
}

let habitacionesDisponibles = ["Standar", "Deluxe", "Suite"]
let habitacionElegida;
let habitacionValida = false;
while (!habitacionValida) {
    habitacionElegida = prompt("Ingrese el tipo de habitacion que desea: Standar, Deluxe o Suite");
    for (let i = 0; i < habitacionesDisponibles.length; i++) {
        if (habitacionElegida.toLowerCase() === habitacionesDisponibles[i].toLowerCase()) {
            habitacionValida = true;
            break;
        }
    }
    if (!habitacionValida) {
        alert("La habitacion seleccionada no es valida. Por favor elija una opcion valida.");
    }
}
alert("La habitacion seleccionada es: " + habitacionElegida)
console.log("Habitacion seleccionada:" + habitacionElegida)

let desayunos = ["continental", "americano"];
let desayunoElegido;
do {
    desayunoElegido = prompt("Para el desayuno elija entre: Continental o Americano").toLowerCase();
    if (!desayunos.includes(desayunoElegido)) {
        alert("La opcion de desayuno elegida no es valida. Por favor, elija entre Continental o Americano");
    }
} while (!desayunos.includes(desayunoElegido));
alert("Ha seleccionado el desayuno " + desayunoElegido + ". Su reserva ha finalizado con exito.");
console.log("Desayuno seleccionado:" + desayunoElegido);




