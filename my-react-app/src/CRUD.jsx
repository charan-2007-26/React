import React, { useState, useEffect } from "react";
import axios from "axios";

function Crud() {
  const [user, setuser] = useState([]);
  const [name, setname] = useState("");

  const getUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setuser(response.data);
      })
      .catch((err) => {
        console.log("failed");
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  const adduser=()=>
  {
    const NewUser={
        name:name,
    };
    axios.post("https://jsonplaceholder.typicode.com/users",NewUser)
    .then((response)=>{
        alert("user Added");
        console.log(response.data);
        setuser([...user,response.data]);
        setname("");
    }
    )
    .catch((err)=>
    {
        console.log("Errorrs");
    });
  };
  const updateuser = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        name: "charan",
      })
      .then((response) => {
        alert("user updated");
        console.log(response.data);
       
      })
      .catch((err) => {
        console.log("Error");
      });
  };
  const deluser=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(()=>{
        alert("user deleted");
    });
  };

  return(
    <div style={{textAlign:"center"}}>
        <h1>CRUD operations in Axios</h1><br></br>
        <label htmlFor="nameInput">Name:</label>
        <input id="nameInput" type="text" placeholder="shiv" value={name}
        onChange={(e)=>setname(e.target.value)}></input><br></br>
        <button onClick={adduser}>Submit</button>
        <br></br>
        <table border={"1"}>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        {user.map((user)=> {
            return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>updateuser(user.id)}>update</button>
                    <button onClick={()=>deluser(user.id)}>delete</button>
                </td>
            </tr>
            );
        })}

        </table>
    </div>
  );
}

export default Crud;