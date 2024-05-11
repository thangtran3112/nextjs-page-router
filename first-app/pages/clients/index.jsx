import Link from "next/link";
function ClientsPage() {
  const clients = [
    { id: "manu", name: "Manuel" },
    { id: "alex", name: "Alex" },
    { id: "julie", name: "Julie" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
