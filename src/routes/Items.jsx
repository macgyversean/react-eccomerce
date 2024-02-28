import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  const url = "https://fakestoreapi.com/products";
  const data = await fetch(url).then((response) => response.json());
  return { data };
}

const Items = () => {
  const { data } = useLoaderData();
  return (
    <>
      <h2>ITEM LIST:</h2>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.id}>
                {item.title}
                <img src={item.image} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Items;
