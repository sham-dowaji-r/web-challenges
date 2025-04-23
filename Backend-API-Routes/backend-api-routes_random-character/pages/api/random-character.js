import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    email: chance.email(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    country: chance.country(),
    profession: chance.profession(),
  };
  res.status(200).json(character);
}
