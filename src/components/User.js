import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {

    let URL = "https://6387783ad9b24b1be3f17893.mockapi.io/users"
    const [post, setPost] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`${URL}`).then((data) => {
            console.log(data);
            setPost(data.data)
        }).catch(error=>{
            setError(error)
        })
    }, [URL])

    if(error) return ` Error: ${error.message}`

    return (
        <div className='container'>
            <h2>All Posts 📫</h2>
            {
                post.map((item) => (
                    <div key={item.id}>
                        <h2 className="post-title">{item.name}</h2>
                        <p className="post-body">{item.email}</p>
                        <div className="button">
                            <Link to={`/users/${item.id}`} className='btn btn-primary'>View</Link>
                        </div>
                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

export default User;
