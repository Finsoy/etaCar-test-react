import { useEffect, useState } from 'react';
import { client } from '../api/axionClient';
import { cryptocurrencyType } from '../types/cryptocurrencyType';

const useGetAllCryptocurrencies = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState<cryptocurrencyType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await client.get('/assets');
        setCryptocurrencies(response.data.data);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    cryptocurrencies,
    isLoading,
  };
};

export default useGetAllCryptocurrencies;
