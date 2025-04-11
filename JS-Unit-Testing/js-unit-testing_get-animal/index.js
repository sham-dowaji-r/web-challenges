/*export function getAnimal(animalPluralName) {
  if (animalPluralName === "cats") {
    return "I totally love cats!";
  }

  if (animalPluralName) {
    return `I like ${animalPluralName}!`;
  }

  return "I do not like animals at all!";
}
*/
export function getAnimal(animalPluralName) {
  if (!animalPluralName) {
    return "I do not like animals at all!";
  }

  return animalPluralName === "cats"
    ? "I totally love cats!"
    : `I like ${animalPluralName}!`;
}
