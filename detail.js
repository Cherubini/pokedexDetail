//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

// console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);

PokeService.getDetail(pokemonName).then(pokemonObject => {
    const myPokemon = Pokemon.createPokemon(pokemonObject.name, pokemonObject.types, pokemonObject.abilities, pokemonObject.stats, pokemonObject.sprites.front_default);
    imagePokemon(myPokemon);
    displayPokemon(myPokemon);
})



function displayPokemon(pokemon) {
    console.log('nostro pokemon', pokemon);
    const pokedex = document.getElementById('section-div');
    pokedex.innerHTML+=`
        <section class="section-style">
        <h1 class='title1'>${pokemon.name} </h1>
            <img class='pokeImg' src='${pokemon.sprites}'>
            <div class="type-container">
                <span>${createTypes(pokemon)}</span>
            </div>
            <div class="ability-container">
                <details>
                    <summary> Ability </summary>
                    <p>${createAbilities(pokemon)}</p>
                </details>
            </div>
        </section>
    `    
}
function createTypes(pokemon) {
    return pokemon.type.join();
}

function createAbilities(pokemon) {
    return pokemon.abilities.join();
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

function imagePokemon(pokemon) {

}

