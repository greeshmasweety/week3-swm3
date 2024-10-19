import navbar from "../components/Navbar"
import {Link, useNavigate } from "react-router-dom";

  export default function Navbar() {
    const navigate =useNavigate()

    const handlelogout = () => {
        localStorage.removeItem('userId')
        navigate('/login')

    }


    return (
        <div>
          
          <div className="bg-[skyblue]  w-full p-6 px-20 mb-16   text-2xl font-medium text-white flex justify-between ">
                <h1 className=" font-bold">Chat-App</h1>

                <div className=" flex gap-16 cursor-pointer" >

                <Link to={'/'}>Home</Link>
                  <Link to={'/chatlist'}>Chat</Link>
                  <Link to={'/Location'}>Location</Link>
                  <Link to={'/marketPlace'}>MarketPlace</Link>
                  <Link to={'/Profile'}>Profile</Link>
                 
                </div>
                <button onClick={handlelogout}>Logout</button>

            </div>
         
           



        </div>



    )
}
;
