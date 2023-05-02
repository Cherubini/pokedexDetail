//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

// console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


PokeService.getDetail(pokemonName).then(pokemonObject => {
    const myPokemon = Pokemon.createPokemon(pokemonObject);
    
    displayPokemon(myPokemon);
})



function displayPokemon(pokemon) {
    console.log('nostro pokemon', pokemon);
    const pokedex = document.getElementById('section-div');
    pokedex.innerHTML+=`
        <section class="section-style">
        <h1 class='pokemon-name'>${pokemon.name} </h1>
            <img class='pokeImg' src='${pokemon.sprites}'>
            <div class="type-container">
                <span>${createTypes(pokemon)}</span>
            </div>
            <div class="abilities-container">
                <details>
                    <summary> Ability </summary>
                    <p>${createAbilities(pokemon)}</p>
                </details>
            </div>            
            <div class="statistics-container">
                <details>
                    <summary> Statistics </summary>
                    <p>${createStatistics(pokemon)}</p>
                </details>
            </div>
        </section>
    `    
}
function createTypes(pokemon) {
    let types='';
    for (let i = 0; i < pokemon.type.length; i++) {
        const element = pokemon.type[i];
        console.log(element);
        types+=element.name + ' ';        
    }
    return types;
}

function createAbilities(pokemon) {
    return pokemon.abilities.join();
}

function createStatistics(pokemon) {
    let stats='';
    for (let i = 0; i < pokemon.stats.length; i++) {
        const element = pokemon.stats[i];
        console.log(element);
        stats+=element.name +': '+ element.baseValue+'. \n';        
    }
    return stats;
}
/* <section class="section-style">
            <img>
            <div class="type-container">
                
            </div>
            <div class="ability-container">
                <details>
                    <summary> Ability</summary>
                    <p></p>
                </details>
            </div>
        </section> */
