import axios, { AxiosError } from "axios";
import { useState } from "react";

const useAddFormData = <T = any>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("token");

  const formDataHandler = async (url: string, data: any) => {
    setLoading(true);
    setError(null);
    setData(null);
    const config = {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post<T>(url, data, config);
      setData(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message || "An unknown error occurred");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { formDataHandler, data, loading, error };
};

export default useAddFormData;
