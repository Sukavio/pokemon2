package de.taichj.pokemon

import de.taichj.pokemon.model.PokemonEntity
import io.quarkus.mongodb.panache.kotlin.PanacheMongoRepository
import jakarta.enterprise.context.ApplicationScoped

@ApplicationScoped
class PokemonRepository : PanacheMongoRepository<PokemonEntity> {
    fun findByNr(nr: Int) = find("{'nr': ?1}", nr).firstResult()
    fun findByNrs(nrs: List<Int>) = find("{'nr': {\$in: ?1}}", nrs).list()
}