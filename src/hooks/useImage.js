import { useEffect, useState } from 'react';

const useImage = (filename) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/Images/${filename}`);
        setImage(response.default);
      } catch (err) {
        //console.log(err);
        setError(err);
        setImage(null);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [filename]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
