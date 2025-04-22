import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(`/api/random-character`, fetcher);

  if (error) return <div>Failed</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Random Character</h1>
      <ul>
        <li>{data.firstName}</li>
        <li>{data.lastName}</li>
        <li>{data.age}</li>
        <li>{data.email}</li>
        <li>{data.twitter}</li>
      </ul>
    </div>
  );
}
