import axios from "axios";
import { useState } from "react";

const useDelete = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false); // Changed to success status
  const [error, setError] = useState<any>(null);

  const deleteHandler = async (url: string) => {
    const token = localStorage.getItem("token");

    setLoading(true);
    setError(null);
    setSuccess(false);

    const config = {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    try {
      await axios.delete(url, config); // Changed to axios.delete
      setSuccess(true); // Set success status on successful deletion
    } catch (err: any) {
      setError(err.responseText || err.message || "An unknown error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleteHandler, success, loading, error };
};

export default useDelete;
