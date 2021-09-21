import React from 'react';
import './TryItOut.css';

const TryItOut = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'Give it a try!'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Submit</button>
        </div>
        <p className="help-text">Need some help? Try out these: Lorem ipsom dolor samet</p>
      </div>

      <div className='response'>
        <div className='form center pa4 br3 shadow-5'>
          <p className='f3 white'>Response:</p>
          
        </div>
      </div>
    </div>
  );
}

export default TryItOut;