import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
  const [images, setImages] = useState();

  // Para recuperar la imagen de cada cita
  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json(res.statusText);
      })
      .then((response) => {
        const { url } = response;
        setImages(url);
      })
      .catch((err) => console.error(err));
  }, [fact]);

  return { images: `${CAT_PREFIX_IMAGE_URL}${images}` };
} // { image: Devuelve la imagen -> useCatImage}
