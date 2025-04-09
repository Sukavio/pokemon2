package de.taichj.pokemon.model


import de.taichj.common.enums.PokemonBiom
import de.taichj.common.enums.PokemonStufe
import de.taichj.common.enums.PokemonTypen
import io.quarkus.mongodb.panache.common.MongoEntity
import io.quarkus.mongodb.panache.kotlin.PanacheMongoEntity

@MongoEntity(collection = "pokemon", clientName = "primary")
class PokemonEntity(
    var nr: Int,
    var name: String,
    var type1: PokemonTypen,
    var type2: PokemonTypen?,
    var stufe: PokemonStufe,
    var biom: PokemonBiom
) : PanacheMongoEntity() {
    fun toModel() = Pokemon(nr, name, type1, type2, stufe, biom)
}