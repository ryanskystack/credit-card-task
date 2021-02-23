import React, {useState}  from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

 const {name, setName} = useState("") ; 
 const {age, setAge} = useState(0) ; 
 
 const nameChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      setName(event.target.value) ;
 };

 const ageChangeHanlder = (event) => {
      console.log(event.target.value) ; // debug
      setAge(event.target.value) ;
 } ;
  return (
    <form>
    <h1>Hello {name} {age}</h1>
    <p>Enter your name:</p>
    <input
      type='text'
      name='username'
      onChange={nameChangeHandler}
    />
    <p>Enter your age:</p>
    <input
      type='text'
      name='age'
      onChange={ageChangeHanlder}
    />
    </form>
  );
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


