import Nav from "./Nav"
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
const Me = () => {
    const navigate=useNavigate();
    const [nav,setN]=useState(true);
    const location=useLocation();
    const data=location.state;
    console.log(data);
    const handleNav=()=>{
        setN(!nav);
    }
  return (
    <div>
        <div id="nav" className='font-mono flex  justify-between text-white bg-black items-center h-[80px] max-w-[1240px] mx-auto px-7 rounded-lg'>
        <h1 className='w-full text-3xl font-bold cursor-pointer font-mono' 
            onClick={(e)=>{
                e.preventDefault();
                navigate("/main")
            }}
        >Calendar.</h1>
        <div className='block' >
        <div className="px-5 cusort-pointer" onClick={()=>{handleNav()}} >
            {!nav?<AiOutlineClose size={20}/>:
            <AiOutlineMenu   size={20} />}
        </div>
        <div className={!nav?'fixed left-0 top-0 text-white  w-[60%] h-full border-r-gray-300 bg-black ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold p-3 cursor-pointer font-mono' onClick={(e)=>{
                e.preventDefault();
                navigate("/main")
            }}>Calendar.</h1>
        <ul className='uppercase font-mono'>
            <li className='p-4 border-b border-b-gray-300 flex'>
            <img src={data?.img} alt="default"  className='mr-2 rounded-full  bg-white h-[40px]'/>
            <h1 className='mt-[10px]'> {data?.name}</h1>
            </li>
            <li className='p-4 border-b border-b-gray-300'>Email: {data?.email}</li>
        </ul> 
        </div></div>
    </div>
        <div className="flex flex-col md:flex-row m-3 rounded h-screen">
            <div className="rounded-lg border-solid border-[1px] border-gray-300 p-10 mr-2">
                <img src={data?.img} className="mr-2 rounded-full   h-[100px] w-[100px]"/>
            </div>
            <div className="flex-grow rounded-lg border-solid border-[1px] border-gray-300 p-10 mr-2">
                <div className="flex flex-col h-full">
                    <div className="flex-1 font-mono">
                        <div className="w-full text-3xl  ">Name: {data?.name}</div>
                        <div className="w-full text-3xl ">Email: {data?.email}</div>
                        <div>Coming Soon...</div>
                    </div>
                    <div className="font-mono text-center p-3 border-solid border-[1px] border-gray-300 mb-10">
                        <p>These information is coming from Google itself...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Me