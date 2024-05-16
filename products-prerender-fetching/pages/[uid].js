function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

/**
 * This will be called at runtime for every incoming requests.
 * In a page, there can only be either getServerSideProps or getStaticProps
 */
export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: "userid-" + userId,
      //cannot set `revalidate` in getServerSideProps
    },
  };
}
