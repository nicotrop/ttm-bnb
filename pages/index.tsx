import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>To The Moun</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://tothemoun.com/wp-content/uploads/2021/05/cropped-Logo-Moun.png"
        />
      </Head>
      <main>
        <h1>Hello World!</h1>
        {user ? (
          <>
            <button>
              <a href="/api/auth/logout" className="p-2 rounded-md bg-red-300">
                Logout
              </a>
            </button>
            <div>
              <Image
                src={`${user.picture}`}
                alt={`${user.name}`}
                width={100}
                height={100}
              />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </>
        ) : (
          <button>
            <a href="/api/auth/login" className="p-2 rounded-md bg-red-300">
              Login
            </a>
          </button>
        )}
      </main>
    </>
  );
}
