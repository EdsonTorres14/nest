// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//         console.log('constructor llamado')
//     }
// }

// Forma corta

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string,
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speack() {
        console.log(`${this.name}, ${this.name}`)
    }
}

export const charmander = new Pokemon(4, 'Charmander')



console.log(charmander.imageUrl)

charmander.speack();
charmander.scream();