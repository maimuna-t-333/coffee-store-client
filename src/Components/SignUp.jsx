import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    console.log(createUser)
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)

        const { email, password, ...resFormData } = Object.fromEntries(formData.entries())
        


        // console.log(email, password, userProfile)

        //create user in firebase
        createUser(email, password)
            .then(res => {
                console.log(res.user)

                const userProfile={
            email,
            ...resFormData,
            creationTime:res.user?.metadata.creationTime,
            lastSignInTime:res.user?.metadata.lastSignInTime
        }
                //using axios
                axios.post('http://localhost:3000/users',userProfile)
                .then(data=>{
                    if(data.data.insertedID){
                        console.log('data added to the database')
                    }
                })

                //using fetch
                //save profile info in the database
                // fetch('http://localhost:3000/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(userProfile)
                // }
                // )
                    // .then(res => res.json())
                //     .then(data => {
                //         if (data.insertedId) {
                //             Swal.fire({
                //                 position: "top-end",
                //                 icon: "success",
                //                 title: "Your account has been created",
                //                 showConfirmButton: false,
                //                 timer: 1500
                //             });
                //         }
                //     }
                // )
            })
            // .catch(error => {
            //     console.log(error)
            // })
    }
    return (


        <div className="card bg-base-100 mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">SignUp now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="Phone" />
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Address" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>

    );
};

export default SignUp;