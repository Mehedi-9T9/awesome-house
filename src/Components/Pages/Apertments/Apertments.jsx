import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Apertments = () => {
    const axiosPublic = useAxiosPublic()
    const [apertments, setApertment] = useState([])

    useEffect(() => {
        axiosPublic.get("/apertments")
            .then(res => setApertment(res.data))
    }, [axiosPublic])




    return (
        <div>
            This is apertments{apertments.length}
        </div>
    );
};

export default Apertments;