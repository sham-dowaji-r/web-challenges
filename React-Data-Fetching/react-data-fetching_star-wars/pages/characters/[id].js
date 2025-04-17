/*Import SWR and create a fetcher

Use SWR to fetch character data

Handle loading and error states

Pass the data into the Card component*/

import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `https://swapi.py4e.com/api/people/${id}`;

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) {
    return (
      <Layout>
        <p>Loading character...</p>
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <p>{error.message}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
