/*EJERCICIO: Siguiendo con la página de ejemplo
 obtén desde la consola, al menos de 2 formas diferentes
*/
// 1.	El primér párrafo que hay dentro del div ‘lipsum’
    //let p1 = Array.from(document.getElementsByTagName('p'))[0]; //primer párrafo del documento
let divLipsum = document.getElementById('lipsum');
console.log(Array.from(divLipsum.getElementsByTagName('P'))[0]); //1ª forma
//let p1 = divLipsum.firstChild; // OJO !! Muestra otra cosa
let p1=divLipsum.firstElementChild;
console.log(divLipsum.firstElementChild); //2ª forma


// 2.	El segundo párrafo de ‘lipsum’
let p2 = Array.from(divLipsum.getElementsByTagName('p'))[1];
console.log(p2); //1ª forma
console.log(p1.nextElementSibling); // 2ª forma, como siguiente hermano de p1

// 3.	El último item de la lista
let todos_li= Array.from(document.querySelectorAll('ul li'));  //aseguramos que son li de ul
let ultimo= todos_li[todos_li.length - 1];
console.log(ultimo);  //1ª forma

elemento_ul = document.getElementsByTagName('ul')[0];
console.log(elemento_ul.lastElementChild); //2ª forma

// 4.	La label de ‘Escoge sexo’
// todos_label= document.getElementsByTagName('label');
// console.log(todos_label.lastElementChild);
// let arrayLabels= Array.from(todos_label);
// console.log(arrayLabels);
let inputsSexo= document.getElementsByName('sexo');
//console.log(inputsSexo);
console.log(inputsSexo[0].parentElement);