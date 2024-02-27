import { useLoaderData } from "react-router-dom";
export function loader({ params }) {
  const { slug } = params;
  return { slug };
}

const SingleItem = () => {
  const { slug } = useLoaderData();
  return (
    <p>
      Single Item Page <img src={slug.image} alt={slug.name} />
      {slug.title}
      {slug.price}
    </p>
  );
};
export default SingleItem;
