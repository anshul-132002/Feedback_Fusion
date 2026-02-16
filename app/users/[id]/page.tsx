type PageProps = {
  params: {
    id: string;
  };
};

export default async function UserDetailPage({ params }: PageProps) {
  const { id } = await params; // 👈 THIS is the id

  // fetch single user
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("User not found");
  }

  const user = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-muted-foreground">{user.email}</p>

      <div className="mt-4 space-y-2">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
      </div>
    </div>
  );
}
