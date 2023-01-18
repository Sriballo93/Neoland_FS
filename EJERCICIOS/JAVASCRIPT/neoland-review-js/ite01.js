// **Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let categoryofmovies = [];

for (const movie of movies) {
    for (const key of movie.categories) {
        if (!categoryofmovies.includes(key)) {
            categoryofmovies.push(key)
            
        }
    }
}

        // if ( key.categories.includes('comedia') == true || key.categories.includes('aventura') == true || key.categories.categoriesincludes('acción') == true || key.categories.categories.includes('thriller') == true || key.categories.includes('animación') == true) {     categoryofmovies.push(key.categories.indexOf())     
        // }
    


    console.log(categoryofmovies)

    
       // if (property.includes('comedia' || 'aventura' || 'acción'|| 'thriller' || 'animación')) {}
           



