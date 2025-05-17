import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, photo, name, price, quantity, supplier, tase, details } = useLoaderData()
    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee)



        //send updated coffee to the db
        fetch(`https://coffee-store-server-gamma-dun.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee)


        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='p-24'>
            <div className='p-12 space-y-4 text-center '>
                <h1 className='text-6xl'>Update Coffee</h1>

            </div>
            <form onSubmit={handleUpdateCoffee} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Name</label>
                        <input type="text" defaultValue={name} className="input w-full" placeholder="Enter Coffee Name" name='name' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Quantity</label>
                        <input type="text" defaultValue={quantity} className="input w-full" placeholder="Enter quantity" name='quantity' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Suppiler</label>
                        <input type="text" defaultValue={supplier} className="input w-full" placeholder="Enter Coffee supplier" name='supplier' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Taste</label>
                        <input type="text" defaultValue={tase} className="input w-full" placeholder="Enter Coffee taste" name='tase' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Price</label>
                        <input type="text" defaultValue={price} className="input w-full" placeholder="Enter Coffee price" name='price' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Details</label>
                        <input type="text" defaultValue={details} className="input w-full" placeholder="Enter Coffee details" name='details' />

                    </fieldset>


                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">


                    <label className="label">Photo URL</label>
                    <input type="text" defaultValue={photo} className="input w-full" placeholder="Enter photo url" name='photo' />

                </fieldset>
                <input type="submit" className='btn w-full' value="Update coffee" />
            </form>

        </div>
    );
};

export default UpdateCoffee;