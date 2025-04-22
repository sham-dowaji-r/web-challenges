import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function ProductsPage(){
    const{data , error} = useSWR('/api/products' , fetcher)

    if (error) return <div>Faild to load</div>
    if(!data) return <div>Loading</div>

    return(
        <div>
            <h1>Products List</h1>
            <ul>
                {data.map((product) =>(
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price:{product.price}</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}