"use client";
import { useState } from "react";
import axios from 'axios';
export default function Contact(){
    const [name,setName]=useState('');
    const [email, setEmail]=useState('');
    const [query, setQuery]=useState('');

    const handleSubmit=async (e:any)=>{
        e.preventDefault();
        const data={
            "name":name,
            "email":email,
            "query":query
        }
        try{
            await axios.post("/api/comment",data);
        }
        catch(err){
            console.log(err);
        }
        setName('');
        setEmail('');
        setQuery('');
    }
    return(
        <div className="h-[85vh]">
            <div className="flex justify-center items-center h-[85vh]">
                <form onSubmit={handleSubmit}>
                    <h1>Leave Comment</h1>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="query">Query:</label>
                        <input
                        type="text"
                        id="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}