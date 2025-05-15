import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCrad from './CoffeeCrad';

const Home = () => {
    const initialCoffees=useLoaderData()
    const [coffees,setCoffees]=useState(initialCoffees)
    console.log(coffees)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee=> <CoffeeCrad key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}></CoffeeCrad>)
                }
            </div>
            
        </div>
    );
};

export default Home;