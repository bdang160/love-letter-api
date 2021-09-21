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

      <div className='response pa4'>
        <div className='form center pa4 br3 shadow-5'>
          <p className='f3 white'>Response:</p>
          <pre className='pre-scrollable'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br><br></br><br></br><br></br>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br><br></br><br></br><br></br>
            Ut enim ad minim veniam, quis nostrud exercitation <br></br><br></br><br></br><br></br>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br><br></br><br></br><br></br><br></br>
            Duis aute irure dolor in reprehenderit in voluptate <br></br><br></br><br></br><br></br><br></br>
            velit esse cillum dolore eu fugiat nulla pariatur. <br></br><br></br><br></br><br></br>
            Excepteur sint occaecat cupidatat non proident, <br></br><br></br><br></br><br></br>
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </pre>
        </div>
      </div>
    </div>
  );
}

export default TryItOut;