import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  if (request.method === "PUT") {
    //- Get the updated product from the request body: `const updatedProduct = request.body;`
    const updatedProduct = request.body;

    //- _Wait_ for `Product.findByIdAndUpdate(id, updatedProduct)`.
    await Product.findByIdAndUpdate(id, updatedProduct);

    //- Respond with a status `200` and the message `{ status: "Product successfully updated." }`.
    response.status(200).json({ status: "Product successfully updated." });
    return;
  }
  if (request.method === "DELETE") {
    try {
      const product = await Product.findById(id);

      if (!product) {
        return response.status(404).json({ status: "Product not found" });
      }

      await Product.findByIdAndDelete(id);

      // احذف كل التقييمات المرتبطة به
      await Review.deleteMany({ _id: { $in: product.reviews } });

      // احذف المنتج نفسه

      return response
        .status(200)
        .json({ status: `Product ${id} and its reviews deleted.` });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Something went wrong" });
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
