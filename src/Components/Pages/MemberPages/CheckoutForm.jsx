import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useMyRoom from '../../Hooks/useMyRoom';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = () => {
    const { users } = useAuth()
    const [myRoom] = useMyRoom()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const [error, setError] = useState('')
    const [transition, setTransition] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    // const totalPrice = myRoom.reduce((acc, current) => {
    //     const result = acc + current.rent
    //     return result
    // }, 0)
    const [price, setPrice] = useState(myRoom[0].rent)



    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { rent: price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
                console.log(res.data.clientSecret);
            })

    }, [axiosSecure, price])
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
    console.log(price);

    const handleSubmit = async (event) => {
        event.preventDefault()


        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('payment erro', error);
            setError(error.message)
        } else {
            console.log('[Paynemt success', paymentMethod);
        }

        //confirm payments
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: users?.email || "anonymous",
                    name: users?.displayName || "anonymous"
                }
            }
        })
        if (confirmError) {
            console.log("confirmError", confirmError);
        } else {
            console.log('payment successfull', paymentIntent)
            setTransition(paymentIntent.id)
        }

    }
    return (
        <div className='bg-white drop-shadow-md p-10 rounded-xl'>
            <form onSubmit={handleCoupons} className='flex my-5'>
                <input type="text" name='coupons' placeholder="Have any Coupons" className="input input-bordered input-warning rounded-3xl w-full  max-w-xs" />
                <button className='btn bg-yellow-500 rounded-3xl -ml-[71px]'>Apply</button>
            </form>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-5'>
                <label className="input input-bordered flex items-center gap-2 text-[#E63E7B] font-semibold">
                    Name
                    <input readOnly type="text" defaultValue={myRoom[0].userName} className="grow text-gray-400" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-[#E63E7B] font-semibold">
                    Email
                    <input readOnly type="text" defaultValue={myRoom[0].userEmail} className="grow text-gray-400" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-[#E63E7B] font-semibold">
                    Floor
                    <input readOnly type="text" defaultValue={myRoom[0].floorNo} className="grow text-gray-400" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-[#E63E7B] font-semibold">
                    Block Name
                    <input readOnly type="text" defaultValue={myRoom[0].blockName} className="grow text-gray-400" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-[#E63E7B] font-semibold">
                    Room
                    <input readOnly type="text" defaultValue={myRoom[0].apertmentNo} className="grow text-gray-400" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-[#E63E7B] font-semibold">
                    Rent
                    <input readOnly type="text" defaultValue={myRoom[0].rent} className="grow text-gray-400" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-[#E63E7B] font-semibold">
                    Month
                    <input type="text" defaultValue="January" className="grow text-gray-400" placeholder="Daisy" />
                </label>


                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn bg-yellow-500 my-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p>{error}</p>

            </form>
        </div>
    );
};

export default CheckoutForm;