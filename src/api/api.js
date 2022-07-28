import axios from "axios";

export const getGifs = async (category) => {
  const { data } = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=U3vMXriLNtKZPwXyuLQY7fOwVjf7Bwhr&q=${category}&limit=5`
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
