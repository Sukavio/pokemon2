db = db.getSiblingDB("pokemon_db");

db.createUser({
    user: "ash",
    pwd: "misty",
    roles: [{ role: "readWrite", db: "pokemon_db" }]
});

db.createCollection("pokemon");

db.pokemon.insertMany([
    {"nr": 1, "name": "Bisasam", "type1": "Grass", "type2": "Poison", "stufe": "Basic", "biom": "Forest"},
    {"nr": 2, "name": "Bisaknosp", "type1": "Grass", "type2": "Poison", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 3, "name": "Bisaflor", "type1": "Grass", "type2": "Poison", "stufe": "Stage2", "biom": "Forest"},
    {"nr": 4, "name": "Glumanda", "type1": "Fire", "type2": "Dragon", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 5, "name": "Glutexo", "type1": "Fire", "type2": "Dragon", "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 6, "name": "Glurak", "type1": "Fire", "type2": "Dragon", "stufe": "Stage2", "biom": "Mountain"},
    {"nr": 7, "name": "Schiggy", "type1": "Water", "type2": "Steel", "stufe": "Basic", "biom": "Lake"},
    {"nr": 8, "name": "Schillok", "type1": "Water", "type2": "Steel", "stufe": "Stage1", "biom": "Lake"},
    {"nr": 9, "name": "Turtok", "type1": "Water", "type2": "Steel", "stufe": "Stage2", "biom": "Lake"},
    {"nr": 10, "name": "Raupy", "type1": "Bug", "type2": null, "stufe": "Basic", "biom": "Forest"},
    {"nr": 11, "name": "Safcon", "type1": "Bug", "type2": null, "stufe": "Stage1", "biom": "Forest"},
    {"nr": 12, "name": "Smettbo", "type1": "Bug", "type2": "Flying", "stufe": "Stage2", "biom": "Meadow"},
    {"nr": 13, "name": "Hornliu", "type1": "Bug", "type2": "Poison", "stufe": "Basic", "biom": "Forest"},
    {"nr": 14, "name": "Kokuna", "type1": "Bug", "type2": "Poison", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 15, "name": "Bibor", "type1": "Bug", "type2": "Poison", "stufe": "Stage2", "biom": "Forest"},
    {"nr": 16, "name": "Taubsi", "type1": "Normal", "type2": "Flying", "stufe": "Basic", "biom": "Meadow"},
    {"nr": 17, "name": "Tauboga", "type1": "Normal", "type2": "Flying", "stufe": "Stage1", "biom": "Meadow"},
    {"nr": 18, "name": "Tauboss", "type1": "Normal", "type2": "Flying", "stufe": "Stage2", "biom": "Meadow"},
    {"nr": 19, "name": "Rattfratz", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 20, "name": "Rattikarl", "type1": "Normal", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 21, "name": "Habitak", "type1": "Normal", "type2": "Flying", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 22, "name": "Ibitak", "type1": "Normal", "type2": "Flying", "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 23, "name": "Rettan", "type1": "Poison", "type2": null, "stufe": "Basic", "biom": "Swamp"},
    {"nr": 24, "name": "Arbok", "type1": "Poison", "type2": null, "stufe": "Stage1", "biom": "Swamp"},
    {"nr": 182, "name": "Pichu", "type1": "Electric", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 25, "name": "Pikachu", "type1": "Electric", "type2": null, "stufe": "Stage1", "biom": "Forest"},
    {"nr": 26, "name": "Raichu", "type1": "Electric", "type2": null, "stufe": "Stage2", "biom": "Forest"},
    {"nr": 252, "name": "Gorochu", "type1": "Electric", "type2": "Fire", "stufe": "Stage2", "biom": "Forest"},
    {"nr": 27, "name": "Sandan", "type1": "Ground", "type2": null, "stufe": "Basic", "biom": "Desert"},
    {"nr": 28, "name": "Sandamer", "type1": "Ground", "type2": null, "stufe": "Stage1", "biom": "Desert"},
    {"nr": 29, "name": "Nidoran", "type1": "Poison", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 30, "name": "Nidorina", "type1": "Poison", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 31, "name": "Nidoqueen", "type1": "Poison", "type2": null, "stufe": "Stage2", "biom": "Grassland"},
    {"nr": 32, "name": "Nidorino", "type1": "Poison", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 34, "name": "Nidoking", "type1": "Poison", "type2": "Ground", "stufe": "Stage2", "biom": "Grassland"},
    {"nr": 44, "name": "Piepi", "type1": "Fairy", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 45, "name": "Pixi", "type1": "Fairy", "type2": null, "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 46, "name": "Vulpix", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 47, "name": "Vulnona", "type1": "Fire", "type2": null, "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 48, "name": "Pummeluff", "type1": "Normal", "type2": "Fairy", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 49, "name": "Knuddeluff", "type1": "Normal", "type2": "Fairy", "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 50, "name": "Zubat", "type1": "Poison", "type2": "Flying", "stufe": "Basic", "biom": "Cave"},
    {"nr": 51, "name": "Golbat", "type1": "Poison", "type2": "Flying", "stufe": "Stage1", "biom": "Cave"},
    {"nr": 52, "name": "Myrapla", "type1": "Grass", "type2": "Poison", "stufe": "Basic", "biom": "Swamp"},
    {"nr": 53, "name": "Duflor", "type1": "Grass", "type2": "Poison", "stufe": "Stage1", "biom": "Swamp"},
    {"nr": 54, "name": "Giflor", "type1": "Grass", "type2": "Poison", "stufe": "Stage2", "biom": "Swamp"},
    {"nr": 55, "name": "Paras", "type1": "Bug", "type2": "Grass", "stufe": "Basic", "biom": "Forest"},
    {"nr": 56, "name": "Parasek", "type1": "Bug", "type2": "Grass", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 57, "name": "Bluzuk", "type1": "Bug", "type2": "Poison", "stufe": "Basic", "biom": "Forest"},
    {"nr": 58, "name": "Omot", "type1": "Bug", "type2": "Poison", "stufe": "Stage1", "biom": "Meadow"},
    {"nr": 59, "name": "Digda", "type1": "Ground", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 60, "name": "Digdri", "type1": "Ground", "type2": null, "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 61, "name": "Mauzi", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 62, "name": "Snobilikat", "type1": "Normal", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 63, "name": "Enton", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Lake"},
    {"nr": 64, "name": "Entoron", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Lake"},
    {"nr": 65, "name": "Menki", "type1": "Fighting", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 66, "name": "Rasaff", "type1": "Fighting", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 67, "name": "Fukano", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Meadow"},
    {"nr": 68, "name": "Arkani", "type1": "Fire", "type2": null, "stufe": "Stage1", "biom": "Meadow"},
    {"nr": 69, "name": "Quapsel", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Lake"},
    {"nr": 70, "name": "Quaputzi", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Lake"},
    {"nr": 71, "name": "Quappo", "type1": "Water", "type2": "Fighting", "stufe": "Stage2", "biom": "Lake"},
    {"nr": 72, "name": "Abra", "type1": "Psychic", "type2": null, "stufe": "Basic", "biom": "Cave"},
    {"nr": 73, "name": "Kadabra", "type1": "Psychic", "type2": null, "stufe": "Stage1", "biom": "Cave"},
    {"nr": 74, "name": "Simsala", "type1": "Psychic", "type2": null, "stufe": "Stage2", "biom": "Cave"},
    {"nr": 75, "name": "Machollo", "type1": "Fighting", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 76, "name": "Maschock", "type1": "Fighting", "type2": null, "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 77, "name": "Machomei", "type1": "Fighting", "type2": null, "stufe": "Stage2", "biom": "Mountain"},
    {"nr": 78, "name": "Knofensa", "type1": "Grass", "type2": "Poison", "stufe": "Basic", "biom": "Forest"},
    {"nr": 79, "name": "Ultrigaria", "type1": "Grass", "type2": "Poison", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 80, "name": "Sarzenia", "type1": "Grass", "type2": "Poison", "stufe": "Stage2", "biom": "Forest"},
    {"nr": 81, "name": "Tentacha", "type1": "Water", "type2": "Poison", "stufe": "Basic", "biom": "Ocean"},
    {"nr": 82, "name": "Tentoxa", "type1": "Water", "type2": "Poison", "stufe": "Stage1", "biom": "Ocean"},
    {"nr": 83, "name": "Kleinstein", "type1": "Rock", "type2": "Ground", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 84, "name": "Georok", "type1": "Rock", "type2": "Ground", "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 85, "name": "Geowaz", "type1": "Rock", "type2": "Ground", "stufe": "Stage2", "biom": "Mountain"},
    {"nr": 86, "name": "Ponita", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 87, "name": "Gallopa", "type1": "Fire", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 88, "name": "Flegmon", "type1": "Water", "type2": "Psychic", "stufe": "Basic", "biom": "Lake"},
    {"nr": 89, "name": "Lahmus", "type1": "Water", "type2": "Psychic", "stufe": "Stage1", "biom": "Lake"},
    {"nr": 90, "name": "Magnetilo", "type1": "Electric", "type2": "Steel", "stufe": "Basic", "biom": "City"},
    {"nr": 91, "name": "Magneton", "type1": "Electric", "type2": "Steel", "stufe": "Stage1", "biom": "City"},
    {"nr": 92, "name": "Porenta", "type1": "Normal", "type2": "Flying", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 93, "name": "Dodu", "type1": "Normal", "type2": "Flying", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 94, "name": "Dodri", "type1": "Normal", "type2": "Flying", "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 95, "name": "Jurob", "type1": "Water", "type2": "Ice", "stufe": "Basic", "biom": "Ocean"},
    {"nr": 96, "name": "Jugong", "type1": "Water", "type2": "Ice", "stufe": "Stage1", "biom": "Ocean"},
    {"nr": 97, "name": "Sleima", "type1": "Poison", "type2": null, "stufe": "Basic", "biom": "Swamp"},
    {"nr": 98, "name": "Sleimok", "type1": "Poison", "type2": null, "stufe": "Stage1", "biom": "Swamp"},
    {"nr": 99, "name": "Muschas", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Ocean"},
    {"nr": 100, "name": "Austos", "type1": "Water", "type2": "Ice", "stufe": "Stage1", "biom": "Ocean"},
    {"nr": 101, "name": "Nebulak", "type1": "Ghost", "type2": "Poison", "stufe": "Basic", "biom": "Cave"},
    {"nr": 102, "name": "Alpollo", "type1": "Ghost", "type2": "Poison", "stufe": "Stage1", "biom": "Cave"},
    {"nr": 103, "name": "Gengar", "type1": "Ghost", "type2": "Poison", "stufe": "Stage2", "biom": "Cave"},
    {"nr": 104, "name": "Onix", "type1": "Rock", "type2": "Ground", "stufe": "Basic", "biom": "Cave"},
    {"nr": 105, "name": "Traumato", "type1": "Psychic", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 106, "name": "Hypno", "type1": "Psychic", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 107, "name": "Krabby", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Beach"},
    {"nr": 108, "name": "Kingler", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Beach"},
    {"nr": 109, "name": "Voltobal", "type1": "Electric", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 110, "name": "Lektrobal", "type1": "Electric", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 111, "name": "Owei", "type1": "Grass", "type2": "Psychic", "stufe": "Basic", "biom": "Forest"},
    {"nr": 112, "name": "Kokowei", "type1": "Grass", "type2": "Psychic", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 113, "name": "Tragosso", "type1": "Ground", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 114, "name": "Knogga", "type1": "Ground", "type2": null, "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 115, "name": "Kicklee", "type1": "Fighting", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 116, "name": "Nockchan", "type1": "Fighting", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 117, "name": "Schlurp", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 118, "name": "Smogon", "type1": "Poison", "type2": null, "stufe": "Basic", "biom": "Swamp"},
    {"nr": 119, "name": "Smogmog", "type1": "Poison", "type2": null, "stufe": "Stage1", "biom": "Swamp"},
    {"nr": 120, "name": "Rihorn", "type1": "Ground", "type2": "Rock", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 121, "name": "Rizeros", "type1": "Ground", "type2": "Rock", "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 122, "name": "Chaneira", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 123, "name": "Tangela", "type1": "Grass", "type2": null, "stufe": "Basic", "biom": "Forest"},
    {"nr": 124, "name": "Kangama", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 125, "name": "Seeper", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Ocean"},
    {"nr": 126, "name": "Seemon", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Ocean"},
    {"nr": 127, "name": "Goldini", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Lake"},
    {"nr": 128, "name": "Golking", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Lake"},
    {"nr": 129, "name": "Sterndu", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Ocean"},
    {"nr": 130, "name": "Starmie", "type1": "Water", "type2": "Psychic", "stufe": "Stage1", "biom": "Ocean"},
    {"nr": 131, "name": "Pantimos", "type1": "Psychic", "type2": "Fairy", "stufe": "Basic", "biom": "City"},
    {"nr": 132, "name": "Sichlor", "type1": "Bug", "type2": "Flying", "stufe": "Basic", "biom": "Forest"},
    {"nr": 133, "name": "Rossana", "type1": "Ice", "type2": "Psychic", "stufe": "Basic", "biom": "Cave"},
    {"nr": 134, "name": "Elektek", "type1": "Electric", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 135, "name": "Magmar", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Volcano"},
    {"nr": 136, "name": "Pinsir", "type1": "Bug", "type2": null, "stufe": "Basic", "biom": "Forest"},
    {"nr": 137, "name": "Tauros", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 138, "name": "Karpador", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Lake"},
    {"nr": 139, "name": "Garados", "type1": "Water", "type2": "Flying", "stufe": "Stage1", "biom": "Lake"},
    {"nr": 140, "name": "Lapras", "type1": "Water", "type2": "Ice", "stufe": "Basic", "biom": "Ocean"},
    {"nr": 141, "name": "Ditto", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 142, "name": "Evoli", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 143, "name": "Aquana", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Lake"},
    {"nr": 144, "name": "Blitza", "type1": "Electric", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 145, "name": "Flamara", "type1": "Fire", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 146, "name": "Porygon", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 147, "name": "Amonitas", "type1": "Rock", "type2": "Water", "stufe": "Basic", "biom": "Cave"},
    {"nr": 148, "name": "Amoroso", "type1": "Rock", "type2": "Water", "stufe": "Stage1", "biom": "Cave"},
    {"nr": 149, "name": "Kabuto", "type1": "Rock", "type2": "Water", "stufe": "Basic", "biom": "Cave"},
    {"nr": 150, "name": "Kabutops", "type1": "Rock", "type2": "Water", "stufe": "Stage1", "biom": "Cave"},
    {"nr": 151, "name": "Aerodactyl", "type1": "Rock", "type2": "Flying", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 153, "name": "Relaxo", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 154, "name": "Arktos", "type1": "Ice", "type2": "Flying", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 155, "name": "Zapdos", "type1": "Electric", "type2": "Flying", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 156, "name": "Lavados", "type1": "Fire", "type2": "Flying", "stufe": "Basic", "biom": "Volcano"},
    {"nr": 157, "name": "Dratini", "type1": "Dragon", "type2": null, "stufe": "Basic", "biom": "Lake"},
    {"nr": 158, "name": "Dragonir", "type1": "Dragon", "type2": null, "stufe": "Stage1", "biom": "Lake"},
    {"nr": 159, "name": "Dragoran", "type1": "Dragon", "type2": "Flying", "stufe": "Stage2", "biom": "Lake"},
    {"nr": 160, "name": "Mewtu", "type1": "Psychic", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 161, "name": "Mew", "type1": "Psychic", "type2": null, "stufe": "Basic", "biom": "Forest"},
    {"nr": 162, "name": "Endivie", "type1": "Grass", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 163, "name": "Lorblatt", "type1": "Grass", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 164, "name": "Meganie", "type1": "Grass", "type2": null, "stufe": "Stage2", "biom": "Grassland"},
    {"nr": 165, "name": "Feurigel", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Volcano"},
    {"nr": 166, "name": "Igelavar", "type1": "Fire", "type2": null, "stufe": "Stage1", "biom": "Volcano"},
    {"nr": 167, "name": "Tornupto", "type1": "Fire", "type2": null, "stufe": "Stage2", "biom": "Volcano"},
    {"nr": 168, "name": "Karnimani", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Lake"},
    {"nr": 169, "name": "Tyracroc", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Lake"},
    {"nr": 170, "name": "Impergator", "type1": "Water", "type2": null, "stufe": "Stage2", "biom": "Lake"},
    {"nr": 171, "name": "Wiesor", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 172, "name": "Wiesenior", "type1": "Normal", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 173, "name": "Hoothoot", "type1": "Normal", "type2": "Flying", "stufe": "Basic", "biom": "Forest"},
    {"nr": 174, "name": "Noctuh", "type1": "Normal", "type2": "Flying", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 175, "name": "Ledyba", "type1": "Bug", "type2": "Flying", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 176, "name": "Ledian", "type1": "Bug", "type2": "Flying", "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 177, "name": "Webarak", "type1": "Bug", "type2": "Poison", "stufe": "Basic", "biom": "Forest"},
    {"nr": 178, "name": "Ariados", "type1": "Bug", "type2": "Poison", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 179, "name": "Iksbat", "type1": "Poison", "type2": "Flying", "stufe": "Stage1", "biom": "Cave"},
    {"nr": 180, "name": "Lampi", "type1": "Water", "type2": "Electric", "stufe": "Basic", "biom": "Ocean"},
    {"nr": 181, "name": "Lanturn", "type1": "Water", "type2": "Electric", "stufe": "Stage1", "biom": "Ocean"},
    {"nr": 183, "name": "Pii", "type1": "Fairy", "type2": null, "stufe": "Basic", "biom": "Mountain"},
    {"nr": 184, "name": "Fluffeluff", "type1": "Fairy", "type2": "Normal", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 185, "name": "Togepi", "type1": "Fairy", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 186, "name": "Togetic", "type1": "Fairy", "type2": "Flying", "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 187, "name": "Natu", "type1": "Psychic", "type2": "Flying", "stufe": "Basic", "biom": "Forest"},
    {"nr": 188, "name": "Xatu", "type1": "Psychic", "type2": "Flying", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 189, "name": "Voltilamm", "type1": "Electric", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 190, "name": "Waaty", "type1": "Electric", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 191, "name": "Ampharos", "type1": "Electric", "type2": null, "stufe": "Stage2", "biom": "Grassland"},
    {"nr": 192, "name": "Blubella", "type1": "Grass", "type2": "Poison", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 193, "name": "Papungha", "type1": "Grass", "type2": "Flying", "stufe": "Stage2", "biom": "Forest"},
    {"nr": 194, "name": "Quaxo", "type1": "Water", "type2": null, "stufe": "Stage2", "biom": "Lake"},
    {"nr": 195, "name": "Morlord", "type1": "Water", "type2": "Ground", "stufe": "Basic", "biom": "Swamp"},
    {"nr": 196, "name": "Psiana", "type1": "Psychic", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 197, "name": "Nachtara", "type1": "Dark", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 198, "name": "Kramurx", "type1": "Dark", "type2": "Flying", "stufe": "Basic", "biom": "Cave"},
    {"nr": 199, "name": "Laschoking", "type1": "Water", "type2": "Psychic", "stufe": "Stage2", "biom": "Lake"},
    {"nr": 200, "name": "Traunfugil", "type1": "Ghost", "type2": null, "stufe": "Basic", "biom": "Cave"},
    {"nr": 201, "name": "Icognito", "type1": "Psychic", "type2": null, "stufe": "Basic", "biom": "Ruins"},
    {"nr": 202, "name": "Woingenau", "type1": "Psychic", "type2": null, "stufe": "Basic", "biom": "Ruins"},
    {"nr": 203, "name": "Girafarig", "type1": "Normal", "type2": "Psychic", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 204, "name": "Tannza", "type1": "Bug", "type2": null, "stufe": "Basic", "biom": "Forest"},
    {"nr": 205, "name": "Forstellka", "type1": "Bug", "type2": "Steel", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 206, "name": "Dummisel", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Cave"},
    {"nr": 207, "name": "Skorgla", "type1": "Ground", "type2": "Flying", "stufe": "Basic", "biom": "Desert"},
    {"nr": 208, "name": "Stahlos", "type1": "Steel", "type2": "Ground", "stufe": "Stage1", "biom": "Cave"},
    {"nr": 209, "name": "Snubbull", "type1": "Fairy", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 210, "name": "Granbull", "type1": "Fairy", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 211, "name": "Baldorfish", "type1": "Water", "type2": "Poison", "stufe": "Basic", "biom": "Lake"},
    {"nr": 212, "name": "Scherox", "type1": "Bug", "type2": "Steel", "stufe": "Stage1", "biom": "Forest"},
    {"nr": 213, "name": "Pottrott", "type1": "Bug", "type2": "Rock", "stufe": "Basic", "biom": "Cave"},
    {"nr": 214, "name": "Skaraborn", "type1": "Bug", "type2": "Fighting", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 215, "name": "Sniebel", "type1": "Dark", "type2": "Ice", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 216, "name": "Teddiursa", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Forest"},
    {"nr": 217, "name": "Ursaring", "type1": "Normal", "type2": null, "stufe": "Stage1", "biom": "Forest"},
    {"nr": 218, "name": "Schneckmag", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Volcano"},
    {"nr": 219, "name": "Magcargo", "type1": "Fire", "type2": "Rock", "stufe": "Stage1", "biom": "Volcano"},
    {"nr": 220, "name": "Quiekel", "type1": "Ice", "type2": "Ground", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 221, "name": "Keifel", "type1": "Ice", "type2": "Ground", "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 222, "name": "Corasonn", "type1": "Water", "type2": "Rock", "stufe": "Basic", "biom": "Ocean"},
    {"nr": 223, "name": "Remoraid", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Ocean"},
    {"nr": 224, "name": "Octillery", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Ocean"},
    {"nr": 225, "name": "Botogel", "type1": "Ice", "type2": "Flying", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 226, "name": "Mantax", "type1": "Water", "type2": "Flying", "stufe": "Basic", "biom": "Ocean"},
    {"nr": 227, "name": "Panzaeron", "type1": "Steel", "type2": "Flying", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 228, "name": "Hunduster", "type1": "Dark", "type2": "Fire", "stufe": "Basic", "biom": "Cave"},
    {"nr": 229, "name": "Hundemon", "type1": "Dark", "type2": "Fire", "stufe": "Stage1", "biom": "Cave"},
    {"nr": 230, "name": "Seedraking", "type1": "Water", "type2": "Dragon", "stufe": "Stage2", "biom": "Ocean"},
    {"nr": 231, "name": "Phanpy", "type1": "Ground", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 232, "name": "Donphan", "type1": "Ground", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 233, "name": "Porygon2", "type1": "Normal", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 234, "name": "Damhirplex", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 235, "name": "Farbeagle", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Forest"},
    {"nr": 236, "name": "Rabauz", "type1": "Fighting", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 237, "name": "Kapoera", "type1": "Fighting", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 238, "name": "Kussilla", "type1": "Ice", "type2": "Psychic", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 239, "name": "Elekid", "type1": "Electric", "type2": null, "stufe": "Basic", "biom": "City"},
    {"nr": 240, "name": "Magby", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Volcano"},
    {"nr": 241, "name": "Miltank", "type1": "Normal", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 242, "name": "Heiteira", "type1": "Normal", "type2": null, "stufe": "Stage2", "biom": "Grassland"},
    {"nr": 243, "name": "Raikou", "type1": "Electric", "type2": null, "stufe": "Legendary", "biom": "Grassland"},
    {"nr": 244, "name": "Entei", "type1": "Fire", "type2": null, "stufe": "Legendary", "biom": "Volcano"},
    {"nr": 245, "name": "Suicune", "type1": "Water", "type2": null, "stufe": "Legendary", "biom": "Lake"},
    {"nr": 246, "name": "Larvitar", "type1": "Rock", "type2": "Ground", "stufe": "Basic", "biom": "Mountain"},
    {"nr": 247, "name": "Pupitar", "type1": "Rock", "type2": "Ground", "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 248, "name": "Tyranitar", "type1": "Rock", "type2": "Dark", "stufe": "Stage2", "biom": "Mountain"},
    {"nr": 249, "name": "Lugia", "type1": "Psychic", "type2": "Dragon", "stufe": "Legendary", "biom": "Ocean"},
    {"nr": 250, "name": "Ho-Oh", "type1": "Fire", "type2": "Fairy", "stufe": "Legendary", "biom": "Grassland"},
    {"nr": 251, "name": "Celebi", "type1": "Psychic", "type2": "Grass", "stufe": "Mythical", "biom": "Forest"},
    {"nr": 253, "name": "Honoguma", "type1": "Fire", "type2": null, "stufe": "Basic", "biom": "Volcano"},
    {"nr": 254, "name": "Kurusu", "type1": "Water", "type2": null, "stufe": "Basic", "biom": "Lake"},
    {"nr": 255, "name": "Rinring", "type1": "Grass", "type2": null, "stufe": "Stage1", "biom": "Grassland"},
    {"nr": 257, "name": "Animon", "type1": "Normal", "type2": "Flying", "stufe": "Basic", "biom": "Grassland"},
    {"nr": 258, "name": "Wolfman", "type1": "Dark", "type2": "Fighting", "stufe": "Basic", "biom": "Cave"},
    {"nr": 259, "name": "SkullKraken", "type1": "Water", "type2": "Ghost", "stufe": "Legendary", "biom": "Ocean"},
    {"nr": 260, "name": "Kotora", "type1": "Electric", "type2": null, "stufe": "Basic", "biom": "Grassland"},
    {"nr": 261, "name": "Raitora", "type1": "Electric", "type2": null, "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 262, "name": "Cactus", "type1": "Grass", "type2": null, "stufe": "Basic", "biom": "Desert"},
    {"nr": 264, "name": "Shibireon", "type1": "Electric", "type2": null, "stufe": "Stage1", "biom": "City"},
    {"nr": 265, "name": "Aquafeon", "type1": "Water", "type2": null, "stufe": "Stage1", "biom": "Lake"},
    {"nr": 266, "name": "Plux", "type1": "Flying", "type2": "Dragon", "stufe": "Stage1", "biom": "Mountain"},
    {"nr": 267, "name": "Buru", "type1": "Dark", "type2": "Fire", "stufe": "Basic", "biom": "Cave"},
]);
