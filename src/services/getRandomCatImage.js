export async function getRandomCatImage() {
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
}
