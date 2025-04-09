package de.taichj.pokemon.model

import de.taichj.common.enums.PokemonBiom
import de.taichj.common.enums.PokemonStufe
import de.taichj.common.enums.PokemonTypen

data class Pokemon(
    val nr: Int,
    val name: String,
    val type1: PokemonTypen,
    val type2: PokemonTypen?,
    val stufe: PokemonStufe,
    val biom: PokemonBiom
) {
    fun toEntity() = PokemonEntity(nr, name, type1, type2, stufe, biom)
    fun toUpdate(nr: Int) = Pokemon(nr, name, type1, type2, stufe, biom)
}
