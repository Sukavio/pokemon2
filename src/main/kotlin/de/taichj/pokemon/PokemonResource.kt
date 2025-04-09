package de.taichj.pokemon

import de.taichj.pokemon.model.Pokemon
import jakarta.inject.Inject
import jakarta.ws.rs.*
import jakarta.ws.rs.core.MediaType
import jakarta.ws.rs.core.Response

@Path("/pokemon")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class PokemonResource {

    @Inject
    lateinit var service: PokemonService

    // GET: Einzelnes Pokemon nach ID abrufen
    @GET
    @Path("/{nr}")
    fun getPokemon(@PathParam("nr") nr: Int): Response {
        val pokemon = service.getPokemonByNr(nr)
        return if (pokemon != null) {
            Response.ok(pokemon).build()
        } else {
            Response.status(Response.Status.NOT_FOUND).entity("Pokemon mit Nr $nr nicht gefunden").build()
        }
    }

    // GET: Liste aller Pokemon abrufen
    @GET
    fun getAllPokemon(): Response {
        val pokemonList = service.getAllPokemon()
        return Response.ok(pokemonList).build()
    }

    // POST: Neues Pokemon erstellen
    @POST
    fun createPokemon(pokemon: Pokemon): Response {
        val createdPokemon = service.createPokemon(pokemon)
        return Response.status(Response.Status.CREATED).entity(createdPokemon).build()
    }

    // PUT: Pokemon aktualisieren
    @PUT
    @Path("/{nr}")
    fun updatePokemon(@PathParam("nr") nr: Int, pokemon: Pokemon): Response {
        val updated = service.updatePokemon(nr, pokemon)
        return if (updated) {
            Response.ok("Pokemon mit ID $nr wurde aktualisiert").build()
        } else {
            Response.status(Response.Status.NOT_FOUND).entity("Pokemon mit ID $nr nicht gefunden").build()
        }
    }

    // DELETE: Pokemon löschen
    @DELETE
    @Path("/{nr}")
    fun deletePokemon(@PathParam("nr") nr: Int): Response {
        val deleted = service.deletePokemon(nr)
        return if (deleted) {
            Response.ok("Pokemon mit ID $nr wurde gelöscht").build()
        } else {
            Response.status(Response.Status.NOT_FOUND).entity("Pokemon mit ID $nr nicht gefunden").build()
        }
    }

    // POST: Mehrere Pokemon auf einmal hinzufügen
    @POST
    @Path("/batch")
    fun createPokemonBatch(pokemonList: List<Pokemon>): Response {
        val createdPokemon = service.createPokemonBatch(pokemonList)
        return Response.status(Response.Status.CREATED).entity(createdPokemon).build()
    }

    // PUT: Mehrere Pokemon aktualisieren
    @PUT
    @Path("/batch")
    fun updatePokemonBatch(pokemonList: List<Pokemon>): Response {
        val updatedPokemon = service.updatePokemonBatch(pokemonList)
        return Response.ok(updatedPokemon).build()
    }
}