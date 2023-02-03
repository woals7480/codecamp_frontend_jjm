import { useEffect, useRef } from "react";

export default function useRefPage() {
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    passwordRef.current?.focus();
  }, []);

  return (
    <>
      <input type="password" ref={passwordRef} />
    </>
  );
}
