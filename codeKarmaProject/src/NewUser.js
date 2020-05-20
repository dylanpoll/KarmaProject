import React from 'react';
import url from './AAurl';
// eslint-disable-next-line no-unused-vars
import UserForm, { useForm } from "react-hook-form";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { useHistory } from 'react-router-dom';

function NewUser() {
  // eslint-disable-next-line no-undef
  const history = useHistroy();
      const onSubmit = async (data) =>{
          try{
            //const response = 
            await fetch(url+`/register/new`, {//calls the .env for the url being used
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            //return response.json(); // parses JSON response into native JavaScript objects
          }catch{
            console.log("error");
          }
                  // after you add a user object, or a flag to 
                  // check if your fetch returened the rigth data
                  // if (rightData) {
         history.push('/myUrl');
        //}
      }
  //const redirect = '/newUser/sent';
  const {register,handleSubmit,errors}=useForm();
  const sentIn = () => (
    <div className="bigHeader">Thank you for creating a new account! please check your email to activate it.</div>
  )
  const notSent = () => (
    <div>
     <div className="bigHeader"><h1>Create an account!</h1></div>
        <div className="UserForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Name </h3>
                <input type="text" name="name" placeholder="Name" 
                ref={register({required:true})}/>
            <h3>Email </h3>
                <input type="text" name="email" placeholder="email" 
                ref={register({required:true})}/>
            <h3>Password </h3>
                <input type="text" name="password" placeholder="Password" 
                ref={register({required:true,minLength:7})}/>
            <h3> </h3>
            {errors.password && <p>Password is not long enough. must be at least 7 charactors.</p>}
            {errors.name && <p>Name field must be filled out</p>}
            {errors.email && <p>Email field must be filled out</p>}
            <button type="submit">Create New Account</button>
        </form>
      </div>
    </div>
  )
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/notset" exact component={notSent}/>
          <Route path="/sent" component={sentIn}/>
        </Switch>
    </Router>
    </div>
  );
}
export default NewUser;