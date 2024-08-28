import React, { useEffect, useState } from 'react'
import '../Css/Feedbackform.css'
import Rating from '@mui/material/Rating';
import img1 from '../Assets/image 1.png' 
import img2 from '../Assets/image 2.png'
import img3 from '../Assets/image 3.png'
import img4 from '../Assets/image 4.png'
import { PencilSimple } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react";
import img5 from '../Assets/image 5.png'
import { json, useNavigate } from 'react-router-dom'
import {useAuthStore} from '../Store/Store'
import { Addsection } from './Addsection'
import { Createfield } from './Createfield';
export const Feedbackform = (props) => {
    const {auth,savedata}=useAuthStore((state)=>state);
    const [ind, setInd] = useState();
    const [display, setDisplay] = useState([]);
    const [formtitle,setFormtitle]=useState('')
    const [values, setValues] = useState([]);
    const [toggle,setToggle]=useState(true);
    const [visible,setVisible]=useState(0);
    const[info,setInfo]=useState({
        date:'',
        time:'',
        url:'http://'
    })
    const [inputtxt,setInputtxt]=useState("");
    const navigate=useNavigate();
    const [details, setDetails] = useState({
        label: '',
        error: '', 
        option1:'',
        option2:'',
        option3:'',
        index:'',
    })
    const save=async(e)=>{
        // e.preventDefault();
        try {
            const form=await fetch('http://localhost:5000/api/createform',{
                method:'post',
                headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify({
                    values:values,
                    date:info.date,
                    time:info.time,
                    url:info.url,
                    formname:formtitle
                  })
            })
            const {data}=await form.json();
            console.log(data);
            if(data){
                alert('updated successfully')
                console.log("success");
            }
            else{
                console.log("error");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    if(auth.click){
        save();
        savedata(false);
        // console.log("saved",formtitle);
        navigate('/');
    }
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
        // console.log(values);
    }
    const handleinfo=(e)=>{
        setInfo((previnfo)=>({
            ...previnfo,
            [e.target.name]:e.target.value
        }))
        // console.log(info);
    }
    // console.log(details);
    return (
       <> {visible?<div className='formname-feild'>
            <form className="form-title">
                <h3>Create Feedback Form</h3>
                <input type="text" name="" id="" required onChange={(e)=>{ setInputtxt(e.target.value);console.log(inputtxt)}}/>
                <div className="title-btn">
                <button type='submit' onClick={inputtxt===""?console.log(""):(e)=>{ e.preventDefault();localStorage.setItem('formname',inputtxt) ;setFormtitle(inputtxt);setVisible(!visible)}} >Edit</button>
                <button className='cancle' onClick={(e)=>{ e.preventDefault(); setVisible(!visible)}}>CANCLE</button>
    
                </div>
            </form>
            </div>:""}<div className='workspace'>
            <div className="toggle" onClick={()=>{setToggle(!toggle)}}>X</div>
            {!toggle?'':<div className="add-feilds">
                {addclick === 1 ? <Createfield setAddclick={setAddclick} setDetails={setDetails} ind={ind} addsection={addsection} handlechange={handlechange}/>:<Addsection setInd={setInd} handleinfo={handleinfo} setAddclick={setAddclick} info={info}/>}
            </div>}
            <div className="form-body">
                <div className="form-name">
                    <span style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>&lt;</span>  <h3>{formtitle}</h3>
                    <div className="update-formname">
                    <PencilSimple size={20} weight="fill"  onClick={()=>{setVisible(!visible)}}/>
                    </div>
                </div>
                {values.length === 0 ? <div className="form-fields">
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
