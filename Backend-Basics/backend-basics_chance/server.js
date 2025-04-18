import { createServer } from "node:http";
import Chance from "chance";
const chance = new Chance();

export const server = createServer((request, response) => {
  response.setHeader("Content-Type", "text/Plain");
  response.statusCode = 200;

  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession({ rank: true }); // يطلع مثلا: "Senior"

  const message = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  response.end(message);
});
