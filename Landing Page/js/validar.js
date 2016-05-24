document.formulario.addEventListener('submit', validarFormulario);
//document.formulario.addEventListener('submit', validarEmail);
//document.formulario.addEventListener('submit', calcularEdad);

function validarFormulario(evObject){
	evObject.preventDefault(); //Evita que se envíe el formulario
	var nom=document.getElementById('nombre').value;
	var email=document.getElementById('correo').value;
	var d=document.getElementById('dia').value;
	var m=document.getElementById('mes').value;
	var a=document.getElementById('anio').value;

	validarNombre(nom);
	validarEmail(email);
	calcularEdad(d,m,a);

	document.formulario.method='Post';
	document.formulario.action='validar.html'
	document.formulario.submit();
}

//modulo para validar que el input nombre no esté vacío
function validarNombre(n){	
	if(n==""){
		alert("El Nombre está Vacío");
	}else{
		alert("Tu nombre es: "+n)
	}
}

//Este modulo evalua el mail
function validarEmail(corr) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(corr)){
    	alert("Error: La dirección de correo " + corr + " es incorrecta.");
    }
    else{
    	alert("Tu direccion de correo: "+ corr +" es correcta");
    }
}

//Modulo para calcular la edad
function calcularEdad(x,y,z) {
	var hoy=new Date();
	var d_act = hoy.getDate();
	var m_act = hoy.getMonth()+1;
	var a_act = hoy.getFullYear();
	var edad = a_act - z;
	alert("Fecha actual: "+d_act+"/"+m_act+"/"+a_act);
	if((y > m_act) || (y==m_act && d_act<x)){
		edad--;
		alert("Tu edad es: "+ edad +" años");
	}
	else{
		alert("Tu edad es: "+ edad +" años");
	}
}