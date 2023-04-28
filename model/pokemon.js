class Pokemon{
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
            
    constructor(name,type=[],stats=[],abilities=[],sprites){
        this.name = name;
        this.type= type;
        this.abilities= abilities;
        this.sprites= sprites;
        this.stats=stats;
    }
            
    addStat(name,baseValue){
        const newStat= new Type(name,baseValue);
        this.stats.push(newStat);
    }

    addType(name,url){
        const newType= new Type(name,url);
        this.types.push(newType);
    }


  static createPokemon(name,type=[],stats=[], abilities=[],sprites){
        const typeTemp = []
        for (let i = 0; i < type.length; i++) {
  //        const elementType = type[i].type.name;
//          typeTemp.push(elementType)
            let newType=new Type(type[i].type.name,type[i].type.url);
            typeTemp.push(newType);
        }
        
        const abilityTemp=[];
        for (let i = 0; i < abilities.length; i++) {
            const elementAbilities = abilities[i].ability.name;
            abilityTemp.push(elementAbilities)
        }

        const statsTemp=[];
        for (let i = 0; i < abilities.length; i++) {
            const elementStatistics = stats[i];
            let stat= new Stat(elementStatistics.stat.name,elementStatistics.base_stat)
            statsTemp.push(/*elementStatistics*/stat)
        }

        const pokemonObj= new Pokemon(name, typeTemp, statsTemp, abilityTemp, sprites)
        return pokemonObj;
    }

}




class Stat{
    constructor(name, baseValue)
        {
        this.name=name;
        this.baseValue=baseValue
        }

}


class Type{
    constructor(name, url)
        {
        this.name=name;
        this.url=url;
        }
}
