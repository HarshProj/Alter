import React, { useEffect, useState } from 'react'
import '../Css/Feedbackform.css'
import img from '../Assets/plus-large-svgrepo-com 1.png'
import textareimg from '../Assets/textarea_icon.png'
import numericimg from '../Assets/numerical_icon.png'
import starimg from '../Assets/Vector.png'
import smiliimg from '../Assets/smiley_icon.png'
import singleimg from '../Assets/input_icon.png'
import radioimg from '../Assets/radio_icon.png'
import categoryimg from '../Assets/cate_icon.png'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import img1 from '../Assets/image 1.png'
import img2 from '../Assets/image 2.png'
import img3 from '../Assets/image 3.png'
import img4 from '../Assets/image 4.png'
import { PencilSimple } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react";
import img5 from '../Assets/image 5.png'
import { useNavigate } from 'react-router-dom'
export const Feedbackform = (props) => {
    const [ind, setInd] = useState();
    const [display, setDisplay] = useState([]);
    const [formtitle,setFormtitle]=useState('')
    const [values, setValues] = useState([]);
    const [details, setDetails] = useState({
        label: '',
        error: '',
        option1:'',
        option2:'',
        option3:'',
        index:'',
    })
    const [toggle,setToggle]=useState(true);
    const [visible,setVisible]=useState(0);
    const[info,setInfo]=useState({
        date:'',
        time:'',
        url:'http://'
    })
    const [inputtxt,setInputtxt]=useState("");
    const navigate=useNavigate();
    useEffect(() => {
        props.setCreate(true);
       setFormtitle(localStorage.getItem('formname'));
    },  [])
    useEffect(()=>{
        values.forEach((value,key)=>{
        setDisplay([...display, formdata[value.index]]);
        })
    },[values])
    const handlechange = (e) => {
        setDetails((prevDetails) => ({
            ...prevDetails,
            [e.target.name]: e.target.value,
            index:ind
        }));
    };
    const [addclick, setAddclick] = useState(0)
    // const addsection = (e) => {
        //     e.preventDefault();
        //     setDisplay([...display, formdata[ind]]);
        //     console.log(display);
        const deletesec = (indc) => {
            // Update the formdata state by slicing out the item at the given index
            setValues(prevdisplay => [
                ...prevdisplay.slice(0, indc),
                ...prevdisplay.slice(indc + 1)
            ]);
        };

const [formdata, setFormdata] = useState([{
    type: "textarea",
    display: (error,value,x) =>
    {return <div className='textarea-field'>
        <label>{value.label}</label>
        <div className="textareadiv">
            <textarea name="" id="" style={{ resize: 'none' }}></textarea>
        </div>
        <div className="modify-delete">

            <PencilSimple size={20} weight="fill" />
            <Trash size={20} weight="fill" onClick={()=>{deletesec(x)}} />
        </div>
    </div>}
    
    
},
{
    type: "Numeric Rating",
    display: (error,value,x) =>
        {return <div className='rating-field'>
        <label>{value.label}</label>
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
        <div className="modify-delete">

            <PencilSimple size={20} weight="fill" />
            <Trash size={20} weight="fill" onClick={()=>{deletesec(x)}} />
        </div>
    </div>
}},
{
    type: "Start Rating",
    display:(error,value,x) =>
        {return  <div className='rating-star'>
        <label>{value.label}</label>
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
        <div className="modify-delete">

            <PencilSimple size={20} weight="fill" />
            <Trash size={20} weight="fill" onClick={()=>{deletesec(x)}} />
        </div>
    </div>
}},
{
    type: "Smiley Rating",
    display: (error,value,x) =>
        {return <div className='rating-smily'>
        <label>{value.label}</label>
        <div className="smilydiv">
            <div className="smily"><img src={img1} alt="" /></div>
            <div className="smily"><img src={img2} alt="" /></div>
            <div className="smily"><img src={img3} alt="" /></div>
            <div className="smily"><img src={img4} alt="" /></div>
            <div className="smily"><img src={img5} alt="" /></div>

        </div>
        <div className="modify-delete">

            <PencilSimple size={20} weight="fill" />
            <Trash size={20} weight="fill" onClick={()=>{deletesec(x)}} />
        </div>
    </div>
}},
{
    type: "Single-input",
    display:(error,value,x) =>
        {return  <div className='single-line rating-star'>
        <label>{value.label}</label>
        <div className="singlediv">
            <input type="text" name="" id="" />
        </div>
        <div className="modify-delete">

            <PencilSimple size={20} weight="fill" />
            <Trash size={20} weight="fill" onClick={()=>{deletesec(x)}} />
        </div>
    </div>
}},
{
    type: "Radio-Button",
    display:(error,value,x) =>
        {return <div className='multiplechoice'>
            <label>{value.label}</label>
            <div className="multiplediv">
                <div className="mtpd">

                    <input type="radio" name="" id="" />
                    <label htmlFor="">{value.option1}</label>
                </div>
                <div className="mtpd">

                    <input type="radio" name="" id="" />
                    <label htmlFor="">{value.option2}</label>
                </div>
                <div className="mtpd">

                    <input type="radio" name="" id="" />
                    <label htmlFor="">{value.option3}</label>
                </div>
            </div>
            <div className="modify-delete">

                <PencilSimple size={20} weight="fill" />
                <Trash size={20} weight="fill" onClick={()=>{deletesec(x)}} />
            </div>
        </div>
}},
{
    type: "Categories",
    display:(error,value,x) =>
        {return  <div className='category-sec multiplechoice'>
        <label>{value.label}</label>
        <div className="categorydiv">
            <div className="categories">{value.option1}</div>
            <div className="categories">{value.option2}</div>
            <div className="categories">{value.option3}</div>
        </div>
        <div className="modify-delete">

            <PencilSimple size={20} weight="fill" />
            <Trash size={20} weight="fill" onClick={()=>{deletesec(x)}} />
        </div>
    </div>
}}
])
    // }
    const addsection = (e) => {
        e.preventDefault();
        const newvalue={label:details.label,error:details.error,index:details.index,option1:details.option1,option2:details.option2,option3:details.option3}
            setValues([...values, newvalue]);
        console.log(values);
    }
    const handleinfo=(e)=>{
        setInfo((previnfo)=>({
            ...previnfo,
            [e.target.name]:e.target.value
        }))
        console.log(info);
    }
    console.log(details);
    return (
       <> {visible?<div className='formname-feild'>
            <form className="form-title">
                <h3>Create Feedback Form</h3>
                <input type="text" name="" id="" required onChange={(e)=>{ setInputtxt(e.target.value);console.log(inputtxt)}}/>
                <div className="title-btn">
                <button type='submit' onClick={inputtxt==""?console.log(""):(e)=>{ e.preventDefault();localStorage.setItem('formname',inputtxt) ;setFormtitle(inputtxt);setVisible(!visible)}} >Edit</button>
                <button className='cancle' onClick={()=>{setVisible(1)}}>CANCLE</button>
    
                </div>
            </form>
            </div>:""}<div className='workspace'>
            <div className="toggle" onClick={()=>{setToggle(!toggle)}}>X</div>
            {!toggle?'':<div className="add-feilds">
                {addclick == 1 ? <div className='feildclicked'>
                    <div className="clicked-section">
                        <div className="go-back">

                            <p onClick={() => { setAddclick(0) }}>&lt;</p><p>Back To Add Feild</p>
                        </div>
                        <div className="add-section">
                            <form className='save-field'>
                                <div className="fds">
                                    <TextField label="Label" variant="standard" size="medium" onChange={(e) => {
                                        setDetails((prevDetails) => ({
                                            ...prevDetails,
                                            index:ind,
                                            label: e.target.value
                                        }));
                                    }} fullWidth required />
                                    <FormControlLabel control={<Switch />} defaultValue={true} label="Required" />
                                    
                                {ind==5||ind==6?<div className='option-section'>
                                    <div className="">Option</div>
                                    <div className="sel-opt">
                                    <TextField label={ind==5?'Radio 1':'Bug'} variant="standard" className='tinp' name="option1"onChange={handlechange} size="medium"/>
                                    <TextField label={ind==5?'Radio 2':'Content'} variant="standard" className='tinp' name='option2' onChange={handlechange} size="medium"/>
                                    <TextField label={ind==5?'Radio 3':'Other'} variant="standard" className='tinp' name='option3' onChange={handlechange} size="medium"/>
                                    </div>
                                </div>:<div className="error-section">
                                        <p>Error message</p>
                                        <input type="text" name="error" id="" onChange={(e) => { handlechange(e) }} />
                                        <p>Hyper Text</p>
                                    </div>}
                                </div>
                                <div className="reflect">

                                    <button className='save' onClick={addsection}>Save</button>
                                    <button className='cancle'>Publish</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> : <div className="fields-section">
                    <h3>Add Fields</h3>
                    <div className="section">
                        <div className="field"><div className="textarea">
                            <div className="" style={{ display: 'flex' }}>
                                <img src={textareimg} alt="" /><p>Textarea</p>

                            </div>
                            <img src={img} alt="" onClick={() => { setAddclick(1); setInd(0) }} /></div>
                        </div>
                        <div className="field"><div className="textarea">
                            <div className="" style={{ display: 'flex' }}>
                                <img src={numericimg} alt="" /><p>Numeric Rating</p>

                            </div>
                            <img src={img} alt="" onClick={() => { setAddclick(1); setInd(1) }} /></div>
                        </div>
                        <div className="field"><div className="textarea">
                            <div className="" style={{ display: 'flex' }}>
                                <img src={starimg} alt="" /><p>Star Rating</p>

                            </div>
                            <img src={img} alt="" onClick={() => { setAddclick(1); setInd(2) }} /></div>
                        </div>
                        <div className="field"><div className="textarea">
                            <div className="" style={{ display: 'flex' }}>
                                <img src={smiliimg} alt="" /><p>Smile Rating</p>

                            </div>
                            <img src={img} alt="" onClick={() => { setAddclick(1); setInd(3) }} /></div>
                        </div>
                        <div className="field"><div className="textarea">
                            <div className="" style={{ display: 'flex' }}>
                                <img src={singleimg} alt="" /><p> Single line Input</p>

                            </div>
                            <img src={img} alt="" onClick={() => { setAddclick(1); setInd(4) }} /></div>
                        </div>
                        <div className="field"><div className="textarea">
                            <div className="" style={{ display: 'flex' }}>
                                <img src={radioimg} alt="" /><p>Radio Button</p>

                            </div>
                            <img src={img} alt="" onClick={() => { setAddclick(1); setInd(5) }} /></div>
                        </div>
                        <div className="field"><div className="textarea">
                            <div className="" style={{ display: 'flex' }}>
                                <img src={categoryimg} alt="" /><p>Categories</p>

                            </div>
                            <img src={img} alt="" onClick={() => { setAddclick(1); setInd(6) }} /></div>
                        </div>
                        <div className="extra-fields">


                            <div className="based-on-url">
                                <div className="toggle-part">
                                    <span className='url-span'>
                                        Show Based On Url Condition
                                    </span>
                                    <Switch size='small' checked />
                                </div>
                                <input type="text" name='url' className='intpht' value={info.url} onChange={handleinfo}/>
                            </div>
                            <div className="based-on-url">
                                <div className="toggle-part">
                                    <span className='url-span'>
                                        Show On Specific Date
                                    </span>

                                    <Switch size='small' checked />

                                </div>
                                <TextField
                                    id="outlined-error"
                                    label="Select Time"
                                    defaultValue="MM/DD/YY"
                                    //   color='gray'
                                    name='date'
                                    style={{ border: "none" }}
                                    onChange={handleinfo}
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
                                    name='time'
                                    onChange={handleinfo}
                                />
                            </div>
                        </div>
                    </div>
                </div>}
            </div>}
            <div className="form-body">
                <div className="form-name">
                    <span style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>&lt;</span>  <h3>{formtitle}</h3>
                    <div className="update-formname">
                    <PencilSimple size={20} weight="fill"  onClick={()=>{setVisible(!visible)}}/>
                    </div>
                </div>
                {display.length == 0 ? <div className="form-fields">
                    <h2>Add Fields</h2>
                </div>
                    : <div className="add-field-section">
                        {values.map((value, key) => {
                            return <>{formdata[value.index].display(value.error,value,key)}</>
                        })}
                    </div>}
            </div>
        </div></>
    )
}
