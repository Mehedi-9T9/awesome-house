
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Annaousement = () => {
    const axiosSecure = useAxiosSecure()
    const { data: annaousment = [] } = useQuery({
        queryKey: ['annaousement'],
        queryFn: async () => {
            const res = await axiosSecure.get("/annaousmentData")
            return res.data
        }
    })
    return (
        <div className=' bg-slate-200 h-screen'>
            <div className='py-10 bg-[#FFF8F5]'>
                <h2 className='text-3xl font-bold  ml-10'>Annaousment</h2>
            </div>
            {
                annaousment?.map((anna, idx) => <div key={idx} className='bg-white m-20 p-10 w-2/3 space-y-3 rounded-xl drop-shadow-md'>
                    <h2 className='text-2xl font-bold font-roboto text-[#F63E7B]'>{anna.title}</h2>
                    <p className='text-black font-poppins'>12-01-2024</p>
                    <p className='font-poppins'>{anna.description}.</p>
                </div>)
            }
        </div>
    );
};

export default Annaousement;