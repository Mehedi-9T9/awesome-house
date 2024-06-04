

const MemberProfileCard = ({ memberInfo }) => {
    const { apertmentNo, image, floorNo, blockName, rent, status, userName, userEmail, date, acceptDate, _id } = memberInfo

    return (
        <div className="card card-side bg-base-100 shadow-xl m-10 drop-shadow-md">

            <div className="card-body">
                <div className='border-b py-5'>
                    <h2 className="card-title">Name: <span className='text-[#F63E7B]'>{userName}</span></h2>
                    <h2 className="card-title">Name: <span className='text-[#F63E7B]'>{userEmail}</span> </h2>
                </div>
                <div className='flex text-black font-medium'>
                    <p>Apertment No: <span className='text-[#F63E7B] font-bold'>{apertmentNo}</span></p>
                    <p>Floor No: <span className='text-[#F63E7B] font-bold'>{floorNo}</span></p>

                </div>

                <div className='flex text-black font-medium'>
                    <p>Block Name: <span className='text-[#F63E7B] font-bold'> {blockName}</span></p>
                    <p>Rent: <span className='text-amber-400 text-xl'>$</span><span className='text-[#F63E7B] font-bold'>{rent}</span></p>
                </div>
                <div className='flex text-black font-medium'>

                    <p>Request Date: <span className='text-[#F63E7B] font-bold'>{date}</span></p>
                    <p>Accept Date: <span className='text-[#F63E7B] font-bold'> {acceptDate}</span></p>
                </div>
                {/* <div className='border-t p-5 space-x-5 '>
                    <button onClick={() => handleAccept(_id)} className='btn bg-[#F63E7B] text-white '>Accept</button>
                    <button onClick={() => handleReject(_id)} className='btn bg-[#F63E7B] text-white '>Reject</button>
                </div> */}


            </div>
            <figure><img src={image} className='w-1/2 h-3/4 rounded-xl drop-shadow-md' alt="Movie" /></figure>
        </div>
    );
};

export default MemberProfileCard;