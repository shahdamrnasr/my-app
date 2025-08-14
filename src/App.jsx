import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";

function App() {
  const [users , setUsers] = useState([])
  const [Search , setSearch] = useState("")
  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${Search}`)
    .then((res) => setUsers(res.data))
  },[])

  const handelDelete = (id) =>{
    setUsers(users.filter(prev => prev.id !== id))
  }

  const filterUsers = users.filter(user =>
    user.name.toLowerCase().includes(Search.toLowerCase())
  )
  return(
    <div className="div1">
      <Header/>
        <div className="parent-title-input">
          <h2 className="User-List">User List</h2>
          <input className="input-Search" type="text" placeholder="Search..." onInput={(e)=> setSearch(e.target.value)} />
        </div>
        
        <div className="main">
          {
            filterUsers.length > 0 ? (
              filterUsers.map((post) =>(
                <UserCard
                  key = {post.id}
                  id = {post.id}
                  name = {post.name}
                  email = {post.email}
                  avatar = {`https://i.pravatar.cc/150?img=${post.id}`}
                  onDelete = {handelDelete}
                />
              ))
            ):(
              <p>لا يوجد مستخدمين بهذا الاسم</p>
            )
          }
        </div>
        <br />
        <br />
        <FooterPage/>
    </div>
  )
}

export default App;