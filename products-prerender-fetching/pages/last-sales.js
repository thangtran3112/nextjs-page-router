import { useEffect, useState } from "react";
import useSWR from "swr";

const FIREBASE_URL =
  "https://next-products-fb416-default-rtdb.firebaseio.com/sales.json";

function LastSalesPage(props) {
  //sales will be the initial states prerended by server-side (getStaticProps)
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(FIREBASE_URL, (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   async function fetchData() {
  //     await setIsLoading(true);
  //     const response = await fetch(FIREBASE_URL);
  //     const data = await response.json();
  //     const transformedSales = [];

  //     for (const key in data) {
  //       transformedSales.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       });
  //     }

  //     setSales(transformedSales);
  //     await setIsLoading(false);
  //   }
  //   fetchData();
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  //sales will be the initial states prefetched by server-side
  //after React hydrated, sales will comes from data, fetched from client side
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(FIREBASE_URL);
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformedSales,
    },
    // revalidate: 10,
  };
}

export default LastSalesPage;
