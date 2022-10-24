class Usuario {

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullname(){
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        const cantidad = this.mascotas.length
        const frase = cantidad > 1 ? `Tiene ${cantidad} mascotas`: 'Tiene una sola mascota' ;
        console.log(`${this.nombre} ${cantidad === 0 ? 'No tiene mascotas': frase}`);
    }
    addBook(libro, autor){
        this.libros.push({libro: libro, autor: autor})
    }
    getBooksNames(){
        const arrayNombresLibros =  this.libros.map((e) => e.libro);
        console.log(arrayNombresLibros);
    }
}
const user = new Usuario('Damian', 'Ferrara')
user.getFullname()

user.addMascota('Perro');
user.addMascota('Donna');
user.countMascotas();

user.addBook('El Psicoanalista', 'John Katzenback');
user.addBook('Muchas vidas, muchos maestros', 'Brian Weiss');
user.addBook('Martin Fierro', 'Jose Hernandez');
user.getBooksNames();