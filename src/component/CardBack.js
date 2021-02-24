import React from 'react';


const CardBack = ({ cvn }) => {
    return (
      <div className='tc dark-gray bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
        <div className='tc'>
          <p>CVN:</p>
          <p>{cvn}</p>
        </div> 
      </div>
    );
}
  
export default CardBack;

