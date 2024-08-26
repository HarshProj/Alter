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
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { Switch } from '@material-ui/core';
import img1 from'../Assets/image 1.png'
import img2 from'../Assets/image 2.png'
import img3 from'../Assets/image 3.png'
import img4 from'../Assets/image 4.png'
import img5 from'../Assets/image 5.png'
export const Feedbackform = (props) => {
    useEffect(()=>{
        props.setCreate(true);
    },[])
    const [formdata,setFormdata]=useState([{
        type:"textarea",
        label:"Would You like to add a comment"
    },     
    {
        type:"Rating",
        label:"Would You like to add a comment",
        disp:<div></div>
    }
])
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
            {/* <div className="form-fields">
                <h2>Add Fields</h2>
                    </div> */}
             <div className="add-field-section">

                <div className='textarea-field'>
                    <label>Would like to add comment?</label>
                    <div className="textareadiv">
                        <textarea name="" id="" style={{resize:'none' }}></textarea>
                </div>
                    </div>
                <div className='rating-field'>
                    <label>How likely is it that you will recommend us to your family and friends?</label>
                    <div className="ratingdiv">
                        <div className="ratings">1</div>
                        <div className="ratings">2</div>
                        <div className="ratings">3</div>
                        <div className="ratings">4</div>
                        <div className="ratings">5</div>
                        <div className="ratings">6</div>
                        <div className="ratings">7</div>
                        <div className="ratings">8</div>
                        <div className="ratings">9</div>
                        <div className="ratings">10</div>
                </div>
                    </div>
                <div className='rating-star'>
                    <label>Give a star rating for the website.</label>
                    <div className="stardiv">
                    <Rating 
    name="rating"
    size="large"
    readOnly
    defaultValue={0}
    sx={{
        fontSize: "1.5rem"
    }}
/>
                </div>
                    </div>
                <div className='rating-smily'>
                    <label>What is your opinion of this page?</label>
                    <div className="smilydiv">
                    <div className="smily"><img src={img1} alt="" /></div>
                    <div className="smily"><img src={img2} alt="" /></div>
                    <div className="smily"><img src={img3} alt="" /></div>
                    <div className="smily"><img src={img4} alt="" /></div>
                    <div className="smily"><img src={img5} alt="" /></div>
                    
                </div>
                    </div>
                <div className='single-line rating-star'>
                    <label>Do you have any suggestions to improve our website?</label>
                    <div className="singlediv">
                    <input type="text" name="" id="" />
                </div>
                    </div>
                <div className='multiplechoice'>
                    <label>Do you have any suggestions to improve our website?</label>
                    <div className="multiplediv">
                        <div className="mtpd">

                    <input type="radio" name="" id="" />
                    <label htmlFor="">Radio 1</label>
                        </div>
                        <div className="mtpd">

                    <input type="radio" name="" id="" />
                    <label htmlFor="">Radio 2</label>
                        </div>
                        <div className="mtpd">

                    <input type="radio" name="" id="" />
                    <label htmlFor="">Radio 3</label>
                        </div>
                </div>
                    </div>
                <div className='category-sec multiplechoice'>
                    <label>Pick a subject and provide your feedback:</label>
                    <div className="categorydiv">
                    <div className="categories">Bug</div>
                    <div className="categories">Content</div>
                    <div className="categories">Other</div>
                </div>
                    </div>

            </div>
        </div>
    </div>
  )
}
