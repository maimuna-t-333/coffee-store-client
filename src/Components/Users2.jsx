import {useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
// import { data } from "react-router";
import Swal from "sweetalert2";


const Users2 = () => {

    const {isPending,isError,error data:users}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:3000/users');
            return res.json()
        }

    })
    console.log(users)

    // const [users,setUsers]=useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:3000/users')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setUsers(data)
    //     })

    // },[])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount) {
                            const remainingUser = users.filter(user => user._id !== id)
                            setUsers(remainingUser)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }

                        // console.log(data)
                    })




            }
        });
    }

    if(isPending){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(isError){
        return <p>{error.message}</p>
    }

    return (
        <div>
            {/* <h2 className='text-3xl'>Users: {users.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>No <br /> Address</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.phone}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user.address}</span>
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button className="btn btn-xs">V</button>
                                    <button className="btn btn-xs">E</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-xs">X</button>
                                </th>
                            </tr>)
                        }




                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users2;