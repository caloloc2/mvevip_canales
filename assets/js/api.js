// const api = "http://newapidev.mvevip.com/api/v1/"
// const api = "https://newapidev.mvevip.com/api/v1/"
// const api = "http://apidev.mvevip.com/api/v1/"
const api = "https://apicrm.mvevip.com/api/v1/"

function Obtener_API(campos, modulo, callback, ver_consola = true){    
    $.ajax({
        url: api+modulo,
        headers: {
            'Authorization': localStorage.getItem("accessToken"),
            'Content-Type': 'application/json'
        },
        type: 'GET',
        data: campos,
		dataType: 'json',
		success: function(datos){
            if (ver_consola){
                console.log(datos);
            }
            
            if (typeof callback === "function") {
                callback(datos);
            }
        },
		error: function(e){
            if (ver_consola){
                console.log(e);
            }
            
			if (typeof callback === "function") {
                callback(e);
            }
		}
    });  
}

function Enviar_API(campos, modulo, callback){    
    $.ajax({
        url: api+modulo,
        headers: {
            'Authorization': localStorage.getItem("accessToken"),
            'Content-Type': 'application/json'
        },
        type: 'POST',
        data: campos,
		dataType: 'json',
		success: function(datos){
            console.log(datos);
            if (typeof callback === "function") {
                callback(datos);
            }
        },
		error: function(e){
            console.log(e);
			if (typeof callback === "function") {
                callback(e);
            }
		}
    });  
}

function Subir_Archivo_API(campos, modulo, callback){    
    $.ajax({
        url: api+modulo,
        headers: {
            'Authorization': localStorage.getItem("accessToken")
            // 'Content-Type': 'application/x-www-form-urlencoded'            
        },
        type: 'POST',
        contentType: false,
        cache: false,
        processData:false,
        data: campos,
		dataType: 'json',
		success: function(datos){
            console.log(datos);
            if (typeof callback === "function") {
                callback(datos);
            }
        },
		error: function(e){
            console.log(e);
			if (typeof callback === "function") {
                callback(e);
            }
		}
    });  
}

function Eliminar_API(modulo, callback){    
    $.ajax({
        url: api+modulo,
        headers: {
            'Authorization': localStorage.getItem("accessToken")            
        },
        type: 'DELETE',        
		dataType: 'json',
		success: function(datos){
            console.log(datos);
            if (typeof callback === "function") {
                callback(datos);
            }
        },
		error: function(e){
            console.log(e);
			if (typeof callback === "function") {
                callback(e);
            }
		}
    });  
}

function Modificar_API(campos, modulo, callback){    
    $.ajax({
        url: api+modulo,
        headers: {
            'Authorization': localStorage.getItem("accessToken")            
        },
        type: 'PUT',        
        data: campos,
		dataType: 'json',
		success: function(datos){
            console.log(datos);
            if (typeof callback === "function") {
                callback(datos);
            }
        },
		error: function(e){
            console.log(e);
			if (typeof callback === "function") {
                callback(e);
            }
		}
    });  
}