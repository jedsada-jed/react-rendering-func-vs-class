import { memo, useMemo, useState } from "react";
import "./App.css";

const ComB = () => <p>ComB</p>;
const ComD = memo(() => <p>ComD</p>);
const renderComE = () => <p>ComE</p>;

function App() {
  const [valBool, setValBool] = useState(false);

  const ComA = useMemo(() => () => <p>ComA</p>, []);
  const ComC = () => <p>ComC</p>;
  const renderComF = () => <p>ComF</p>;
  const renderComG = useMemo(() => () => <p>ComG</p>, []);

  return (
    <div className="App">
      <h1>HOME</h1>
      <ComA />
      <ComB />
      <ComC />
      <ComD />
      {renderComE()}
      {renderComF()}
      {renderComG()}
      <button onClick={() => setValBool(!valBool)}>Set Val Bool</button>
    </div>
  );
}

export default App;
