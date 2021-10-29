function validar()
{

let error = "Por favor\ncomplete los siguientes campos:\n\n";
let a = ""

    if (form.nombre.value == "") { a += " Nombre\n"; }
    if (form.apellido.value == "") { a += " Apellido\n"; }
    if (form.email.value == "") { a += " Email\n"; }
    if (form.pass.value == "" ) { a += " Contraseña\n"; }
    if (form.confirmar.value == "") { a += " Tiene que confirmar contraseña\n"; }
    if (a != "")
     { alert(error + a); return true; }

     if(form.pass.value != form.confirmar.value)
     {
     alert("La contraseñas deben coincidir");
      form.pass.value = ""; form.pass.focus(); return true;} 
      
      if(form.email.value != form.emailconfirm.value)
      {
      alert("El email deben coincidir");
       form.email.value = ""; form.emailconfirm.focus(); return true;} 
      
      enviar = window.confirm(' Gracias, te llegara un email de confirmacion');
      (enviar)?form.submit():'return false';
form.submit();
}


