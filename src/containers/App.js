import React, {useState}  from 'react';
import './App.css';
import Form from '../component/Form';
import 'tachyons';



const App = () => {

  const [name, setName] = useState("") ; 
  const [age, setAge] = useState(0) ; 
  
  const nameChangeHandler = (event) => {
       console.log(event.target.value) ; // debug
       setName(event.target.value) ;
  };
 
  const ageChangeHanlder = (event) => {
       console.log(event.target.value) ; // debug
       setAge(event.target.value) ;
  };

   return (
 
    <div className="App">
      <Form/>
    </div>
   );
 };



export default App;
