import React from 'react'
import img1 from '../Assets/image 6.png'
import '../Css/Navbar.css'
export const Navbar = (props) => {
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
                <button className='save'>Save</button>
                <button className='publish'>Publish</button>
            </form>
            </div>:""}
        </div>
  )
}
