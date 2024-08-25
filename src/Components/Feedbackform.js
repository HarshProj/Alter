import React, { useEffect, useState } from 'react'
import '../Css/Feedbackform.css'
import img from '../Assets/plus-large-svgrepo-com 1.png'
import textareimg from '../Assets/textarea_icon.png'
import numericimg from'../Assets/numerical_icon.png'
import starimg from '../Assets/Vector.png'
import smiliimg from '../Assets/smiley_icon.png'
import singleimg from '../Assets/input_icon.png'
import radioimg from '../Assets/radio_icon.png'
import categoryimg from '../Assets/cate_icon.png'

import TextField from '@mui/material/TextField';
import { Switch } from '@material-ui/core';
export const Feedbackform = (props) => {
    useEffect(()=>{
        props.setCreate(true);
    },[])
    const [addclick,setAddclick]=useState(0)
  return (
    <div className='workspace'>
        <div className="add-feilds">
           {addclick==1?<div className='feildclicked'>
            <div className="clicked-section">
                <div className="go-back">

                <p onClick={()=>{setAddclick(0)}}>&lt;</p><p>Back To Add Feild</p>
                </div>
            </div>
           </div>:<div className="fields-section">
                <h3>Add Fields</h3>
                <div className="section">
                    <div className="field"><div className="textarea">
                        <div className="" style={{display:'flex'}}>
                    <img src={textareimg} alt="" /><p>Textarea</p>

                        </div>
                     <img src={img} alt="" onClick={()=>{setAddclick(1)}}/></div>
                    </div>
                    <div className="field"><div className="textarea">
                        <div className="" style={{display:'flex'}}>
                    <img src={numericimg} alt="" /><p>Numeric Rating</p>

                        </div>
                     <img src={img} alt="" /></div>
                    </div>
                    <div className="field"><div className="textarea">
                        <div className="" style={{display:'flex'}}>
                    <img src={starimg} alt="" /><p>Star Rating</p>

                        </div>
                     <img src={img} alt="" /></div>
                    </div>
                    <div className="field"><div className="textarea">
                        <div className="" style={{display:'flex'}}>
                    <img src={smiliimg} alt="" /><p>Smile Rating</p>

                        </div>
                     <img src={img} alt="" /></div>
                    </div>
                    <div className="field"><div className="textarea">
                        <div className="" style={{display:'flex'}}>
                    <img src={singleimg} alt="" /><p> Single line Input</p>

                        </div>
                     <img src={img} alt="" /></div>
                    </div>
                    <div className="field"><div className="textarea">
                        <div className="" style={{display:'flex'}}>
                    <img src={radioimg} alt="" /><p>Radio Button</p>

                        </div>
                     <img src={img} alt="" /></div>
                    </div>
                    <div className="field"><div className="textarea">
                        <div className="" style={{display:'flex'}}>
                    <img src={categoryimg} alt="" /><p>Categories</p>

                        </div>
                     <img src={img} alt="" /></div>
                    </div>
                    <div className="extra-fields">

                   
                   <div className="based-on-url">
                    <div className="toggle-part">
                    <span className='url-span'>
                    Show Based On Url Condition
                    </span>
                    <Switch size='small' checked/>
                    </div>
                    <input type="text" className='intpht'  value='http:/'/>
                   </div>
                   <div className="based-on-url">
                    <div className="toggle-part">
                    <span className='url-span'>
                    Show On Specific Date
                    </span>
                    
                    <Switch size='small' checked/>

                    </div>
                    <TextField
          id="outlined-error"
          label="Select Time"
          defaultValue="MM/DD/YY"
        //   color='gray'
        style={{border:"none"}}
        />
                   </div>
                   <div className="based-on-url">
                    <div className="toggle-part">
                    <span className='url-span'>
                    Show On Specific Time
                    </span>
                    <Switch size='small' checked />
                    </div>
                    <TextField
          id="outlined-error"
          label="Select Time"
          defaultValue="hh:mm aa"
        />
                   </div>
                   </div>
                </div>
            </div>}
        </div>
        <div className="form-body">
            <div className="form-name">
              <span>&lt;</span>  <h3>Genric Website Rating</h3>
            </div>
            <div className="form-fields">
                <h2>Add Fields</h2>
            </div>
        </div>
    </div>
  )
}
