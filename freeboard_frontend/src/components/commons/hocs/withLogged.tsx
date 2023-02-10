import { useEffect, useState } from "react";

export const WithLogged = (Component: any) => (props: any) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogged(true);
    }
  }, []);
  return <Component {...props} />;
};
