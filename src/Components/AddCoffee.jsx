import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee)

        //send coffee data to the db

        fetch('https://coffee-store-server-gamma-dun.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully', data)
                    Swal.fire({
                        title: "Your coffee is ready!!",
                        icon: "success",
                        draggable: true
                    });
                    //form reset

                }

            })
    }
    return (
        <div className='p-24'>
            <div className='p-12 space-y-4 text-center '>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>


                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Name</label>
                        <input type="text" className="input w-full" placeholder="Enter Coffee Name" name='name' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Quantity</label>
                        <input type="text" className="input w-full" placeholder="Enter quantity" name='quantity' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Suppiler</label>
                        <input type="text" className="input w-full" placeholder="Enter Coffee supplier" name='supplier' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" placeholder="Enter Coffee taste" name='tase' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Price</label>
                        <input type="text" className="input w-full" placeholder="Enter Coffee price" name='price' />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                        <label className="label">Details</label>
                        <input type="text" className="input w-full" placeholder="Enter Coffee details" name='details' />

                    </fieldset>


                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">


                    <label className="label">Photo URL</label>
                    <input type="text" className="input w-full" placeholder="Enter photo url" name='photo' />

                </fieldset>
                <input type="submit" className='btn w-full' value="Add coffee" />
            </form>

        </div>
    );
};

export default AddCoffee;