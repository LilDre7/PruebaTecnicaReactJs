import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const getFactAndUpdateReact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  // Para recuperar la cita de la imagen
  useEffect(getFactAndUpdateReact, []);

  return { fact, getFactAndUpdateReact };
};
