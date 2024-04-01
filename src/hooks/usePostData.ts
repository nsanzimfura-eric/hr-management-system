import axios from "axios";
import { useState } from "react";

const usePostData = <T = any>() => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);

  const postHandler = async (url: string, postData: T) => {
    const token = localStorage.getItem("token");

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
      const response = await axios.post<T>(url, postData, config);
      setData(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "An unknown error occurred"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { postHandler, data, loading, error };
};

export default usePostData;
