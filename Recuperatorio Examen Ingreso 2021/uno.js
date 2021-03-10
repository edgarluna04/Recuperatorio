
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;

	var acumuladorSueldoProgramador=0;
	var acumuladorSueldoAnalista=0;
	var acumuladorSueldoQa=0;

	var promedioProgramador;
	var promedioAnalista;
	var promedioQa;

	var contadorNoBinarios=0;

	var contadorProgranadores=0;
	var contadorAnalistas=0;
	var contadorQa=0;
	

	var mayorSueldoMasculino;
	var mayorSueldoNoBinario;
	var empleadoFemeninoMayorSueldo;

	var sexoEmpleadoMayorSueldo;
	
	var nombreEmpleadoFemeninoMayorSueldo;

	var continuar;
	
	do{
		nombre=prompt("Ingrese nombre");

		edad=parseInt(prompt("Ingrese  edad"));
		while(isNaN(edad)==true || edad>99 || edad<0){
			edad=parseInt(prompt("Valor incorrecto, ingrese su edad nuevamente"));
		}

		sexo=prompt("Ingrese sexo (masculino - femenino - no binario)");
		while(sexo!="masculino" && sexo!="femenino" && sexo!="no binario");{
			sexo=prompt("Error, ingrese nuevamente (masculino - femenino - no binario)");
		}

		puesto=prompt("Ingrese el puesto (programador - analista - Qa)").toLowerCase;
		while(puesto!="programador" && puesto!="analista" && puesto!="qa" ){
			puesto=prompt("Puesto incorrecto, ingrese nuevamente (programador - analista - Qa)");
		}

		sueldo=parseFloat(prompt("Ingrese sueldo (entre 15000 y 70000)"));
		while(sueldo<15000 || sueldo>70000){
			sueldo=parseFloat(prompt("ERROR ingrese sueldo nuevamente (entre 15000 y 70000)"));
		}

		switch(sexo){
			case "masculino":
				if(mayorSueldoMasculino<sueldo){
					mayorSueldoMasculino=sueldo;
				}				
				break;

			case "femenino":
				empleadoFemeninoMayorSueldo=0;
				if(sueldo>empleadoFemeninoMayorSueldo){
					empleadoFemeninoMayorSueldo=sueldo;
					nombreEmpleadoFemeninoMayorSueldo=nombre;
				}
				break;

			case "no binario":
				if(puesto=="programador" && sueldo<55000 || sueldo>20000){
					contadorNoBinarios++;
				}
				if(sueldo>mayorSueldoNoBinario){
					mayorSueldoNoBinario=sueldo;
				}

		}

		switch(puesto){
			case"programador":
			contadorProgranadores++;
			acumuladorSueldoProgramador+=sueldo;
			break;

			case"analista":
			contadorAnalistas++;
			acumuladorSueldoAnalista+=sueldo;
			break;

			case "qa":
			contadorQa++;
			acumuladorSueldoQa+=sueldo;
			break;

		}

		if(mayorSueldoMasculino>mayorSueldoNoBinario && mayorSueldoMasculino>empleadoFemeninoMayorSueldo){
			sexoEmpleadoMayorSueldo="masculino";
		}
		else if(mayorSueldoNoBinario>mayorSueldoMasculino && mayorSueldoNoBinario>empleadoFemeninoMayorSueldo){
			sexoEmpleadoMayorSueldo="no binario";
		}
		else{
			sexoEmpleadoMayorSueldo="femenino";
		}

		promedioAnalista=sueldoAnalista/contadorAnalistas;
		promedioProgramador=sueldoProgramador/contadorProgranadores;
		promedioQa=sueldoQa/contadorQa;


		continuar=confirm("Desea agregar otro empleado?")
	}while(continuar==true)

	document.write("El promedio de sueldos de los progrmadores es de "+ promedioProgramador +"</br>");
	document.write("El promedio de sueldos de los analistas es de "+promedioAnalista+"</br>");
	document.write("El promedio de sueldos de Qa es de "+promedioQa+"</br>");


	document.write("El sexo de la persona que percibe el mayor sueldo es "+sexoEmpleadoMayorSueldo+"</br>");

	document.write("El nombre del empleado femenino con mayor sueldo es "+nombreEmpleadoFemeninoMayorSueldo+"</br>");

	document.write("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es de "+contadorNoBinarios);
}

/* 
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/