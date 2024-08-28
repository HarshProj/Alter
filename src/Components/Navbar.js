import React from 'react'
import img1 from '../Assets/image 6.png'
import '../Css/Navbar.css'
import {useAuthStore} from '../Store/Store'
export const Navbar = (props) => {
    const {savedata}=useAuthStore((state)=>state);
  return (
    <div className='user-feedback'>
        <div className='feedback'>
            <img src={img1}/>
        <h3>
        User Feedback
        </h3>
            </div>
        {props.create?<div>
            <form className='save-form'>
                <button className='save' onClick={(e)=>{e.preventDefault(); savedata(true)}}>Save</button>
                <button className='publish'>Publish</button>
            </form>
            </div>:""}
        </div>
  )
}
