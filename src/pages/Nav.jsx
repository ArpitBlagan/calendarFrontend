import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { useState,useEffect } from 'react';
import Events from './Events';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
const Nav = () => {
    const navigate=useNavigate();
    const [nav,setN]=useState(true);
    const [data,setD]=useState({});
    
    const handleNav=()=>{
        setN(!nav);
    }
    const gett=async()=>{
        try{
            const ff=await axios.get('https://calendarclone.onrender.com/info');
            console.log(ff.data);
            if(ff.data.msg=='Login Required'){
                const kk=await axios.get('https://calendarclone.onrender.com/logout');
                console.log(kk);
                alert("There some issue with tokens you need to login again");
                navigate("/");
                return;
            }
            setD(ff.data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        gett();
    },[]);
  return (
    <div>
    <div id="nav" className='font-mono flex  justify-between text-white bg-black items-center h-[80px] max-w-[1240px] mx-auto px-7 rounded-lg'>
        <h1 className='w-full text-3xl font-bold cursor-pointer' 
            onClick={(e)=>{
                e.preventDefault();
                navigate("/main")
            }}
        >Calendar.</h1>
        <div className='block '>
        <div  onClick={()=>{handleNav()}} >
            {!nav?<AiOutlineClose  size={20}/>:
            <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav?'fixed left-0 top-0 text-white  w-[60%] h-full border-r-gray-300 bg-black ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold p-3'>Calendar Clone.</h1>
        <ul className='uppercase'>
            <li className='p-4 border-b border-b-gray-300 flex'>
            <img src={data.img} className='mr-2 rounded-full  bg-white h-[40px]'/>
            <h1 className='mt-[10px]'> {data?.name}</h1>
            </li>
            <li className='p-4 border-b border-b-gray-300'>Email: {data?.email}</li>
            <li 
                onClick={(e)=>{
                    e.preventDefault();
                    navigate("/me",{state:data})
                }}
                className='p-4 border-b border-b-gray-300 cursor-pointer'>See More...</li>
            <li className='p-4 border-b border-b-gray-300 cursor-pointer'
                onClick={(e)=>{
                    e.preventDefault();
                    navigate("/about",{state:"ok"});
                }}
            >About the App</li>
        </ul> 
        </div></div>
    </div>
        <div className=' m-10'><Events/></div>
    </div>
  )
}

export default Nav