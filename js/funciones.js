/*EJERCICIO: Para hacer los ejercicios de este tema descárgate esta
 página de ejemplo y ábrela en tu navegador. 
 Obtén por consola, al menos de 2 formas diferentes:*/

// 1.	El elemento con id ‘input2’ (1ª forma)
let elemento1 = document.getElementById('input2');
console.log(elemento1);

// 1.	El elemento con id ‘input2’ (2ª forma)
let elementos = document.getElementsByTagName('input');
console.log(elementos); //como es una coleción, la tranformamos en array
elementos= Array.from(elementos);
console.log(elementos)
elemento1= elementos[1]; // segundo elemento del array
console.log(elemento1);


// 2.	La colección de párrafos (1ª forma)
let parrafos = document.getElementsByTagName('P');  //Obtiene colección de P
console.log(parrafos);
// 2.	La colección de párrafos (2ª forma)
parrafos= document.querySelectorAll('P'); // Obtiene NodeList de P
console.log(parrafos);

// 3.	Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’ (1ª forma)
let nodoLipsum = document.getElementById('lipsum');
parrafos = nodoLipsum.getElementsByTagName('p');
console.log(parrafos);

// 3.	Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’ (2ª forma)
nodoLipsum = document.getElementById('lipsum');
parrafos = nodoLipsum.querySelectorAll('p');
console.log(parrafos);

// 4.	El formulario (ojo, no la colección con el formulario sino sólo el formulario)
let formulario1 = document.forms[0]; //primera forma
console.log(formulario1);

let formulario2 = Array.from(document.forms)[0]; //segunda forma
console.log(formulario2);

// 5.	Todos los inputs
let inputs = document.getElementsByTagName('input');
console.log(inputs); //como colección
console.log(Array.from(inputs)); //como array

// 6.	Sólo los inputs con nombre ‘sexo’
let inputs_sexo = document.getElementsByName('sexo');
console.log(inputs_sexo);

// 7.	Los items de lista de la clase ‘important’ (sólo los LI)
let lista_importantes = document.querySelectorAll('li.important');
console.log(lista_importantes);

