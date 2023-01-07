import React, { useContext, createContext, useState } from "react";

export const AccessTokenContext = createContext<
  [string, (token: string) => void]
>(["", () => {}]);

export const AccessTokenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [accessToken, setAccessToken] = useState("");

  return (
    <AccessTokenContext.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessToken = () => {
  return useContext(AccessTokenContext);
};
