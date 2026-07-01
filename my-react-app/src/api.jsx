import React,{useState , useEffect} from "react";
import axios from "axios";
function crud ()
{
    const [user , setuser]=useState([]);
    const[name , setname]= useState("");
    const getUser=()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
            setuser(Response.data);
        })
        .catch((err)=>{
            console.log("Failed");
        });
    };
    useEffect(()=>{
        getUser();
    },[]);
    const adduser =()=>
    {
        const NewUser = {
            name:name,
        };
        axios
        .post("https://jsonplaceholder.typicode.com/users",NewUser)
        .then((Response)=>{
            alert("User Added");
            console.log(Response.data);
            setuser([...user,Response.data]);
            setname("");
        })
        .catch((err)=>
        {
            console.log("Error");
        });
    };
    const updateuser =(id)=>
    {
        axios
        .put(`https://jsonplaceholder.typicode.com/users/${id}`,{
            name:"Charan",
        })
        .then((Response)=>{
            alert("User Updated");
            console.log("Updated");
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    const deluser=(id)=>{
        axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(()=>{
            alert("User Deleted");
        });
    };

    return (
        <>
        <div style={{textAlign:"center"}}>
            <h1>CRUD Operations in Axios</h1>
            <br />
            <label>Name:</label>
            <input type="text" placeholder="Vishnu" 
            value={name}
            onChange={(e)=>setname(e.target.value)}/>
            <br />
            <button onClick={adduser} >Submit</button>
            <br />
            <table border={"1"}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        {user.map((user)=>{
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={()=>updateuser(user.id)}>
                    Update
                    </button>
                    <button onClick={()=>deluser(user.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        })}
            </table>
        </div>
        </>
    );
}
export default crud;