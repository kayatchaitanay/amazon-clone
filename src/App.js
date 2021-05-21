import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Orders from './Orders/Orders';
import Checkout from './Checkout/Checkout';
import LogIn from './Login/LogIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51ILHRSDLE7H50kV7Y6SJtLjkkE5Co7JPJJrUF81mgQ8VT5ironZxnJ3gE3xaDDtApqDOdaSxDN9vJY4y2XSkkckS00H4n16I99');

const App = () => {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    // This will only run once when the app conmponenets loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if(authUser){
        // The user Just Logged in/ was Loggin IN
        dispatch({
          type:  'SET_USER',
          user: authUser
        })
        
      }
      else{
        // The user is Logged
        dispatch({
          type:  'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <Header/>
          <Home/>
        </Route>

        <Route exact path='/payment'>
          <Header/>
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>


        <Route exact path='/login'>
          <LogIn/>
        </Route>
     
        <Route exact path='/checkout'>
          <Header/>
          <Checkout/>
        </Route>
        <Route exact path='/orders'>
          <Header/>
          <Orders/>
        </Route>
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
