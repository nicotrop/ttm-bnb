import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

export default function Home(): React.ReactNode {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <section className="py-6 flex flex-col	items-center">
        <h1 className="text-3xl font-bold">Hello World!</h1>
        {user && (
          <div className="flex flex-col	items-center justify-center">
            <Image
              src={`${user.picture}`}
              alt={`${user.name}`}
              width={100}
              height={100}
            />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )}
        <button>
          <Link href={"/hebergements"}>Hebergement</Link>
        </button>
      </section>
    </>
  );
}
