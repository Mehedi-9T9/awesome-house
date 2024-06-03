import { useForm } from "react-hook-form"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MakeAnnaousement = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()
    const currentDate = new Date().toLocaleDateString();
    const onSubmit = (data) => {
        const annaousmentInfo = { title: data.title, description: data.description, date: currentDate }
        axiosPublic.post("/annaousement", annaousmentInfo)
            .then(res => {
                reset()
                console.log(res.data);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Annaousment Create Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (

        <div className=' bg-slate-200 h-screen' >
            <div className='py-10 bg-[#F63E7B]'>
                < h2 className='text-3xl font-bold  ml-10' > Make Annaousement</h2 >
            </div >
            <div className='w-1/2 mx-auto bg-white mt-20 rounded-xl drop-shadow-md' >
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-roboto font-bold text-[#F63E7B]">Title</span>
                        </label>
                        <input type="text" placeholder="Title" {...register("title", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-roboto font-bold text-[#F63E7B]">Description</span>
                        </label>
                        <textarea {...register("description", { required: true })} className="textarea textarea-secondary" placeholder="Bio"></textarea>


                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-[#F63E7B]">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default MakeAnnaousement;