import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find().populate("reviews");

    response.status(200).json(products);
    return;
  }
  if (request.method === "POST") {
    const productData = request.body;
    try {
      await Product.create(productData);
      return response.status(201).json({ status: "Product created" });
    } catch (error) {
      return response.status(400).json({ error: "Something went wrong" });
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
