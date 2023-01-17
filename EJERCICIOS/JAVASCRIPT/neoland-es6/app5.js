// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filteredAges = ages.filter( age => age > 18)
console.log(filteredAges)

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const filteredAges1 = ages.filter(age => age % 2 == 0  )
console.log(filteredAges1)

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];

 let lol = [];
 const filteredStreamers = streamers.filter(human => human.gameMorePlayed.includes('League of Legends') === true)

 console.log(filteredStreamers)
// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.


const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];


 let streamersWithN = [];
 const filteredStreamers1 = streamers1.filter(human2 => {
	if (human2.name.includes('n') === true) {
		streamersWithN.push(human2)
	}
 })

 console.log(streamersWithN)

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const legendsMay = [];
const streamersFiltered =  streamers.filter(human3 => {
	if (human3.gameMorePlayed.includes('Legends') && human3.age > 35) {
		legendsMay.push(human3);
		human3.gameMorePlayed.toUpperCase; 
	} else if (human3.gameMorePlayed.includes('Legends') && human3.age < 35){
		legendsMay.push(human3)
	}
})
	
console.log(legendsMay)

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
 ];

const filteredStreamers2 = streamers3.filter(inputName => {
	if (inputName.name.includes(inputName) === true) {
		return streamers3.name
	}
})

// filteredStreamers2('Ru')


// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
//              <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//              <meta http-equiv="X-UA-Compatible" content="ie=edge">
//              <title>Document</title>
// </head>
// <body>
//   <input type="text" data-function="toFilterStreamers"/>
//   <button data-function="toShowFilterStreamers">Filter</button>
// </body>
// </html>