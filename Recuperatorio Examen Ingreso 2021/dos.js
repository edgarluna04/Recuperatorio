function mostrar()
{
    var nombre;
    var carrera;
    var sexo;
    var cantidadMaterias;
    var notaPromedio;
    var edad;

    var mejorPromedioFisica
    var nombreMejorPromedioFisica;
    flagMejorPromedio==true;

    var nombreAlumnaMasJoven;

    var acumuladorQuimica=0;
    var acumuladorFisica=0;
    var acumuladorSistemas=0;

    var totalAlumnos;
    var porcentajeFisica;
    var porcentajeQuimica;
    var porcentajeSistemas;

    var masMateriasFisica;
    flagFisica==true;

    var masMateriasSistemas;
    flagSistemas==true;

    var estudianteMasMaterias;
    var nombreEstudianteCursaMasMaterias;
    var edadEstudianteCursaMasMaterias;

    var alumnaMasJoven;
    var edadAlumnaMasJoven;
    flagAlumna==true;
 

    for(var i=0;i<500;i++){
        nombre=prompt("Ingrese nombre");

        carrera=prompt("ingrese carrera (Quimica-Fisica-Sistemas)").toLowerCase;
        while(carrera!="quimica" && carrera!="fisica" && carrera!="sistemas"){
            carrera=prompt("Valor incorrecto, ingrese nuevamente (Quimica-Fisica-Sistemas)").toLowerCase;
        }

        sexo=prompt("Ingrese sexo (masculino - femenino -no binario)").toLowerCase;
        while(sexo!="masculino" && sexo!="femenino" && sexo!="no binario"){
            sexo=prompt("Error, ingrese sexo nuevamente(masculino - femenino -no binario)").toLowerCase;
        }

        cantidadMaterias=parseInt(prompt("Ingrese cantidad de materias(entre 1 y 5)"));
        while(isNaN(cantidadMaterias)==true && cantidadMaterias<1 || cantidadMaterias>5){
            cantidadMaterias=prompt("Valor incorrecto, por favor ingrese nuevamente cantidad de materias (entre 1 y 5)");
        }

        notaPromedio=parseFloat(prompt("Ingrese nota promedio del alumno (entre 0 y 10)"));
        while(isNaN(notaPromedio)==true && notaPromedio<0 || notaPromedio>10){
            notaPromedio=parseFloat(prompt("Valor incorrecto, ingrese nuevamete nota promedio del alumno (entre 0 y 10)"));
        }

        edad=parseInt(prompt("Ingrese edad"));
        while(isNaN(edad)==true){
            edad=parseInt(prompt("ERROR, por favor ingrese edad"));
        }


        switch(carrera){
            case "quimica":
                acumuladorQuimica++;
                break;

            case "fisica":
                acumuladorFisica++;
                if(flagMejorPromedio==true || mejorPromedioFisica<notaPromedio){
                    mejorPromedioFisica=notaPromedio;
                    nombreMejorPromedioFisica=nombre;
                    flagMejorPromedio==false;
                }
                if(flagFisica==true || masMateriasFisica<cantidadMaterias){
                    masMateriasFisica=cantidadMaterias;
                    nombreEstudianteCursaMasMaterias=nombre;
                    flagFisica==false;
                }
                break;

            case "sistemas":
                acumuladorSistemas++;
                if(flagSistemas==true || masMateriasSistemas<cantidadMaterias){
                    masMateriasSistemas=cantidadMaterias;
                    nombreEstudianteCursaMasMaterias=nombre;
                    flagSistemas==false;
                }
                break;
        }

        switch(sexo){
            case "femenino":
                if(flagAlumna==true || edadAlumnaMasJoven<edad){
                    edadAlumnaMasJoven=edad;
                    nombreAlumnaMasJoven=nombre;
                    flagAlumna==false;
                }
        }


        


    }

    totalAlumnos=acumuladorFisica+acumuladorQuimica+acumuladorSistemas;

    porcentajeFisica=totalAlumnos/100*acumuladorFisica;
    porcentajeQuimica=totalAlumnos/100*acumuladorQuimica;
    porcentajeSistemas=totalAlumnos/100*acumuladorSistemas;


    document.write("El nombre del mejor promedio de fisica es "+ nombreMejorPromedioFisica+"</br>");

    document.write("El nombre de la alumna mas joven es "+nombreAlumnaMasJoven+ " con "+edadAlumnaMasJoven+" años"+"</br>");

    document.write("El porcentaje de alumnos de fisica es de "+porcentajeFisica +"%"+"</br>");
    document.write("El porcentaje de alumnos de quimica es de "+porcentajeQuimica+"%"+"</br>");
    document.write("El porcentaje de alumnos de sistemas es de "+porcentajeSistemas+"%"+"</br>");

    document.write("La edad del estudiante que cursa mas carreras, exceptuando la carrera de quimica, es de "+edadEstudianteCursaMasMaterias+" y su nombre es "+nombreEstudianteCursaMasMaterias);
}
/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.

*/
