import React from 'react'
import { useLocation,Link } from 'react-router-dom'

const About = () => {
    const location=useLocation()
    const val=location.state;
    console.log(val);
  return (
    <div className={val?'flex flex-col justify-center text-center font-mono m-3 p-3 border-[3px] border-gray-300 rounded-xl':' text-white flex flex-col justify-center text-center font-mono m-3 p-3 border-[3px] border-gray-300 rounded-xl'}>
        <h1 className='text-2xl font-semibold'>*About the App*</h1>
        <p className='p-1 text-2xl'>*This app Simply make you login through your <span className='underline'>Google Account</span>.</p>
        <p className='p-1 text-2xl'>*Then it ask for the access for your <span className='underline'>calendar</span> information.</p>
        <p className='p-1 text-2xl'>*Then after loggin In it simply gets the data from your Google calendar.</p>
        <p className='p-1 text-2xl'>*We have user profile page you access it by clicking on <span className='underline'>see more</span> in toggle bar by clicking on <span className='underline'>hamburger icon</span>.</p>
        <p className='p-1 text-2xl'>*You can see calendar's events and click on <span className='underline'>see more</span> for more information about the event.</p>
        <p className='p-1 text-2xl'>*After clicking on see more you can see attendes and other info if there is any in that event.</p>
        <p className='p-1 text-2xl'>*You can see the <span className='underline'>attende profile</span> by clicking on it also</p>
        <h1 className='text-2xl font-semibold'>*Thank You*</h1>
        {val?
            <Link to="/main" className='text-xl font-bold p-2 border-[1px] border-gray-300'>Retrun to Main page</Link>:""
        }
    </div>
  )
}

export default About