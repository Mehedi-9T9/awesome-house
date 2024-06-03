import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import Swal from "sweetalert2";

const ApertmentCard = ({ app }) => {
    const { ApartmentImage, FloorNo, BlockName, ApartmentNo, Rent } = app
    const axiosPublic = useAxiosPublic()
    const { users } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const currentDate = new Date().toLocaleDateString();
    const handleArement = () => {
        if (!users) {
            navigate("/login", { state: location })
        } else {
            const apertmentInfo = {
                userName: users?.displayName,
                userEmail: users?.email,
                image: ApartmentImage,
                floorNo: FloorNo,
                blockName: BlockName,
                apertmentNo: ApartmentNo,
                rent: Rent,
                status: 'pending',
                date: currentDate

            }
            axiosPublic.post("/userroom", apertmentInfo)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `Floor No ${FloorNo} Agrement Successfull`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                })
        }



    }
    return (
        <div className="card  bg-[#F4F7FC] drop-shadow-md">
            <figure className="px-10 pt-10 relative">
                <img src={ApartmentImage} alt="Shoes" className="rounded-xl w-[400px]  h-[300px]" />
            </figure>
            <div className="card-body items-center text-center grid grid-cols-2 justify-center text-black font-poppins">
                <h2 className="">Block Name: <span>{BlockName}</span></h2>
                <p>Floor: <span>{FloorNo}</span></p>
                <p>Apertment: <span> {ApartmentNo}</span></p>

                <button onClick={() => handleArement(app)} className="btn bg-[#F63E7B]">Agrement</button>

            </div>
            <p className='absolute top-14 left-12 text-[#F63E7B] font-poppins font-bold text-xl bg-white bg-opacity-20 p-4 rounded-xl'>${Rent}</p>
        </div>
    );
};

export default ApertmentCard;