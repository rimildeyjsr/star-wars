import "./App.css";
import { CharacterPage } from "./containers/CharacterPage";

function App() {
  return (
    <div className="App">
      <CharacterPage personId={1} />
      <CharacterPage personId={2} />
      <CharacterPage personId={3} />
      <CharacterPage personId={4} />
      <CharacterPage personId={5} />
    </div>
  );
}

export default App;
