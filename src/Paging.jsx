import React, { useState } from 'react';
// import { useGlobalcontext } from './Context';
import Button from '@mui/material/Button';

const Paging = ({ id, name, username, email, address, phone, website, company }) => {


    const [show, setshow] = useState(false);

    // const name= useGlobalcontext()
    return (
        <>
            <div className='main'>
                <div className='out_box'>

                    <div><h2>{name}</h2></div>
                    <div>
                        <h2>User</h2>
                        <p>{username}</p>
                    </div>
                    <div>
                        <h2>City</h2>
                        <p>{address.city}</p>
                    </div>
                    <div>
                        <h2>Zipcode</h2>
                        <p>{address.zipcode}</p>
                    </div>
                    <div>
                     { !show &&  <Button variant='contained' onClick={()=>{ setshow(true)}}>view more</Button>}
                     { show &&  <Button variant='contained' onClick={()=>{ setshow(false)}}>show less</Button>}
                        
                    </div>
                </div>
                {show && <div className='desc'>
                    <div>
                        <h3>contact person</h3>
                        <p>{name}</p>
                        <h3>Email</h3>
                        <p>{email}</p>
                        <h3>Phone</h3>
                        <p>{phone}</p>
                    </div>
                       
                    <div>
                    <h3>Address</h3>
                        <p>{address.street}</p>
                        <h3>Suite</h3>
                        <p>{address.suite}</p>
                        <h3>Zipcode</h3>
                        <p>{address.zipcode}</p>
                        <h3>Website</h3>
                        <p>{website }</p>
                    </div>

                </div>
                }

            </div>
            <br />
        </>
    )
}

export default Paging;