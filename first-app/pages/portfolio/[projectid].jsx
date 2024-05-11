import { useRouter, withRouter } from "next/router";
function PortProjectPage({ params }) {
  const router = useRouter();
  // console.log(router.pathname);
  // console.log(router.query);
  // use `router.query.projectid` to get access to the dynamic route parameter

  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  );
}

export default PortProjectPage;
