import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Usercard from './Usercard'
import Posts from './Posts'
import { useNavigate } from 'react-router-dom'

const Userprofile = () => {
    const navigate=useNavigate()
    const [userdata,setUserdata]=useState([])
    const [loading,setLoading]=useState(true)
    const clickhandler=(id:number)=>{
        navigate(`/users/${id}/posts`)
    }

    useEffect(()=>{
        const fetchData=async()=>{
        const userdataf=await axios.get('https://jsonplaceholder.typicode.com/users')
        setUserdata(userdataf.data)
        localStorage.setItem("users", JSON.stringify(userdataf.data));
        setLoading(false)
        }
        fetchData()
},[])
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-2 p-4">
        <h1 className="text-4xl text-center text font-sans font-semibold underline">User Profile</h1>
        <div className="flex flex-wrap justify-center gap-10 p-2 bg-gray-100 rounded-lg shadow-md">
            {loading===true?(
            <h1>Loading...</h1>):(    
            userdata.map((user:any)=>(
                <button className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300" onClick={()=>clickhandler(user.id)} key={user.id}>
                <Usercard name={user.name} email={user.email} phone={user.phone} key={user.id}/>
                </button>
            )))
        }
            
        </div>   
    </div>
  )
}

export default Userprofile
