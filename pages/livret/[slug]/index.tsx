import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useAccessToken } from "../../../providers/accessTokenProvider";

const LivretHome = () => {
  const [accessToken, setAccessToken] = useAccessToken();

  const router = useRouter();
  const { slug } = router.query;
  const address = `http://localhost:8000/hebergements/getID/${slug}`;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { isLoading, data, error } = useSWR(address, fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  //   console.log(accessToken); accessToken is undefined

  return (
    <div className="max-w-lg m-auto flex flex-col gap-2 items-center p-4">
      <h1 className="text-xl font-semibold">Livret Home Page</h1>
      <p>Slug: {slug}</p>
      <Image
        src={`${data.img_url}`}
        alt={`${data.company_name} image`}
        width={300}
        height={300}
      />
    </div>
  );
};

export default LivretHome;
