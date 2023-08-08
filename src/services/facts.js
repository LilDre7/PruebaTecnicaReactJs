const CAT_ENPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;

export async function getRandomFact() {
  const res = await fetch(CAT_ENPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
}
