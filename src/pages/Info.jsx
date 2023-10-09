import { Link,useLocation,useNavigate } from "react-router-dom"

const Info = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const data=location.state;
    console.log(data);
    const convertToIST = (utcTimeString) => {
        const utcDate = new Date(utcTimeString);
        return utcDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })};
    const startTimeIst = convertToIST(data?.start?.dateTime);
    const endTimeIst = convertToIST(data?.end?.dateTime);
  return (
    <div className="flex flex-row justify-center align-middle m-3 ">
        <div className="flex flex-col justify-center align-middle">
            <div className="text-center text-3xl p-3 bg-black text-white rounded-md mb-4 font-mono">Event Details....</div>
            <div className="flex flex-col md:flex-row border-[1px] border-gray-300 p-3 m-3 rounded-md font-mono">
                    <ul className="m-2 border-[1px] border-gray-300 p-4 text-center">
                        <li className="text-2xl">*Attendees Email*</li>
                        {data?.attendees.map((ele,index)=>{
                            return <li className="border-[1px] border-gray-300 cursor-pointer p-2"
                                onClick={(e)=>{
                                    e.preventDefault();
                                    const data={
                                        email:ele.email,
                                        name:ele?.displayname
                                    }
                                    navigate("/me",{state:data});
                                }}                            
                                key={index}>{index+1}.{ele.email}</li>
                        })}
                        <li>No Attendees are there...</li>
                    </ul>
                    <div className="flex flex-col m-2 border-[1px] border-gray-300 p-4">
                        <h1><span className="text-2xl">creator_Email:</span> {data?.creator?.email}__</h1>
                        <div className="flex flex-col text-center">
                                <h1 className="text-2xl">Description</h1>
                                <p>{data.description}...</p>
                        </div>
                        <h1><span className="text-2xl">Start Date:</span> {startTimeIst.split(',')[0]}</h1>
                        <div className='flex flex-row justify-around'>
                            <h1>From: {startTimeIst.split(',')[1]}</h1>
                            <h1>To: {endTimeIst.split(',')[1]}</h1>
                        </div>
                    </div>
            </div>
            <div className="width-full text-center flex flex-col m-2 p-4 border-[1px] border-gray-300 text-2xl font-mono">
                        <p>*The details of Attendees and other information depends if it is provide in that event or not.</p>
                        <p>*So here we only show you the information that are give in that event item.</p>
                        <p>*On clicking on the attendee you redirect to profile but the data is limited as we said earlier it depends.</p>
                        <p>*Thank You*</p>
            </div>
            <div className="text-center m-4"><Link to="/main" className='font-mono text-xl font-bold p-4 border-[1px] border-gray-300 text-white bg-black  rounded-md'>Retrun to Main page</Link></div>
        </div>    
    </div>
  )
}

export default Info