//9

// let persona1= {
//     nombre: "Juan",
//     edad: 25,
//     estatura: 1.90
// }
// let persona2= {
//     nombre: "Lucas",
//     edad: 24,
//     estatura: 1.80
// }

// if (persona1.estatura > persona2.estatura && persona1.edad < persona2.edad){
//     console.log(persona1.nombre + " es mas alto y menor que " + persona2.nombre)
// }else if (persona1.estatura < persona2.estatura && persona1.edad > persona2.edad) {
//     console.log(persona2.nombre + " es mas alto y menor que " + persona1.nombre)
// }else if (persona1.estatura > persona2.estatura && persona1.edad > persona2.edad) {
//     console.log(persona1.nombre + " es mas alto y mayor que " + persona2.nombre)
// }else if (persona1.estatura < persona2.estatura && persona1.edad < persona2.edad) {
//     console.log(persona2.nombre + " es mas alto y mayor que " + persona1.nombre)
// }else if (persona1.estatura == persona2.estatura && persona1.edad > persona2.edad){
//     console.log(persona2.nombre + " tiente la misma estatura pero es menor que " + persona1.nombre)
// }else if (persona1.estatura == persona2.estatura && persona1.edad < persona2.edad){
//     console.log(persona1.nombre + " tiente la misma estatura pero es menor que " + persona2.nombre)
// }else if (persona1.estatura > persona2.estatura && persona1.edad == persona2.edad){
//     console.log(persona1.nombre + " es mas alto y tiene la misma edad que " + persona2.nombre)
// }else if (persona1.estatura < persona2.estatura && persona1.edad == persona2.edad){
//     console.log(persona2.nombre + " es mas alto y tiene la misma edad que " + persona1.nombre)
// }else{
//     console.log("Tienen la misma edad Y la misma altura");
// }

//10

// const nombre= prompt('Ingrese su nombre ')
// const edad1 = Number (prompt('Ingrese su edad'))
// const altura= Number(prompt('Ingrese su altura '))
// const vision= Number(prompt('Ingrese su rango de vision'))


// if (edad1 >= 18 && altura >= 1.50 && vision >= 8 ) {
//     alert(nombre + 'estas capacitado para conducir')
// }else {
//     alert(nombre + ' no estas capacitado para conducir')
// }

//11

// let edadIngresada1=Number(prompt('Ingrese su edad '))

// if (edadIngresada1<= 12){
//     alert('Infante')
// }else if (edadIngresada1 <= 18){
//     alert('Adolecente')
// }else if (edadIngresada1 <= 45){
//     alert('Mayor joven')
// }else if (edadIngresada1 <= 100){
//     alert('Anciano')
// }else {
//     alert('¿En realidad tiene esa edad?')
// }

//12

// // const numeroingresado= 25
// // const multiplicador=1

// const numeroingresado=Number(prompt('Ingrese un numero: '))
// const multiplicador= Number(prompt(`Opcion 1: *1
// Opcion2: *2
// Opcion3: *3`))

// if (multiplicador == 2){
//     alert('El doble del numero ingresado es: '+ numeroingresado*2)
// }else if(multiplicador == 3){
//     alert('El triple del numero ingresado es: ' + numeroingresado*3 )
// }else if(multiplicador ==1){
//     alert('El numero ingresado es: '+ numeroingresado)
// }else {
//     alert('Ese valor no esta permitido')
// }

//13

// const entrada= prompt('Tiene entrada?: Si/No ')
// const nombreClient= prompt('Ingrese su nombre: ')


// if(entrada === 'Si' || nombreClient === 'Lucas'){
//     prompt('Tienen pase vip o normal?')
//     alert('bienvenido/a')
// }else if (entrada === 'No'){
//     compra= prompt('Desea comprar una?: Si/No')
//     if(compra === 'Si'){
//         dineroDisponible= Number(prompt('Ingrese dinero disponible: '))
//         alert(dineroDisponible >=1000? 'venta exitosa Bienvenido': 'Lo siento, No tiene dinero suficiente para la compra');

//     }else {
//         alert('Hasta luego');
//     }
// }else {
//     alert('Hasta luego');
// }


//14

// const numeroIncognita = 8


// const numeroingresado1 = parseInt(prompt("Adivina el número del 1 al 10. Tienes 3 intentos:"));

// if (numeroingresado1 === numeroIncognita) {
//     alert("¡Felicidades! ¡Has adivinado el número!");
// } else {
//     if (numeroingresado1< numeroIncognita) {
//         alert("El número es mayor. Te quedan 2 intentos.");
//     } else {
//         alert("El número es menor. Te quedan 2 intentos.");
//     }

//     const segundoIntento = parseInt(prompt("Intenta de nuevo:"));

//     if (segundoIntento === numeroIncognita) {
//         alert("¡Felicidades! ¡Has adivinado el número!");
//     } else {
//         if (segundoIntento < numeroIncognita) {
//             alert("El número es mayor. Te queda 1 intento.");
//         } else {
//             alert("El número es menor. Te queda 1 intento.");
//         }

//         const tercerIntento = parseInt(prompt("Último intento:"));

//         if (tercerIntento === numeroIncognita) {
//             alert("¡Felicidades! ¡Has adivinado el número!");
//         } else {
//             alert("Se han agotado tus intentos. El número era " + numeroIncognita + ".");
//         }
//     }
// }
