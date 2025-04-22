import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading</div>;

  return (
    <div>
      <h1>Product's Details</h1>
      <h2>{data.name}</h2>
      <p>Price: {data.price}</p>
      <p>{data.description}</p>
    </div>
  );
}
