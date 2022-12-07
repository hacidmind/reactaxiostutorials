
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

// import UpdateUser from '../components/UpdateUser';

const UserPage = () => {
    const { id } = useParams()
    const navigate = useNavigate(); //new
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(`https://6387783ad9b24b1be3f17893.mockapi.io/users/${id}/`).then((data) => {
            console.log(data);
            setPost(data.data)
        })
    })


    //start
    function deletePost() {
        axios
          .delete(`https://6387783ad9b24b1be3f17893.mockapi.io/users/${id}/`)
          .then(() => {
            alert("Post deleted!");
            setPost(null)
            navigate('/user')
          });
      }
      //end
    return (
        <div className='container'>
            Hi {id}
            <h1>{post.name}</h1>
            <p>{post.email}</p>
            <div>
                <Link to={`/edituser/${id}`} className='btn btn-secondary' >Edit</Link>
                <button className='btn btn-danger float-end' onClick={deletePost}>Delete</button>
            </div>
            {/* <UpdateUser /> */}
        </div>
    );
}

export default UserPage;