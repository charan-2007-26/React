import React,{useState , useEffect} from "react";
import axios from "axios";
function crud ()
{
    const [user , setuser]=useState([]);
    const[name , setname]=useState("");
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
    const addUser=()=>{
        const NewUser={
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
        .catch((err)=>{
            console.log("Error");
        });
    };
    const updateuser =(id)=>{
        axios
        .put('https://jsonplaceholder.typicode.com/users/${id}',
            {
                name:"Cherry",

        })
    }
}
export default crud;