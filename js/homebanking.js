//Declaración de variables
var nombreUsuario = "Ricardo Lopez"
var limiteExtraccion = 4000
var saldoCuenta = 15000
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var Cuentaamiga1= 1234567;
var Cuentaamiga2= 7654321;
var codigo= 1212;
//Funciones creadas por la alumna
function sumarDinero(montoIncremento) {
    saldoCuenta += montoIncremento;
}
function restarDinero(montoDecremento) {
    saldoCuenta -= montoDecremento;
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var cambiarLimiteString = prompt("Ingrese nuevo limite extracción");
    var cambiarLimite = parseInt(cambiarLimiteString);
    if cambiarLimite != NaN{
    limiteExtraccion = cambiarLimite;
    actualizarLimiteEnPantalla();
    alert("Su nuevo límite de extraccion es" + limiteExtraccion)
    }else{
    alert ("Ingreso un valor invalido");
    }
}

function extraerDinero() {
    var retiroString = prompt("Por favor, ingrese la suma que desea extraer");
    var retiro = parseInt(retiroString);
    //validacion operacion

    if (retiro > saldoCuenta) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
    }
    else if (retiro > limiteExtraccion) {
        alert("No pude superar el limite de extraccion");
    }
    else if ((retiro % 100) != 0) {
        alert("Solo puede extraer billetes de 100");
    }
    else {
        //funcionalidades si pasa las validaciones
        var almacenarSaldoRetiro = saldoCuenta;
        restarDinero(retiro);
        actualizarSaldoEnPantalla();
        alert("Has retirado:" + retiro + "\nSaldo Anterior:" + almacenarSaldoRetiro + "\nSaldo Actual" + saldoCuenta);
    }
}


    function depositarDinero() {
        var depositoString = prompt("Por favor, ingrese la suma que desea depositar");
        var deposito = parseInt(depositoString);
        var almacenarSaldo = 15000;
        sumarDinero(deposito);
        actualizarSaldoEnPantalla();
        alert("Usted deposito:" + deposito + "\nSaldo Anterior:" + almacenarSaldo + "\nSaldo Actual" + saldoCuenta);
    }

    function pagarServicio() {
        var saldoanteriorparaservicios= saldoCuenta;
        var servicio= prompt("Ingrese el número correspondiente al servicio que desea pagar\n1- Agua\n2-Luz\n3-Internet\n4-Telefono");
        var Stringservicio= parseInt(servicio);
                switch (servicio){
            case "1":
                if(agua>saldoCuenta){
                    alert("No posee fondos suficientes");
                }
                else {
                    alert("Has pagado el servicio de agua\n Saldo anterior:" +saldoanteriorparaservicios+"Dinero descontado:\n"+agua+ "Saldo Actual:"+saldoCuenta);
                    restarDinero(agua);
                    actualizarSaldoEnPantalla();
                }
                    break;
            case "2":
                        if(telefono>saldoCuenta){
                            alert("No posee fondos suficientes");
                        }
                        else {
                        
                            alert("Has pagado el servicio de teléfono\n Saldo anterior:" +saldoanteriorparaservicios+"Dinero descontado:\n"+telefono+ "Saldo Actual:"+saldoCuenta);
                            restarDinero(telefono);
                            actualizarSaldoEnPantalla();
                        }
                            break;
            case "3":
                               if(luz > saldoCuenta){
                                    alert("No posee fondos suficientes");
                                }
                                else {
                                    alert("Has pagado el servicio de teléfono\n Saldo anterior:" +saldoanteriorparaservicios+"Dinero descontado:\n"+luz+ "Saldo Actual:"+saldoCuenta);
                                    restarDinero(luz);
                                    actualizarSaldoEnPantalla();
                                }
                                    break;

             case "4":
                                        if(internet> saldoCuenta){
                                            alert("No posee fondos suficientes");
                                        }
                                        else {
                                            alert("Has pagado el servicio de teléfono\n Saldo anterior:" +saldoanteriorparaservicios+"Dinero descontado:\n"+internet+ "Saldo Actual:"+saldoCuenta);
                                            restarDinero(internet);
                                            actualizarSaldoEnPantalla();
                                        }
                                            break;
            
                                    }
                                }
    function transferirDinero() {
        
            var transferencia = prompt("Indique el monto de dinero que desea transferir: ");
            stringtransferencia = parseInt(transferencia);
            if (!isNaN(transferencia)) {
                if (transferencia <= saldoCuenta) {
                    var cuentaIngresada = prompt ("Indique el número de cuenta para transferir el dinero: ");
                    var cuentraIngresadaString = parseInt(cuentaIngresada); }
                else {alert("No hay saldo disponible para poder realizar la transferencia.");
                     }
                if (cuentaIngresada == Cuentaamiga1 || cuentaIngresada == Cuentaamiga2) {
                    restarDinero(transferencia);
                    actualizarSaldoEnPantalla();
                    alert("Se ha transferido\n"+transferencia+"A la cuentra nro"+cuentaIngresada)
                }else if (cuentaIngresada !=Cuentaamiga1 || cuentaIngresada !=Cuentaamiga2){
                    alert("Sólo puede transferir dinero a sus cuentas amigas.")};
            }else {
                alert("Datos incorrectos. Vuelva a intentar.");
            }
        }
    

    function iniciarSesion() {
        {
            var codigoIngresado = prompt("Ingrese el código de su cuenta: ");
            var codigoIngresadoString = parseInt(codigoIngresado);
            if (codigoIngresado == codigo) {
                alert("Bienvenido/a" + nombreUsuario);}
            else {
                alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
                saldoCuenta = 0;}
        }
        

    }

    //Funciones que actualizan el valor de las variables en el HTML
    function cargarNombreEnPantalla() {
        document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
    }

    function actualizarSaldoEnPantalla() {
        document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
    }

    function actualizarLimiteEnPantalla() {
        document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
    }