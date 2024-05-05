

import { CalculateSeries } from './components/views/CalculateSeries';
import { Resultseries } from './components/views/Resultseries';

import serie from './assets/serie.png';

import './App.css';
import { useState } from 'react';


const App = () => {

  const [result, setResult] = useState({});

  const handleCalculateSeries = (value) =>{
    setResult(value);
  }
  return (
    <>
    <div className="container p-3 mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-8 col-sm-6">
          <div className='card-content'>
            <h1 className='title-content'>N Calculator</h1>
            <Resultseries result={result}/>
            <img src={serie} alt="serie" className="img-serie" />  
          </div>
          <CalculateSeries onCalculateSeries={handleCalculateSeries}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;