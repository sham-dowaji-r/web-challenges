import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditProduct(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    //- it stores the submitted data in a variable called `productData`
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    //- uses `mutate` after a successful fetch to update the product detail page.
    if (response.ok) {
      mutate();
      setIsEditMode(false);
    }
  }
  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json(); // نستنى الرد من السيرفر
      router.push("/"); // نرجّع المستخدم للصفحة الرئيسية
    } else {
      console.error("Failed to delete. Status code:", response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews && data.reviews.length > 0 && (
        <div>
          <h3>Reviews</h3>
          <ul>
            {data.reviews.map((review) => (
              <li key={review._id}>
                <strong>{review.title}</strong>
                <p>{review.text}</p>
                <small>Rating: {review.rating} / 5</small>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} defaultValues={data} />
      )}
      <StyledLink href="/">Back to all</StyledLink>
      <br />
      <button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        {isEditMode ? "Cansel" : "Edit"}
      </button>
      <button type="button" onClick={() => handleDeleteProduct(id)}>
        Delete
      </button>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
