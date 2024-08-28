import React from 'react'
import img from '../Assets/plus-large-svgrepo-com 1.png'
import textareimg from '../Assets/textarea_icon.png'
import numericimg from '../Assets/numerical_icon.png'
import starimg from '../Assets/Vector.png'
import smiliimg from '../Assets/smiley_icon.png'
import singleimg from '../Assets/input_icon.png'
import radioimg from '../Assets/radio_icon.png'
import categoryimg from '../Assets/cate_icon.png'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
export const Addsection = ({setInd,setAddclick,info,handleinfo}) => {
  return (
    <div className="fields-section">
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
</div>
  )
}
