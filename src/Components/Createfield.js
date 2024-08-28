import React from 'react'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
export const Createfield = ({handlechange,addsection,ind,setAddclick,setDetails}) => {
  return (
    <div className='feildclicked'>
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
                                    
                                {ind===5||ind===6?<div className='option-section'>
                                    <div className="">Option</div>
                                    <div className="sel-opt">
                                    <TextField label={ind===5?'Radio 1':'Bug'} variant="standard" className='tinp' name="option1"onChange={handlechange} size="medium"/>
                                    <TextField label={ind===5?'Radio 2':'Content'} variant="standard" className='tinp' name='option2' onChange={handlechange} size="medium"/>
                                    <TextField label={ind===5?'Radio 3':'Other'} variant="standard" className='tinp' name='option3' onChange={handlechange} size="medium"/>
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
                </div> 
  )
}
