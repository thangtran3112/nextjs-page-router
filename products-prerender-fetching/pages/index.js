import path from "path";
//using "fs/promises" will wrap all fs calls in a promise, such as readFile, writeFile
import fs from "fs/promises";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * getStaticProps will not be visible to client-side
 * getStaticProps will be called by NextJs when pages are pre-generated
 * This method needs to return a object with 'props' key, which can contain any data,
 * which will be passed to the component.
 * getStaticProps will be called during "build" and also fetching the data during "rendering"
 */
export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  // return { props: { products: ['Product 1', 'Product 2'] } };

  return {
    props: {
      products: data.products,
    },
    //regenerate page every 10 seconds, store new pages in cache to serve future requests
    revalidate: 10,
  };
}

export default HomePage;
