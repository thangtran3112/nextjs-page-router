function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

/**
 * This will be called at runtime for every incoming requests.
 * We do not know the user or cookie in advance.
 * In a page, there can only be either getServerSideProps or getStaticProps
 */
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  //we can access `req` headers or cookies.
  //we can attache headers or cookies to the response `res`

  //console.log(req); // https://nodejs.org/api/http.html#event-request
  //console.log(res); // https://nodejs.org/api/http.html#class-httpserverresponse

  return {
    props: {
      username: "Max",
      //cannot set `revalidate` in getServerSideProps
    },
  };
}
