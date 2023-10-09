import google from '../images/google.svg'; 
import About from './About';
const Login = () => {
  return (
  <div className='demo-wrap font-mono'>
    <div className="demo-bg">
    </div>
    <div className="center shadow-lg rounde-md">
    <h1 className='md:text-3xl mb-1 text-white'>Please Login With Google</h1>
    <a href="https://calendarclone.onrender.com/login">
        <button className=' flex justify-center align-middle p-3 px-7  bg-slate-300 rounded-md my-2 hover:px-10'>
          <img  src={google}/>
          <h1 className='ml-1 text-xl'>Login</h1>
        </button>
    </a>
    <About/>
  </div>
</div>
  )
}

export default Login