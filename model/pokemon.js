class Pokemon {
    static getAbilities(abilities) {

        let tempArray = []
        for (let i = 0; i < abilities.length; i++) {
            const elementAbilities = abilities[i];
            tempArray.push(elementAbilities.ability.name)
        }
        return tempArray;
    }

    static getStats(stats) {
        let tempArray = []
        for (let i = 0; i < stats.length; i++) {
            const elementStats = stats[i];
            const newStat=new Stat(elementStats.stat.name,elementStats.stat.base_stat)
            tempArray.push(newStat)
        }
        return tempArray;
    }

    static getTypes(types) {
        const typeTemp = []
        console.log(types);
        for (let i = 0; i < types.length; i++) {
            const elementType = types[i];
            let newType = new Type(elementType.type.name, elementType.type.url);
            typeTemp.push(newType);
        }
        return typeTemp;
    }

    constructor(name, type = [], stats = [], abilities = [], sprites) {
        this.name = name;
        this.type = type;
        this.abilities = abilities;
        this.sprites = sprites;
        this.stats = stats;
    }




    static createPokemon(pokemonObject) {

        console.log(pokemonObject);

        const pokemonObj = new Pokemon(pokemonObject.name, this.getTypes(pokemonObject.types), this.getStats(pokemonObject.stats), this.getAbilities(pokemonObject.abilities))
        return pokemonObj;
    }

}




class Stat {
    constructor(name, baseValue) {
        this.name = name;
        this.baseValue = baseValue
    }

}


class Type {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

