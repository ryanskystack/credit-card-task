import React, {useState}  from 'react';
import './App.css';
import './card.css';
// import validator from 'validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Form from '../component/Form';
// import CardDisplay from '../component/CardDisplay';
// import CardBack from '../component/CardBack';
import 'tachyons';


const App = () => {

  const [name, setName] = useState("Your Name") ; 
  const [num, setNum] = useState("•••• •••• •••• ••••") ; 
  const [month, setMonth] = useState("••") ; 
  const [year, setYear] = useState("••") ; 
  const [cvn, setCvn] = useState("•••") ; 
  const [errorMessage, setErrorMessage] = useState('') 
  const [btnAvail, setBtnAvail] = useState(true) ; 
  const [validName, setValidName] = useState(false) ; 
  const [validNum, setValidNum] = useState(false) ; 
  const [validMonth, setValidMonth] = useState(false) ; 
  const [validYear, setValidYear] = useState(false) ; 
  const [validCvn, setValidCvn] = useState(false) ; 
    
  const nameChangeHandler = (event) => {
       console.log(event.target.value) ; // debug
       const validate = /^[a-zA-Z]*$/;
       let isValid = validate.test(event.target.value);
         if (isValid === true)
         {  
             setName(event.target.value);
             setErrorMessage('');
             setValidName(true);
             if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
             {
               setBtnAvail(false);
             }
         }else
         {
             setErrorMessage('Enter valid Cardholder Name!');
             setBtnAvail(true);         }
  };

  const numChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      // let isValid = validator.isCreditCard(event.target.value) ;
      const validate = /^[0-9]*$/;
       let isValid = validate.test(event.target.value);
        if (!event.target.value.length) 
        {
           setErrorMessage('Please input');
        } 
          else if(isValid === true)
        {
            setNum(event.target.value);
            setErrorMessage('');
            setValidNum(true);
            if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
            {
              setBtnAvail(false);
            }
        }
          else
        {
            setErrorMessage('Enter valid CreditCard Number!'); 
        }
  }; 

  const monthChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      setMonth(event.target.value) ;
      setValidMonth(true);
      if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
      {
        setBtnAvail(false);
      }
  };

  const yearChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      setYear(event.target.value) ;
      setValidYear(true);
      if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
      {
        setBtnAvail(false);
      }
  };

  const cvnChangeHanlder = (event) => {
       console.log(event.target.value) ; // debug
       
       const validate = /^[0-9]*$/;
       let isValid = validate.test(event.target.value);
       if(isValid === true)
       {
           setCvn(event.target.value);
           setErrorMessage('');
           setValidCvn(true);
           if ({validName}  && {validNum}  && {validMonth}  && {validYear}  && {validCvn} )
           {
             setBtnAvail(false);
           }
       }
         else
       {
           setErrorMessage('Enter valid CVN!'); 
       }
  } ;

  const flipBack = () => {
    document.getElementById("flipperContainer").classList.toggle('hover');
    // setFlip("{transform: rotateY(180deg)}");
  };

 


  const handleSubmit = (event) => {
    alert('The submition has processed');
    event.preventDefault();
  } ;



  return (

    <div className="App">
      <div>
        <h1 className="pa2 white bg-black ">         
          Card Details
        </h1>   
      </div>
      <div className='mw9 center '>
        <div className='flex justify-center'>
          <div className= 'flip-container w-100 w-30-ns pa2' id="flipperContainer">
            <div className='flipper'>
              <div className="rccs__card--front fl.rccs--flipped">
                <div className="rccs__card__background" >
                </div>
                <div className="rccs__chip">
                </div>
                <div className="rccs__number rccs--focused">
                  <p>{num}</p>   
                </div>
                <div className="rccs__expiry__valid">
                  Expire Date
                </div>
                 <div className="rccs__expiry__value rccs--focused">
                  <p>{month}/{year}</p>  
                </div>
                <div className="rccs__name rccs--focused">
                  <p>{name}</p>
                </div>
              </div>              
              <div className="rccs__card--back fl .rccs--flipped">
                <div className="rccs__card__background">
                </div>
                <div className="rccs__stripe">
                </div>
                <div className="rccs__signature">
                </div>
                <div className="rccs__cvc rccs--focused">
                  {cvn}
                </div>
              </div>                        
            </div>
          </div>
          <div className='fr  w-60-ns '>
            <div className='tc center  pa4 ma2 bw2 '>
              <p className='red'>
                {errorMessage}
              </p>
              <form onSubmit={handleSubmit} >
            <div className='pa3'>
                <label>Required Cardholder Name:</label>
                <input 
                    type="text" 
                    name="cardholderName" 
                    placeholder="Cardholder Name" 
                    onChange={nameChangeHandler}
                    maxLength='16' 
                    minLength='16' 
                    required
                />
            </div>
            <div className='pa3 '>
                <label>Required Credit Card Number:</label>
                <input 
                    type="text" 
                    name="creditCardNumber" 
                    placeholder="No More Than 16 Digit Number" 
                    maxLength='16' 
                    minLength='16' 
                    required
                    onChange={numChangeHandler}
                />

            </div>
            <div className='flex justify-center pa3'>
              <label>Expire Date:</label>
              <FormControl variant="outlined">
                <InputLabel>Month</InputLabel>
                <Select
                  name="expiryDateMonth" 
                  value={month} 
                  onChange={monthChangeHandler}
                  label="Expiry Month"
                >
                  <MenuItem value={'01'}>01</MenuItem>
                  <MenuItem value={'02'}>02</MenuItem>
                  <MenuItem value={'03'}>03</MenuItem>
                  <MenuItem value={'04'}>04</MenuItem>
                  <MenuItem value={'05'}>05</MenuItem>
                  <MenuItem value={'06'}>06</MenuItem>
                  <MenuItem value={'07'}>07</MenuItem>
                  <MenuItem value={'08'}>08</MenuItem>
                  <MenuItem value={'09'}>09</MenuItem>
                  <MenuItem value={'10'}>10</MenuItem>
                  <MenuItem value={'11'}>11</MenuItem>
                  <MenuItem value={'12'}>12</MenuItem>
                </Select>
              </FormControl>   
              <FormControl variant="outlined">
                <InputLabel>Year</InputLabel>
                <Select 
                  name="expiryYear" 
                  value={year} 
                  onChange={yearChangeHandler}
                  label="Expiry Year"
                >
                  <MenuItem value={'21'}>21</MenuItem>
                  <MenuItem value={'22'}>22</MenuItem>
                  <MenuItem value={'23'}>23</MenuItem>
                  <MenuItem value={'24'}>24</MenuItem>
                  <MenuItem value={'25'}>25</MenuItem>
                  <MenuItem value={'26'}>26</MenuItem>
                  <MenuItem value={'27'}>27</MenuItem>
                  <MenuItem value={'28'}>28</MenuItem>
                  <MenuItem value={'29'}>29</MenuItem>
                  <MenuItem value={'30'}>30</MenuItem>
                </Select>
              </FormControl>   
            </div>
            <div className='pa3'>
                <label>Required CVN, please flip the Credit Card to check:</label>
                <input 
                    type="text"
                    name="cvn"  
                    placeholder="3 Digit Number" 
                    maxLength='3' 
                    minLength='3' 
                    required
                    onclick={flipBack} 
                    onChange={cvnChangeHanlder}

                />      
            </div>  
            <button 
              className='f6 link br-pill ph3 pa3 pv2 mb2 dib  ' 
              type='submit' 
              disabled={btnAvail}
            >Make payment
            </button>
          </form>
            </div>
          </div>
        </div>
      </div>
      <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
         <small class="f6 db tc">© 2021 <b class="ttu">Stomble Inc</b>., All Rights Reserved</small>
         <div class="tc mt3">
           <a href="/Language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
           <a href="/Terms/"    title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
           <a href="/Privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
         </div>
      </footer>
    </div>
    );
};



export default App;

