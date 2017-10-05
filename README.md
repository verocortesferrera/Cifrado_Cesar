# Proyecto Cifrado Cesar
## Realizado por Verónica Cortés
#### Esta es la versión `0.0.1` 

## SeudoCódigo

Solicitar opciones por medio de un prompt lo que necesita
+cifrar
+decifrar
+volver a intentar
```Javascript
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
		}   } while (query ==""||(query != "1" && query != "2")); //en donde si el campo esta vacio no es ni uno ni dos retorna el prompt
```

-Una vez que se escoje la accion solicitar ingreso de frase
funcion para correr por medio de una funcion
+En cifrar
-Si lo ingresado es mayuscula genero un recorrido con algoritmo cesar partiendo de 65
-Si la frase ingresada es minuscula genero un algoritmo con algoritmo cesar partiendo de 97
+En decifrar
-Si lo ingresado esta en mayuscula genero algoritmo desde 90
-Si lo ingresado esta en minuscula genero algoritmo desde 120

en ambos casos se entrega un alert con el resultado


## Diagrama de Flujo

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](http://subirimagen.me/uploads/20171005081052.jpg)

https://cloud.smartdraw.com/share.aspx/?pubDocShare=59931A7788DFA11B7755A31F25D68E67569


###### Quinto Elemento JIJIJI S.A.