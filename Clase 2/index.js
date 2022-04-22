class User {
    constructor(name, surname, books, pets){
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }


    getFullName() {
        return `${this.name} ${this.surname}`
    }

    countPets() {
        return this.pets.length;
    }

    addPet(pet) {
        this.pets.push(pet);
    }

    addBook(book) {
        this.books.push(book);
    }

    getBookNames() {
        return this.books.map(book => book.name);
    }
}

ulises = new User('Ulises' , 'Cruz', [{name: "Desnuda", author:"Raine Miller"},{name:"The Land of Stories", author:"Chris colfer"}],[{name: 'Coco', type:'dog'},{name: 'Musa',type: 'dog'}]);

console.log(ulises.getFullName())

ulises.addPet({name: 'Leah', type: 'cat'})

console.log(`The total of pets are: ${ulises.countPets()}`)

ulises.addBook({name: 'The Fault in Our Stars',author:'John Green'})

console.log(ulises.getBookNames())