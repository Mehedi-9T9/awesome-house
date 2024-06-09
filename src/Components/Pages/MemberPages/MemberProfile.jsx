
import useAuth from '../../Hooks/useAuth';
import MemberProfileCard from './MemberProfileCard';
import useMyRoom from '../../Hooks/useMyRoom';
import { Helmet } from 'react-helmet-async';

const MemberProfile = () => {
    const [myRoom] = useMyRoom()
    const { users } = useAuth()
    return (
        <div className=' bg-slate-200 h-screen'>
            <Helmet>
                <title>Awesome House || My Profile</title>
            </Helmet>
            <div className='py-10 bg-[#FFF8F5]'>
                <h2 className='text-3xl font-bold  ml-10'>My Profile</h2>
            </div>

            <div className='flex gap-10 p-20 '>
                <div className='w-1/2 bg-white p-10 rounded-xl drop-shadow-md'>
                    <h2 className='text-2xl font-bold font-roboto'>Name: <span className='text-[#F63E7B]'>{users?.displayName}</span></h2>
                    <h3 className='text-xl font-roboto font-bold'>Email: <span className='text-[#F63E7B]'>{users?.email}</span></h3>
                </div>

                <img src={users?.photoURL} className='w-1/2 drop-shadow-md rounded-xl' alt="" />



            </div>
            {
                myRoom?.map(room => <MemberProfileCard key={room._id} memberInfo={room}></MemberProfileCard>)
            }
        </div>
    );
};

export default MemberProfile;