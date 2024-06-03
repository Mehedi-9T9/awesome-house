import React from 'react';

const AgrementRequestCard = ({ request }) => {
    const { apertmentNo, image, floorNo, blockName, rent, status, userName, userEmail, date, _id } = request
    console.log(request);
    const currentDate = new Date().toLocaleDateString();
    return (
        <div className="card card-side bg-base-100 shadow-xl m-10">

            <div className="card-body">
                <h2 className="card-title">Name: {userName}</h2>
                <h2 className="card-title">Name: {userEmail}</h2>
                <div className='flex'>
                    <p>Apertment No: {apertmentNo}</p>
                    <p>Floor No: {floorNo}</p>

                </div>

                <div className='flex'>
                    <p>Block Name: {blockName}</p>
                    <p>Rent: {rent}</p>
                </div>
                <div className='flex'>
                    <p>Status: {status}</p>
                    <p>date: {date}</p>
                </div>
                <div>
                    <button className='btn '>Accept</button>
                    <button className='btn '>Reject</button>
                </div>


            </div>
            <figure><img src={image} className='w-1/2 h-3/4 rounded-xl drop-shadow-md' alt="Movie" /></figure>
        </div>
    );
};

export default AgrementRequestCard;