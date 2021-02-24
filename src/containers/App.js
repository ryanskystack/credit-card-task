import React, {useState}  from 'react';
import './App.css';
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

  const [name, setName] = useState("") ; 
  const [num, setNum] = useState("") ; 
  const [month, setMonth] = useState("") ; 
  const [year, setYear] = useState("") ; 
  const [cvn, setCvn] = useState("") ; 
  const [errorMessage, setErrorMessage] = useState('') 
  const [btnAvail, setBtnAvail] = useState(true) ; 

  
  const nameChangeHandler = (event) => {
       console.log(event.target.value) ; // debug
       const validate = /^[a-zA-Z]*$/;
       let isValid = validate.test(event.target.value);
         if (event.target.value.length === "") 
         {
             setErrorMessage('Please input!');
         }else if (isValid == true)
         {  
             setName(event.target.value);
             setErrorMessage('');

         }else
         {
             setErrorMessage('Enter valid Cardholder Name!');
         }
  };

  const numChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      // let isValid = validator.isCreditCard(event.target.value) ;
      const validate = /^[0-9]*3/;
       let isValid = validate.test(event.target.value);
        if (event.target.value.length === "") 
        {
            errorMessage = 'Please input';
        } 
          else if(isValid ==true)
        {
            setNum(event.target.value);
            setErrorMessage('');
        }
          else
        {
            setErrorMessage('Enter valid CreditCard Number!'); 
        }
  }; 

  const monthChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      setMonth(event.target.value) ;
  };

  const yearChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      setYear(event.target.value) ;
  };

  const cvnChangeHanlder = (event) => {
       console.log(event.target.value) ; // debug
       setCvn(event.target.value) ;
       const validate = /^[0-9]*3/;
       let isValid = validate.test(event.target.value);
       if (event.target.value.length === "") 
       {
           errorMessage = 'Please input';
       } 
         else if(isValid ==true)
       {
           setNum(event.target.value);
           setErrorMessage('');
       }
         else
       {
           setErrorMessage('Enter valid CVN!'); 
       }
  } ;

  const btnAble = ({name, num, month, year, cvn}) => {
    if ({name} !=="" && {num} !=="" && {month} !=="" && {year }!=="" && {cvn} !=="")
    {
      setBtnAvail(false);
    }
    else
    {
      setBtnAvail(true);
    }
  };

  const handleSubmit = (event) => {
    alert('The payment was processed');
    event.preventDefault();
  } ;



  return (
 
    <div className="App">
      <div>
        <h1 className="pa2 bg-lightest-blue navy">         
          Card Details
        </h1>   
      </div>
      <div>        
        <div className='flex justify-center'>
           <div className='tc dark-gray bg-light-blue w-third h5 shadow-5'>
             <p>Credit Card Number:</p>
             <p>{num}</p>          
             <p>Expiry Date:</p>
             <p>{month}/{year}</p>         
             <p>Cardholder Name:</p>
             <p>{name}</p>
           </div>
           <div className='w-10'></div>
           <div className='tc dark-gray bg-light-yellow w-third h5 shadow-5'>
             <p>CVN:</p>
             <p>{cvn}</p>
           </div> 
           </div>           
        <div className='bg-washed-green br3 pa4 ma2 dib bw2 shadow-5'>
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
            <div className='pa2 '>
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
            <div className='flex justify-center'>
              <label>Expire Date:</label>
              <FormControl variant="outlined">
                <InputLabel>Month</InputLabel>
                <Select
                  name="expiryDateMonth" 
                  value={month} 
                  onChange={monthChangeHandler}
                  label="Expiry Month"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
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
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
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
                    name='code' 
                    required
                    onChange={cvnChangeHanlder}
                />
      
            </div>  
            <button 
              className='f6 link br-pill ph3 pa3 pv2 mb2 dib white bg-purple ' 
              type='submit' 
              disabled={btnAvail}
            >Make payment</button>
          </form>
        </div>
      </div>
    </div>
    );
};



export default App;

