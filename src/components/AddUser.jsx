import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AddUser = () => {

    const [name, setName] = useState({ name: "" });
    const [email, setEmail] = useState({ email: "" });

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault()

        axios.post(`https://6387783ad9b24b1be3f17893.mockapi.io/users`, { name, email })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setName({ name: res.data.name });
                setEmail({ email: res.data.email });
            })
            .then(()=>{
                navigate('/user');
            })
    }
    return (
        <div>
            <h2>Add Users</h2>

            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddUser;
