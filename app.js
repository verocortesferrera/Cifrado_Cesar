
// agregar un promp para contultar lo que quiere hacer
function pregunta(){
	do{
		var query = prompt("Indique en número lo que quiere hacer: 1 cifrar - 2 Decifrar");
	//alternativa de los posibles ingresos
		if(query !=""){ // si el campo no esta vacio se ejecuta las opciones
			if(query =="1"){// si la respuesta es uno llama a cifrado
				cipher();// invoca al cifrado
			}else if (query == "2"){ // si la respuesta es dos llama a decifrado
				decipher();//invoca al decifrado
			}else { // otra cosa retorna ingresar opcion valida
				alert("Ingrese una opción valida");
			}
		}
	} 
	while(query ==""||(query != "1" && query != "2")){	
	}//en donde si el campo esta vacio no es ni uno ni dos retorna el prompt
}

function cipher(string){
	do{
		var answer = prompt("Ingrese la frase que desea cifrar"); // ingresar frase 
		var ascii = []; // reciba un arreglo de la frase
		var newString = []; // array vacio para guardar el nuevo cifrado que saldra de la transformacion
        var validateStr = /^[a-zA-Z]*$/;//variable para validar que los carácteres ingresados sean alfabéticos
 		
 

        if (answer!="" && validateStr.test(answer)==true){ //test verifica que lo ingresado corra mientras el string no este vacio se ejecuta el recorrido	e
            
            for(var i=0; i<answer.length;i++){ //recorrer letra por letra la frase
               
                if(answer[i]===answer[i].toUpperCase()){ //condicion si lo ingresado es mayuscula(letra por letra
                    ascii.push((answer.charCodeAt(i)-65+33)%26+65);// entonces el conteo se agrega con cifrado desde ascii 65
                    
                }else if (answer[i]===answer[i].toLowerCase()){ // pero si letra es minuscula 
               		ascii.push((answer.charCodeAt(i)-97+33)%26+97); // entonces recorro agoritmo partiendo del 97(posicion ascii minuscula) e ingreso a una array
            }
            
            } for(var x = 0 ; x<ascii.length; x++){ // ahora recorro el nuevo array creado recien para transformar a letras
                newString.push(String.fromCharCode(ascii[x])); // ingreso en una variable el nuevo recorrido del array para transformar a letras
            }
            //si todo lo anterior se ejecuta correctamente un alert devolverá el nuevo string del msje codificado
        return alert("El mensaje \'" + answer + "\'' ha sido cifrado, el nuevo mensaje es \'" + newString.join("") + "\'");   
        }else{
            alert("favor ingrese parámetros válidos");// si no se cumple las condiciones me regresa un aviso
        }
    } while (answer == "" || validateStr.test(answer)==false); // tes retorna true o fals, verifica si no se cumplen las condiciones se reinicia el loop
}
	
function decipher(string){
do{
        var consult = prompt("Favor ingresar mensaje a decifrar");// crear variable para ingresar la palabra a decifrar
        var ascii =[]; //crear variable vacía para guardar números correspondientes a carácteres ascii
        var newStr = []; //crear variable vacía que guarde números ascii convertidos en carácteres
        var validateStr = /^[a-zA-Z]*$/; //variable de validación alfabética
        
        if (consult!="" && validateStr.test(consult)==true){//si se cumple condición de que prompt no esté vacío y cumple con la validación alfabética, se ejecuta lo que viene a continuación

            for(var i=0; i<consult.length;i++){//recorrer lo ingresado en prompt 
                //si string ingresado es mayúscula, entonces conteo del ascii empieza desde el carácter 90 (Z ascii, ya que debe contar de derecha a izquierda)
                if(consult[i]===consult[i].toUpperCase()){
                    //ingresa números correspondientes a cáda carácter ascii en la variable vacía declarada arriba, haciendo el decifrado de derecha a izquierda
                    ascii.push((consult.charCodeAt(i)-90-33+26)%26+90);
                    //si string ingresado es en minúscula, se ejecuta lo que viene a continuación
                }else if (consult[i]===consult[i].toLowerCase()){
                //ingresar cada carácter del prompt que es minúscula en un nuevo array, comenzando el conteo desde carácter número 122, que es la z minúscula ya que es hacia atrás.
                ascii.push((consult.charCodeAt(i)-122-33+26)%26+122);
            }

            } for(var x = 0 ; x<ascii.length; x++){//segundo bucle recorre el array de números ascii
                //ingresar en nuevo array carácteres del recorrido anterior uno a uno con un nuevo ciclo
                newStr.push(String.fromCharCode(ascii[x]));
            }

        return alert("su mensaje descifrado es " + newStr.join("")); //si todo lo anterior se cumple retorna alert con resultado del descifrado
        }else{
            //si no se cumplen condiciones arroja mensaje de error
            alert("favor ingrese parámetros válidos");
        }
        //luego del mensaje de error el while devuelve el bucle al inicio del do, en el cual solicita que ingrese los datos con parámetros válidos
    } while (consult == "" || validateStr.test(consult)==false); 
}

pregunta();