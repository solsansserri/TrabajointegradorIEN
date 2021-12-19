var getData = function() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var mensaje = document.getElementById("mensaje").value;

    if (name == "") {
        document.getElementById("name").focus();
    } else {
        if (mail == "") {
            document.getElementById("mail").focus();
        } else {
            if (mensaje == "") {
                document.getElementById("mensaje").focus();
            } else {
                console.log(name+" "+mail+" "+mensaje);
                document.getElementById("name").value = "";
                document.getElementById("mail").value = "";
                document.getElementById("mensaje").value = "";
                document.getElementById("name").focus();
                alert("Mensaje enviado");
            }
        }
    }
    

}

