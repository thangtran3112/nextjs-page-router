import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    // router.push("/clients/thang/projectA");
    // or router.replace("/clients/thang/projectA"); if we don't want to go back
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: router.query.id,
        clientprojectid: "projectA",
      },
    });
  }

  return (
    <div>
      <h1>The Projects for a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
