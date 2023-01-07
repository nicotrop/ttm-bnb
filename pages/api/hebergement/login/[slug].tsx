import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

type ResponseError = {
  message: string;
};

type DataResponse = {
  data: {
    token: string;
  };
};

export default async function getToken(
  req: NextApiRequest,
  res: NextApiResponse<any | ResponseError>
) {
  const query = req.query;
  const { slug } = query;
  const { password } = req.body;

  try {
    const { data }: DataResponse = await axios.post(
      `http://localhost:8000/hebergements/login/${slug}`,
      { password }
    );
    setCookie("logement", data.token, {
      req,
      res,
      maxAge: 60 * 60 * 24 * 1000,
      secure: true,
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    });
    return res.status(201).send(data);
  } catch (error: any) {
    console.log("error: ", error.message);
    return res.status(500).json({ message: error.message });
  }
}
