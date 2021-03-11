function mostrar()
{
	var nombreCliente;
	var cantidadLamparas;
	var marca;
	var precioUnidad;

	var contadorArgenLuz=0;
	var contadorFelipeLamp=0;
	var contadorIlluminatis=0;

	var acumuladorLamparasArgenLuz;
	var flagArgentLuz=true;


	var acumuladorLamparasFelipeLamp;
	var flagFelipe=true;

	var acumuladorLamparasIllumin;
	var flagIlluminati=true;

	var promedioArgentLuz;
	var promedioFelipeLamp;
	var promedioIlluminati;

	var marcaConMasVentas;

	var contadorDescuentoDiez=0;;
	var cantidadLampConDescuentoDiez;

	var contadorDescuentoCinco=0;
	var cantidadLampConDescuentoCinco;

	var descuentoCinco;
	var descuentoDiez;

	var perdidasEnDescuentos;

	var cantidadTotal;
	var precioTotal;

	var continuar;

	do{
		nombreCliente=prompt("Ingrese nombre del cliente");

		cantidadLamparas=parseInt(prompt("Ingrese cantidad de lamparas"));

		marca=prompt("Ingrese marca (FelipeLamparas - ArgentinaLuz -Illuminatis)").toLowerCase;
		while(marca!="felipelamparas" && marca!="argentinaluz" && marca!="illuminatis"){
			marca=prompt("Marca incorrecta, ingrese nuevamente (FelipeLamparas - ArgentinaLuz -Illuminatis)");
		}

		precioUnidad=parseInt(prompt("Ingrese precio por unidad"));

		switch(marca){
			case "argentinaluz":
				contadorArgenLuz++;
				if(flagArgentLuz==true || cantidadLamparas>=1){
					acumuladorLamparasArgenLuz+=cantidadLamparas;

					if( cantidadLamparas>=3){
						contadorDescuentoCinco++;
						cantidadLampConDescuentoCinco+=cantidadLamparas;
					}

					flagArgentLuz==false;
				}
				break;

			case "felipelamparas":
				contadorFelipeLamp++;
				if(flagFelipe==true || cantidadLamparas>=1){
					acumuladorLamparasFelipeLamp+=cantidadLamparas;
					
					if(cantidadLampConDescuentoDiez>5){
						contadorDescuentoDiez++;
						cantidadLampConDescuentoDiez+=cantidadLamparas;
					}

					flagFelipe==false;
				}
				break;

			case "illuminatis":
				contadorIlluminatis++;
				if(flagIlluminati==true || cantidadLamparas>=1){
					acumuladorLamparasIllumin+=cantidadLamparas;
				}
				break;

		}


		continuar=confirm("¿Desea agregar otro producto?");
	}while(continuar==true)

	cantidadTotal=acumuladorLamparasArgenLuz+acumuladorLamparasFelipeLamp+acumuladorLamparasIllumin

	promedioArgentLuz=acumuladorLamparasArgenLuz/contadorArgenLuz;
	promedioFelipeLamp=acumuladorLamparasFelipeLamp/contadorFelipeLamp;
	promedioIlluminati=acumuladorLamparasIllumin/contadorIlluminatis;

	

	

	if(contadorDescuentoCinco>0){
		descuentoCinco=cantidadLampConDescuentoCinco*precioUnidad*(1-0.05)
	}

	if(contadorDescuentoDiez>0){
		descuentoDiez=cantidadLampConDescuentoDiez*precioUnidad*(1-0.05)
	}


	if(acumuladorLamparasArgenLuz>acumuladorLamparasFelipeLamp && acumuladorLamparasArgenLuz>acumuladorLamparasIllumin){
		marcaConMasVentas="ArgentinaLuz";
	}
	else if(acumuladorLamparasIllumin>acumuladorLamparasArgenLuz && acumuladorLamparasIllumin>acumuladorLamparasFelipeLamp){
		marcaConMasVentas="illuminati";
	}
	else{
		marcaConMasVentas="FelipeLamparas"
	}

	precioTotal=(cantidadTotal*precioUnidad)-descuentoDiez-descuentoCinco

	perdidasEnDescuentos=descuentoCinco+descuentoDiez


	document.write("La empresa recauda en total "+precioTotal+" pesos"+"</br>");

	document.write("La empresa perdio en descuentos "+ perdidasEnDescuentos+" pesos"+"</br>");

	document.write("el promedio de lamparas ArgentinaLuz es de "+promedioArgentLuz+" lamparas" +"</br>");
	document.write("el promedio de lamparas FelipeLamparas es de "+promedioFelipeLamp+" lamparas" +"</br>");
	document.write("el promedio de lamparas Illuminati es de "+promedioIlluminati+" lamparas" +"</br>");


	document.write("La marca que mas ventas realizo es "+marcaConMasVentas+"</br>");



}

