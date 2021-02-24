import React from 'react';


const CardDisplay = ({ name, num, month, year }) => {
    // while ({num}.length < 17) {
    //     num += '•';
    // }
    // while ({month}.length < 2) {
    //     month += '•';
    // }

    // while ({year}.length < 2) {
    //     year += '•';
    // }
  
    return (
      <div className='tc Card dark-gray bg-light-blue br3 w10 h7 pa3 ma2 dib bw2 shadow-5'>
        
        <div className='tc Card__parent'>
          <p>Credit Card Number:</p>
          <p>{num}</p>          
          <p>Expiry Date:</p>
          <p>{month}/{year}</p>         
          <p>Cardholder Name:</p>
          <p>{name}</p>
         
        </div>
      </div>
    );
  }
  
  export default CardDisplay;