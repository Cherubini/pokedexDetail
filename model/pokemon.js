class Pokemon{

    constructor(name,type=[],abilities=[],sprites){
        this.name = name;
        this.type= type;
        this.abilities= abilities;
        this.sprites= sprites;
    }


    // getAbilities(abilities){

    //     let tempArray = []
    //     for (let i = 0; i < abilities.length; i++) {
    //         const elementAbilities = abilities[i];
    //         console.log('abilities ', elementAbilities);
    //         tempArray.push(elementAbilities)
    //     }
    //     return tempArray;
    // }

    //  getStats(stats){
    //     let tempArray = []
    //     for (let i = 0; i < stats.length; i++) {
    //         const elementStats = stats[i];
    //         tempArray.push(elementStats)
    //     }
    //     return tempArray;
    // }

    //  getType(type){
    //     let tempArray = []
    //     for (let i = 0; i < type.length; i++) {
    //         const elementType = type[i];
    //         tempArray.push(elementType)
    //     }
    //     return tempArray;
    // }


  static createPokemon(name,type=[],abilities=[],stats=[],sprites){
        const typeTemp = []
        for (let i = 0; i < type.length; i++) {
            const elementType = type[i].type.name;
            typeTemp.push(elementType)
        }
        
        const abilityTemp=[];
        for (let i = 0; i < abilities.length; i++) {
            const elementAbilities = abilities[i].ability.name;
            abilityTemp.push(elementAbilities)
        }



        const pokemonObj= new Pokemon(name, typeTemp, abilityTemp, sprites)
        return pokemonObj;
    }







}


