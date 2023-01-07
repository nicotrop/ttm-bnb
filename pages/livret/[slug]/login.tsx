import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import { useAccessToken } from "../../../providers/accessTokenProvider";

const LivretLogin = () => {
  const [password, setPassword] = useState<string>("");
  const [accessToken, setAccessToken] = useAccessToken();

  const router = useRouter();
  const { slug } = router.query;
  const address = `http://localhost:8000/hebergements/getID/${slug}`;
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/hebergement/login/${slug}`,
        { password }
      );
      console.log("data: ", data);

      //   setAccessToken(data.token); //Unable to set accessToken
      //   router.push(`/livret/${slug}/`);
    } catch (error: any) {
      console.log("error: ", error.message);
    }
  };

  const { isLoading, data, error } = useSWR(address, fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="max-w-lg m-auto flex flex-col gap-2 items-center p-4">
      <h1 className="text-xl font-semibold">Login Page</h1>
      <p>Slug: {slug}</p>
      <Image
        src={`${data.img_url}`}
        alt={`${data.company_name} image`}
        width={300}
        height={300}
      />
      <form method="get" onSubmit={handleSubmit} className="flex">
        <input
          className="border-2 border-black bg-white h-10 p-3 text-sm focus:outline-none mr-3"
          type="password"
          name="password"
          placeholder="Password"
          value={password || ""}
          onChange={handleChange}
        />
        <button
          className="border-2 border-black bg-black text-white h-10 px-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LivretLogin;
