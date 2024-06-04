let habitacionesDisponibles = ["Standar", "Deluxe", "Suite"];
let desayunos = ["continental", "americano"];

function Reserva(nombre, mes, habitacion, desayuno) {
    this.nombre = nombre;
    this.mes = mes;
    this.habitacion = habitacion;
    this.desayuno = desayuno;
}

function validarMes(mes) {
    return !isNaN(mes) && mes >= 5;
}

function validarHabitacion(habitacion) {
    return habitacionesDisponibles.map(function (item) {
        return item.toLowerCase();
    }).includes(habitacion.toLowerCase());
}

function mostrarMensaje(mensaje) {
    document.getElementById("mensaje").innerText = mensaje;
}

function iniciarReserva() {
    mostrarMensaje("Bienvenido al Hotel Atou Boutique & SPA");
    document.getElementById("nombreForm").style.display = "block";
}

function manejarNombre() {
    let nombre = document.getElementById("nombre").value;
    mostrarMensaje("Bienvenido " + nombre + ". A continuación, coloque mes de reserva.");
    console.log("Nombre de la persona que reserva: " + nombre);
    document.getElementById("mesForm").style.display = "block";
    document.getElementById("nombreForm").style.display = "none";
}

function manejarMes() {
    let mes = parseInt(document.getElementById("mes").value);
    console.log("Mes seleccionado: " + mes);
    if (validarMes(mes)) {
        mostrarMensaje("Tenemos disponibilidad para este mes");
        document.getElementById("habitacionForm").style.display = "block";
        document.getElementById("mesForm").style.display = "none";
    } else {
        mostrarMensaje("Lo sentimos, no disponemos de habitaciones para el mes seleccionado");
    }
}

function manejarHabitacion() {
    let habitacion = document.getElementById("habitacion").value;
    if (validarHabitacion(habitacion)) {
        mostrarMensaje("La habitación seleccionada es: " + habitacion);
        document.getElementById("desayunoForm").style.display = "block";
        document.getElementById("habitacionForm").style.display = "none";
    } else {
        mostrarMensaje("La habitación seleccionada no es válida. Por favor elija una opción válida.");
    }
}

function manejarDesayuno() {
    let desayuno = document.getElementById("desayuno").value.toLowerCase();
    if (desayunos.includes(desayuno)) {
        mostrarMensaje("Ha seleccionado el desayuno " + desayuno + ". Su reserva ha finalizado con éxito.");
        console.log("Desayuno seleccionado: " + desayuno);
        guardarReserva();
        document.getElementById("desayunoForm").style.display = "none";
    } else {
        mostrarMensaje("La opción de desayuno elegida no es válida. Por favor, elija entre Continental o Americano");
    }
}

function guardarReserva() {
    let reserva = new Reserva(
        document.getElementById("nombre").value,
        parseInt(document.getElementById("mes").value),
        document.getElementById("habitacion").value,
        document.getElementById("desayuno").value
    );
    console.log("Guardando reserva en localStorage: ", reserva);
    localStorage.setItem("reserva", JSON.stringify(reserva));
}

function mostrarReserva() {
    let reserva = localStorage.getItem("reserva");
    if (reserva) {
        console.log("Reserva almacenada en localStorage: ", JSON.parse(reserva));
    } else {
        console.log("No hay reservas almacenadas en localStorage.");
    }
}

window.onload = function () {
    iniciarReserva();
    mostrarReserva(); 
};


