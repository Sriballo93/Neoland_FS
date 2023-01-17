// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
 const users = [
 	{id: 1, name: 'Abel'},
 	{id:2, name: 'Julia'},
 	{id:3, name: 'Pedro'},
 	{id:4, name: 'Amanda'}
 ];

 const mappedUsers = users.map(user => user.name )
 console.log(mappedUsers)

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
{id: 1, name: 'Abel'},
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'},
{id:4, name: 'Amanda'}
 ];

 const mappedUsers2 = users2.map(user21 => {
if (user21.name.includes('A') === true) {
    return user21.name = 'Anacleto';
} else {
    return user21.name
}
 }
    )
 console.log(mappedUsers2)

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
    {isVisited:true, name: 'Tokyo'}, 
    {isVisited:false, name: 'Madagascar'},
 	{isVisited:true, name: 'Amsterdam'}, 
 	{isVisited:false, name: 'Seul'}
 ];

 let citiesVisitadas= [];
 const mappedcities = cities.map(city =>{
    if (city.isVisited === true) {
        citiesVisitadas.push(city.name + ' Visitado')  
    } /*else {
    //     return city.name + " No Visitado"
     }*/
 } )

 console.log(citiesVisitadas)