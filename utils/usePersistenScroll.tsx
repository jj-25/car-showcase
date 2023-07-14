import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const usePersistentScroll = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const persistentScroll = localStorage.getItem("persistentScroll");
    if (persistentScroll === null) return;

    window.scrollTo({ top: Number(persistentScroll) });

    if (Number(persistentScroll) === window.scrollY)
      localStorage.removeItem("persistentScroll");
  }, [searchParams]);

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem("persistentScroll", window.scrollY.toString());
  }, []);

  const setSearchParam = useCallback(
    (params: string) => {
      saveScrollPosition();
      router.push(`${params}`);
    },
    [router, saveScrollPosition]
  );

  return { setSearchParam, saveScrollPosition };
};
