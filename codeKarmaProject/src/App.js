import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Users from './Users';
import UserDetails from './UserDetails';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import quests from './QuestBoard';
import url from './AAurl';
// eslint-disable-next-line no-unused-vars
import UserForm, { useForm } from "react-hook-form";

function App() { 
  const {register,handleSubmit,errors}=useForm();
  //const redirect = '/newUser/sent';
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
    const onSubmit = async (data) =>{
      try{
        const response = await fetch(url+`/register/new`,{method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify(data)});//calls the .env for the url being used body data type must match "Content-Type" header
        return response.json(); // parses JSON response into native JavaScript objects
      }catch{
        console.log("error");
      }
    }
    return (
      <div className="App">
      <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/questBoard" component={quests}/>
            <Route path="/newUser" exact component={notSent}/>
            <Route path="/newUser/sent" component={sentIn}/>
            <Route path="/users" exact component={Users}/>
            <Route path="/users/:_id" component={UserDetails}/>
            <Route path="/discord" component={Discord}/>
          </Switch>
      </Router>
      </div>
    );
}
const Discord = () => (
  <div><div className="bigHeader"><h3>Discord Bot Commands</h3></div>
    <div className="wrapper">
      <div className="botcommands">
        <div className="innerWrapper">
          <p>!viewProfile @(user) : completed quest, attendance, events, projects, rank, and skills.  </p>
          <p>!set.name.(user).(prefered name) : if they don't wan't their personal name used they can change it  </p>
          <p>!set.id.(id number).me : link the user id for karma to their discord account.  </p>
          <p>!my.karma : shows total karma and tells placement in club  </p>
          <p>!leaderboard : shows 10 people with the most karma in descening order  </p>
          <p>!Rank.info : gives information on how much karma each rank is.</p>
          <p>!help : gives a print of all these commands.</p>
          <p>!gift @(user) (value) : for the really nice people, you can give up to 5 karma when people help you but you wont get any back, not like rep points, you actually lose karma  </p>
          <p> and you can't give more than 1 time a day.  </p>
          <p>!quest.claim.(quest title) : the user can claim completing the quest, this will que them for the karma  </p>
          <p>raise but if they use it improperly the quest giver can reject it. </p>
          <p>!skill.claim.(skill) : puts a claim in for a skill.  </p>
          <p>!class.claim.(class) : puts a claim in for a class. 	</p>
        </div>
      </div>
    </div>
  </div>
)
const Home = () => (
  <div className='dylan'>
    <div>
      <div className="bigHeader"><h1>Welcome To Code Karma!</h1></div>
      <div className="wrapper">
        <div className="botcommands">
          <div className="innerWrapper">
            <p>Under construction!...</p>
            <p>see you soon!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
const sentIn = () => (
  <div className="bigHeader">Thank you for creating a new account! please check your email to activate it.</div>
)
export default App;