$("#login_form").submit(e => {
    e.preventDefault()
    var campos = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    Enviar_API(JSON.stringify(campos), 'auth', datos => {
        if (datos.estado){
            localStorage.setItem("accessToken", datos.accessToken)
            localStorage.setItem("extension", "")
            window.location.href = "app.html"
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: datos.error
            })
        }
    })
})