import { useEffect, useState } from "react";
import { getGifs } from "../api/api";

export const useGifs = (category) => {
  const [imagenes, setImagenes] = useState([]);

  const getImgs = async () => {
    const data = await getGifs(category);
    setImagenes(data);
  };

  useEffect(() => {
    getImgs();
  }, []);

  return imagenes;
};
