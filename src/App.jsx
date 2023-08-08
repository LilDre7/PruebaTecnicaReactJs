import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFacts";

// ***************** 🐧 ***************** //

function App() {
  const { fact, getFactAndUpdateReact } = useCatFact();
  const { images } = useCatImage({ fact });

  // Funciona para seguir a otra imagen
  const handleButton = async () => {
    getFactAndUpdateReact();
  };

  return (
    <main>
      <div>
        <h1>App cats pretty</h1>
        <button onClick={handleButton}>New images cat fact 🎉</button>
        {fact && <p>{fact}</p>}
        {images && <img src={images} alt="Cat with phrase on it's face" />}
      </div>
    </main>
  );
}

export default App;
