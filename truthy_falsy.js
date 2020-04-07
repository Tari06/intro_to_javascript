#navigating food chains
var eatsPlants = false;
var eatsAnimals = true;
var category = (eatsPlants && eatsAnimals) ? "omnivore" : (eatsAnimals) ? "carnivore" : (eatsPlants) ? "herbivore" : undefined ;
console.log(category);
#output "carnivore "