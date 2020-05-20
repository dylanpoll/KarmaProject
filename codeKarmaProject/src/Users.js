import React, {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import url from './AAurl';
function User() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchUsers(); },[]);
    const fetchUsers = async () => {//this pulls from our express to our database
    const data = await fetch(url+`/users`, {method: 'GET'});
    const users = await data.json();
    setUsers(users);
  }
  const [users,setUsers] = useState([]);
  return (
      <div>
        <div className="bigHeader">
          <h1>Our current Users! : </h1>
        </div>
          <div className="wrapper">
            <div className="usersinnerWrapper">
              <div className="innerwarpper">
                <div>{users.map(users=>(//maps out our user objects the key is set to _id because mongo uses that as user ID's                  
                  <h3 key={users._id}>
                    <div className="bigHeader">
                      <Link to={`/users/${users._id}`}>{users.name}</Link>
                    </div>
                  </h3>))}
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}
export default User;