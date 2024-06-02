import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import ApertmentCard from './ApertmentCard';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import './Apertment.css'


const Apertments = () => {
    const axiosPublic = useAxiosPublic()
    const [apertments, setApertment] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [productCount, setProductCount] = useState(0)

    useEffect(() => {
        axiosPublic.get(`/apertments?page=${currentPage}&size=${perpageItem}`)
            .then(res => setApertment(res.data))
    }, [axiosPublic, currentPage])

    useEffect(() => {
        axiosPublic.get('/totalApertment')
            .then(res => setProductCount(res.data?.totalApertment))
    }, [axiosPublic, currentPage])

    const perpageItem = 6
    const totalProducts = productCount
    const totalStep = Math.ceil(totalProducts / 6)
    const pages = [...Array(totalStep).keys()]



    const pageHandle = (count) => {
        setCurrentPage(count)

    }
    const previewHandle = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)

        }
        else {
            return
        }

    }
    const nextHandle = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
        else { return }
    }





    return (
        <>
            <div className='grid grid-cols-3 gap-10 my-20'>
                {
                    apertments?.map(app => <ApertmentCard key={app._id} app={app}></ApertmentCard>)
                }
            </div>
            <div className='space-x-3 pagebtn my-10 bg-slate-200 w-[44%] mx-auto drop-shadow-md items-center'>
                <button onClick={previewHandle} className='btn bg-[#FFF] ml-2'><GrCaretPrevious /></button>
                {
                    pages?.map(page => <button onClick={() => pageHandle(page)} className={currentPage == page && 'bg-[#F63E7B]'} key={page}>{page}</button>)
                }


                <button onClick={nextHandle} className='btn bg-[#FFF]'><GrCaretNext /></button>

            </div>
        </>
    );
};

export default Apertments;