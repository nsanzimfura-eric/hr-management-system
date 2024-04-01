import axios from "axios";
import { useState } from "react";

const useFetchData = <T = any>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const token = localStorage.getItem("token");

  const fetchHandler = async (url: string) => {
    setLoading(true);
    setError(null);
    setData(null);
    const headers = {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    try {
      const response = await axios.get<T>(url, { headers });
      setData(response.data);
    } catch (err: any) {
      setError(error.message || "An unknown error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { fetchHandler, data, loading, error };
};

export default useFetchData;
