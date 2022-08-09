import axios from "axios";

export const getGifs = async (category) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_URL}&q=${category}&limit=5`
  );

  const values = data.data.map((img) => {
    return {
      id: img.title,
      name: img.title,
      url: img.images.original.url,
    };
  });

  return values;
};
