// provider.tsx

import React, { useContext, createContext, FC, useState } from "react";

type AccessTokenContext =
  | [string, React.Dispatch<React.SetStateAction<string>>];

const AccessTokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string>("");
  return (
    <AccessToken.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AccessToken.Provider>
  );
};

const AccessToken = createContext<AccessTokenContext>(["", () => {}]);

const useAccessToken = (): AccessTokenContext =>
  useContext<AccessTokenContext>(AccessToken);

export { AccessTokenProvider, useAccessToken };
