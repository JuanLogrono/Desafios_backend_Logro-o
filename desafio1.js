
class Usuario {
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
     return( console.log(`${this.nombre} ${this.apellido}`));
    }
    addMascota(newPet){
        return(
            this.mascotas.push(newPet),
            console.log(this.mascotas)
        );

    }
    countMascotas(){
        return(console.log(this.mascotas.length));
    }

    addBook(libro){
       return( 
        this.libros.push(libro),
        console.log(this.libros));
    }
    getBookNames(){
        const arrayTitulos=[]
       return( this.libros.forEach(books => {
       arrayTitulos.push(books.titulo)
       }),
       console.log(arrayTitulos))
    }

}

class Libro {
    constructor(titulo,autor){
        this.titulo=titulo
        this.autor= autor
    }
}
const libro1= new Libro("It","Stephen King");
const libro2=new Libro("1984", "George Orwell")
/* const libro3=new Libro("Harry Potter","J.K. Rowling") */

const usuario= new Usuario("juan","Logroño",[libro1,libro2],["perro","gato"])
console.log(usuario)
usuario.getFullName()
usuario.addMascota("pez")
usuario.countMascotas()
usuario.addBook(new Libro("Harry Potter","J.K. Rowling"))
usuario.getBookNames()
