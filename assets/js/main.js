

function ValidaSesion() {
    Session()
    setInterval(() => {
        Session()
    }, 5000);
}

function Session() {
    Obtener_API(null, 'session', datos => {
        if (datos.estado) {
            $("#nombre_usuario").html(datos.usuario.nombres)
            $("#ultimo_ingreso").html(datos.usuario.ultimo_ingreso)
        } else {
            Swal.fire({
                title: 'Cerrando sesión',
                html: 'Su sesión ha caducado, el sistema se cerrará automáticamente.',
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    localStorage.setItem("hash", "")
                    localStorage.setItem("extension", "")
                    window.location.href = "index.html"
                }
            })
        }
    }, false)
}

ValidaSesion()

function Cargando(mensaje = "") {
    if (mensaje.trim() == "") {
        $("#mensaje_cargando").html("Espere por favor...")
        $("#cargando").fadeOut(350)
    } else {
        $("#mensaje_cargando").html(mensaje)
        $("#cargando").css({
            "display": "flex"
        })
    }
}



function Notificacion(mensaje, timeout = 0) {
    if (Notification) {
        if (Notification.permission !== "granted") {
            Notification.requestPermission()
        }
        var title = "Marketing VIP | Call"
        var extra = {
            icon: "./assets/img/logo_login.png",
            body: mensaje
        }
        var noti = new Notification(title, extra)
        noti.onclick = {
            // Al hacer click                        
        }
        noti.onclose = {
            // Al cerrar
        }
        if (timeout > 0){
            setTimeout(function () { noti.close() }, timeout * 1000)
        }        
    }
}

// setTimeout(() => {
//     Notificacion("Se programó una llamada al cliente CARLOS ENRIQUE MINO FLORES el 23-02-2022 a las 15:40 pm.")
// }, 2000);

function Mensaje(mensaje = "", color = "info"){
    $("#mensaje_color").removeClass("alert-warning")
    $("#mensaje_color").removeClass("alert-info")
    $("#mensaje_color").removeClass("alert-success")
    $("#mensaje_color").removeClass("alert-danger")

    $("#mensaje_color").addClass("alert-"+color)
    if (mensaje == ""){
        $("#notificacion_mensajes").fadeOut(350)
    }else{
        $("#mensaje").html(mensaje)
        $("#notificacion_mensajes").fadeIn(350)
    }
}

function Verificar_Extension(puerto, callback){
    try{
        $.ajax({
            url: "https://192.168.0.40/asteMKV/llamada.php?sip=" + puerto,
            type: 'GET',
            dataType: 'json',
            success: function (datos) {
                if (typeof callback === "function") {
                    callback(datos);
                }
            },
            error: function (e) {
                if (typeof callback === "function") {
                    callback(e);
                }
            }
        });
    }catch(e){
        callback(e);
    }
    
}

var cronometro_llamadas = null
var segundos_x_llamada = 0
function Iniciar_Cronometro_Llamada(tag) {
    cronometro_llamadas = setInterval(() => {
        segundos_x_llamada += 1
        var cronos = segundosTiempo(segundos_x_llamada);
        $(tag).html(cronos)
    }, 1000);
}

function segundosTiempo(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10) ? '0' + second : second;
    return hour + ':' + minute + ':' + second;
}


function Enter(e){
    if (e.keyCode == 13){
        Buscar()
    }
}