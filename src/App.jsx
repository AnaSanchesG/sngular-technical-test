import { CalculateSequence } from "./components/views/CalculateSequence";
import { ResultSequence } from "./components/views/ResultSequence";

import sequence from "./assets/serie.png";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState({});

  const handleCalculateSequence = (value) => {
    setResult(value);
  };
  return (
    <>
      <div className="container p-3 mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-sm-8 col.md-6">
            <ResultSequence result={result} />
            <CalculateSequence onCalculateSequence={handleCalculateSequence} />
          </div>
          <div className="col-10 col-sm-8 col.md-6">
            <p className="">Serie usada: </p>
            <img src={sequence} alt="serie" className="img-serie" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
