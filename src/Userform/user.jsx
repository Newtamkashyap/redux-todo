import { useState } from 'react';
import './user.css';
export const UserDetails = () => {

const[datas,setDatas]=useState({fullName:"",bloodGroup:""})
    return (
        <div className='form-container' >
            <h2>Contact Form</h2>
            <form >
                <div className='form-group'>
                    <label  className="form-label">FullName
                        <input className="form-control" type="text" name="fullName"  value={datas.fullName}/>
                    </label>
                </div>

                <div className='form-group'>
                    <label className="form-label">Blood Group
                        <input className="form-control text-uppercase" type="text" name="bloodGroup" value={datas.bloodGroup}/>
                    </label>
                </div>
                <button type='submit' className="submit-button btn btn-primary">Submit</button>
            </form>
        </div>
    )
}