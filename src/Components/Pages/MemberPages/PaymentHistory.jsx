import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const { users } = useAuth()
    const [paymentInfo, setPaymentInfo] = useState([])
    useEffect(() => {
        axiosSecure.get(`/paymentData?email=${users?.email}`)
            .then(res => setPaymentInfo(res.data))

    }, [axiosSecure, users?.email])

    const handleSearch = (e) => {
        e.preventDefault()
        const getMonth = e.target.month.value;
        const month = getMonth.toLowerCase();
        axiosSecure.get(`/paymentmonth?email=${users?.email}&month=${month}`)
            .then(res => setPaymentInfo(res.data))

    }

    return (
        <div className=' bg-slate-200 h-screen'>
            <Helmet>
                <title>Awesome House || Pay History</title>
            </Helmet>
            <div className='py-10 bg-[#FFF8F5]'>
                < h2 className='text-3xl font-bold  ml-10' >Payment History</h2 >
            </div >
            <div className='md:m-20'>
                <div className='flex p-5 bg-[#F63E7B] items-center justify-around drop-shadow-md rounded-xl'>
                    <h2 className='text-2xl font-bold text-yellow-500'>Don't share this information</h2>
                    <form onSubmit={handleSearch} className='flex my-5'>
                        <input type="text" name='month' placeholder="Search by month" className="input input-bordered input-warning rounded-3xl w-full  max-w-xs" />
                        <button className='btn bg-yellow-500 rounded-3xl -ml-[73px]'>Search</button>
                    </form>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-xl'>
                                    <th>SL</th>
                                    <th>Payment Date</th>
                                    <th>Transition ID</th>
                                    <th>Pay Month</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    paymentInfo?.map((pay, ind) => <tr key={pay._id}>
                                        <th>{ind + 1}</th>
                                        <td>{pay.paymentData}</td>
                                        <td>{pay.trensitionID}</td>
                                        <td>{pay.month}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default PaymentHistory;