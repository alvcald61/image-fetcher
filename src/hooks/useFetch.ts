import { useState, useEffect, useCallback } from "react";
import { LoaderFunctionArgs } from "react-router-dom";
import { Photo, ImageResponse } from "../types/ImageType";

type fetcher = (
  args: LoaderFunctionArgs,
  page: number,
  size: number
) => Promise<Photo[]>;

function useFetch(page: number = 0, fetchFunction: fetcher) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState<Photo[]>([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      const res = await fetchFunction({} as LoaderFunctionArgs, page, 10);
      await setList((prev) => [...prev, ...res]);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, [page, fetchFunction]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  const reset = () => {
    setList([]);
    setLoading(true);
    setError(false);
  }

  return { loading, error, list, reset };
}

export default useFetch;
