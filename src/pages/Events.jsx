import {useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Events = () => {
    const navigate=useNavigate();
    const [currP,setP]=useState(1);
    const [total,setL]=useState(0);
    const [arr,setA]=useState([]);
    const itemsPP=10;
    const [data,setD]=useState([]);
    const get=async()=>{
        try{
            const ff=await axios.get('https://calendarclone.onrender.com/events');
            console.log(ff.data);
            if(ff.data.length){
                setL(ff.data.length);
            }const rr=[...ff.data].reverse();
            setD(rr);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        get();
    },[]);
    useEffect(()=>{
        const startIndex = (currP - 1) * itemsPP;
        const endIndex = startIndex + itemsPP;
        console.log(currP,startIndex,endIndex);
        const val=data.slice(startIndex,endIndex);
        console.log(val);
        setA(val);
    },[currP,data]);
    const totalPages=Math.ceil(total/itemsPP)
    const handlePreviousClick = () => {
        if (currP > 1) {
          setP(currP - 1);
        }
      };
      const handleNextClick = () => {
        if (currP < totalPages) {
          setP(currP + 1);
        }
      };
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-9 font-mono'>
        {arr?.map((ele,index)=>{
            const convertToIST = (utcTimeString) => {
        const utcDate = new Date(utcTimeString);
        return utcDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
      };
            // Convert UTC start and end times to IST
        const startTimeIst = convertToIST(ele.start.dateTime);
        const endTimeIst = convertToIST(ele.end.dateTime);
            return <div key={index} className='border-gray-300 border-[1px] text-center height-[100px]'>
                <h1 className='width-[50px]'><span className='font-semibold'>Description</span>: {ele?.description?.substring(0,100)}</h1>
                <h1><span className='font-semibold'>Creator</span>: {ele?.creator?.email}</h1>
                <h1>Start Date: {startTimeIst.split(',')[0]}</h1>
                <div className='flex flex-row justify-around'>
                    <h1>From: {startTimeIst.split(',')[1]}</h1>
                    <h1>To: {endTimeIst.split(',')[1]}</h1>
                </div>
                <button 
                    onClick={(e)=>{
                        e.preventDefault();
                        navigate("/info",{state:ele})
                    }}
                    className='rounded-md bg-black m-2 text-white p-2'>
                    See More
                </button>
            </div>
        })}
        </div>
        <div className='flex justify-center mt-3'>
            <button 
                className='p-2 bg-black text-white rounded-md'
                onClick={handlePreviousClick} disabled={currP === 1}>
                Prev
            </button>
            <span className='p-2'> Page {currP} of {totalPages} </span>
            <button 
                className='p-2 bg-black text-white rounded-md'
                onClick={handleNextClick} disabled={currP === totalPages}>
                Next
            </button>
        </div>
    </div>
  )
}

export default Events