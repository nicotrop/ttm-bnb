import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const Hebergements = () => {
  const address = "http://localhost:8000/hebergements/get";
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { isLoading, data, error } = useSWR(address, fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <section className="max-w-lg m-auto flex flex-col gap-2 items-center p-4">
      <h1 className="text-xl font-semibold">All Hebergements Page</h1>
      <p>{data[0].company_name}</p>
      <Image
        src={`${data[0].img_url}`}
        alt={`${data[0].company_name} image`}
        width={300}
        height={300}
      />
      <button className="p-2 border-black border-2 border-solid rounded-lg">
        <Link href={`/hebergements/${data[0].slug}`}>{`View Profile`}</Link>
      </button>
    </section>
  );
};

export default Hebergements;
