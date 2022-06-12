import React from 'react';
import './TryItOut.css';
import {useEffect, useState} from 'react';

const TryItOut = ({ onInputChange, onButtonSubmit }) => {

  const prependLink = 'http://localhost:3001/'

  const [apiInput, setApiInput] = useState(prependLink + "all");
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    // send HTTP request
    fetch(apiInput)
    .then(response => response.json())
    .then(data => {
      setApiResponse(data)
      console.log(apiResponse)
    })
  }, [])
  
  onInputChange = (event) => {
    setApiInput(prependLink + event.target.value)
  }

  onButtonSubmit = () => {
    // send HTTP request
    fetch(apiInput) 
    .then(response => response.json())
    .then(data => {
      setApiResponse(data)
      console.log(apiResponse)
    })
  }

  return (
    <div>
      <p className='f3'>
        {'Give it a try!'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          {/* TODO (bdang) Change this localhost */}
          <span class="input-group-addon">http://localhost:3001/</span> 
          <input className='f4 pa2 w-70 center' type='tex' defaultValue={"all"} onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Submit</button>
        </div>
        {/* TODO (bdang) Change these Lorem Ipsum things */}
        <p className="help-text">Need some help? Try out these: Lorem Ipsum </p>
      </div>

      <div className='response pa4'>
        <div className='form center pa4 br3 shadow-5'>
          <p className='f3 white'>Response:</p>
          <pre className='pre-scrollable'>
            {JSON.stringify(apiResponse, null, "\t")}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default TryItOut;