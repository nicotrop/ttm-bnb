import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Header() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold text-gray-900">To the Moun</h1>
        </Link>
        {user ? (
          <>
            <button>
              <Link
                href="/api/auth/logout"
                className="p-2 rounded-md bg-red-300"
              >
                Logout
              </Link>
            </button>
          </>
        ) : (
          <button>
            <Link href="/api/auth/login" className="p-2 rounded-md bg-red-300">
              Login
            </Link>
          </button>
        )}
      </div>
    </header>
  );
}
