import dbConnect from "@/db/connect";

import Product from "@/db/models/product";

//- Make the `handler` function `async` and `await` the connection to the database.
export default async function handler(request, response) {
  await dbConnect();

  // If the `request.method` is `GET`,use the `Product` model to find all products and
  if (request.method === "GET") {
    const products = await Product.find();

    //return them as a response.
    return response.status(200).json(products);
  }
}
