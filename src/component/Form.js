import React, { useState } from 'react';
import 'tachyons';


const Form = () => {

    const [name, setName] = useState("") ; 
    const [num, setNum] = useState(0) ; 
    const [month, setMonth] = useState(0) ; 
    const [year, setYear] = useState(0) ; 
    const [cvn, setCvn] = useState(0) ; 
    // const [result, setResult] = useState(false) ; 
    // const [btnAvail, setBtnAvail] = useState(false) ; 

    
    const nameChangeHandler = (event) => {
         console.log(event.target.value) ; // debug
         setName(event.target.value) ;
    };
    const numChangeHandler = (event) => {
        console.log(event.target.value) ; // debug
        setNum(event.target.value) ;
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
    } ;

    return (
        <div >    
            <div >
     
                <form  >
                    <p className="App-header">          
                        Card Details
                    </p>   
                    <div className=' '>
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
                        <p id='card' style={{ color: 'red' }}></p>
                    </div>
                    
                    <div className=''>
                        <label>Required Credit Card Number:</label>
                        <input 
                            type="text" 
                            name="creditCardNumber" 
                            placeholder="Cardholder Name" 
                            required
                            onChange={numChangeHandler}
                    />
                    </div>
                    <div className=' '>
                        <label>Required Expiry Date:</label>
                        <div className="selectWrapper">
                            <select name="expiryDateMonth" onChange={monthChangeHandler}/>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>                            
                        </div>                       
                    </div>

                    <div className=' '>
                        <label>Required Expiry Date Year:</label>
                        <div className="selectWrapper">
                            <select name="expiryDateYear" onChange={yearChangeHandler}/>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>             
                        </div>                       
                    </div>
                    
                    <div className=' '>
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
                        <p id='code' style={{ color: 'red' }}></p>
                    </div>  
                    <button className=' ' type='submit'>Make payment</button>
                </form>
            </div>
        </div>
      );

    };


export default Form;