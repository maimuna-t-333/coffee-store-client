import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';

const SignIn = () => {
    const {signInUser}=use(AuthContext)
    const handleSignIn=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)

        //firebase sign in send
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            const signInInfo={
                email,
                lastSignInTime:result.user?.metadata?.lastSignInTime
            }
            axios.patch('http://localhost:3000/users',signInInfo)
            .then(data=>{
                console.log(data.data)
            })
            //update last sign in to db
            // fetch('http://localhost:3000/users',{
            //     method:'PATCH',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify(signInInfo)
            // })
            // .then(res=>{
            //     console.log(res.user)
            // })
            // .catch(data=>{
            //     console.log('after patch updated',data)
            // })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
                <div className="card bg-base-100 mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Sign In now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">
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

export default SignIn;