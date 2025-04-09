package de.taichj.pokemon

import de.taichj.pokemon.model.Pokemon
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject

@ApplicationScoped
class PokemonService {

    @Inject
    private lateinit var repository: PokemonRepository

    fun getPokemonByNr(nr: Int) = repository.findByNr(nr)

    fun getAllPokemon() = repository.listAll().map { it.toModel() }

    fun createPokemon(pokemon: Pokemon) = repository.persist(pokemon.toEntity())

    fun updatePokemon(nr: Int, pokemon: Pokemon) = repository.update("{'nr': ?1}", pokemon.toUpdate(nr)).all() == 1L

    fun deletePokemon(nr: Int) = repository.delete("{'nr': ?1}", nr) == 1L

    fun createPokemonBatch(pokemonList: List<Pokemon>) = pokemonList.map { createPokemon(it) }

    fun updatePokemonBatch(pokemonList: List<Pokemon>): List<Pokemon>? {
        pokemonList.map { updatePokemon(it.nr, it) }
        return repository.findByNrs(pokemonList.map { it.nr }).map { it.toModel()}
    }
}