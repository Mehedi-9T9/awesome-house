import { useEffect, useState } from 'react';
import useMyRoom from '../../Hooks/useMyRoom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const MakePayment = () => {

    const [myRoom] = useMyRoom()
    const [showMethod, setShowMethod] = useState(false)
    // const totalPrice = myRoom?.reduce((acc, current) => {
    //     return acc + current.rent
    // }, 0)
    const handlePayment = () => {
        setShowMethod(!showMethod)
    }
    // console.log(myRoom[0]);
    const [price, setPrice] = useState(myRoom[0]?.rent)
    const handleCoupons = (e) => {
        e.preventDefault()
        const coupons = e.target.coupons.value
        if (coupons === "AWSMH10") {
            const discount = price * (10 / 100)
            const result = price - discount
            setPrice(result)
        }
        if (coupons === "AWSMH20") {
            const discount = price * (20 / 100)
            const result = price - discount
            setPrice(result)

        }

    }

    return (
        <div className=' bg-slate-200 h-screen'>
            <div className='py-10 bg-[#FFF8F5]'>
                < h2 className='text-3xl font-bold  ml-10' > Make Payment </h2 >
            </div >
            <div className='m-10 flex gap-x-10'>
                <h2 className='text-3xl font-bold font-roboto bg-white inline-block p-10 drop-shadow-md rounded-lg'>My Room : <span className='text-yellow-500'>{myRoom?.length}</span></h2>
                <h2 className='text-3xl font-bold font-roboto bg-white inline-block p-10 drop-shadow-md rounded-lg'>Total Price : <span className='text-yellow-500'>{price}</span></h2>
                <div className='text-3xl font-bold font-roboto  bg-white inline-block p-10 drop-shadow-md rounded-lg'><button disabled={!myRoom.length
                } onClick={handlePayment} className='btn bg-yellow-500 '>{showMethod ? "After" : "Bill Pay"}</button> </div>
            </div>
            {
                showMethod ? <div className='m-10'>
                    <h2 className='text-2xl font-bold font-roboto text-yellow-500'>Pay Now</h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={price} handleCoupons={handleCoupons}></CheckoutForm>
                    </Elements>
                </div> : null
            }
        </div >
    );
};

export default MakePayment;