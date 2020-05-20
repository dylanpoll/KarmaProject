import React, {useState,useEffect} from 'react';
import './App.css';
import url from './AAurl';

function User({match}){
  //linking to this with the params ID we get access with Match.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchUser(); },[]);
    const fetchUser = async () => {//this pulls from our express to our database
    const fetchUser = await fetch(url+`/users/user/${match.params._id}`, {method: 'GET'});
    const user = await fetchUser.json();
    setUser(user);
  }
  const [user,setUser] = useState({});
  return (
    <div>
        <div>
        <div className="bigHeader"><h1>{user.name}'s  Stats! :</h1></div>
        <div className="wrapper">
        <div className="userdetailsinnerWrapper">
        <div className="innerwarpper">
          <h3>Karma : {user.karma}</h3>
          <h3>Level : {user.level}</h3>
          <h3>roles : {user.roles}</h3>
          <h3>projectHistory : {user.projectHistory}</h3>
          <h3>questHistory : {user.questHistory}</h3>
          <h3>skills : {user.skills}</h3>
          <h3>streak : {user.streak}</h3>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default User;