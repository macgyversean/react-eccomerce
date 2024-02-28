import { useLoaderData, redirect } from "react-router-dom";
export async function loader({ params }) {
  const { slug } = params;
  const url = `https://fakestoreapi.com/products/${slug}`;
  const data = await fetch(url).then((response) => response.json());
  return { data };
}

const singleItem = () => {
  const { data } = useLoaderData();

  return (
    <>
      <h2>ITEM LIST:</h2>
      <ul>
        <li>
          {data.id}
          {data.title}
          {data.category}
          {data.descritption}
          <img src={data.image} />
        </li>
      </ul>
    </>
  );
};
export default singleItem;
