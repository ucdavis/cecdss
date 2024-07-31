import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

type MethodTypes = 'post' | 'put' | 'patch';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface SubmitFormHookProps {
    url: string;
    method: MethodTypes;
}

export const useSubmitForm = <T,>(apiDetails: SubmitFormHookProps) => {
  const { url, method } = apiDetails;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: T): Promise<ApiResponse<T>> => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<T> = await axios({
        method,
        url,
        data,
      });

      return { data: response.data };
    } catch (err: any) {
      const errorMessage = axios.isAxiosError(err) && err.response
        ? err.response.data.message || 'An error occurred'
        : 'An unknown error occurred';

      setError(errorMessage);
      return { error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error };
}
