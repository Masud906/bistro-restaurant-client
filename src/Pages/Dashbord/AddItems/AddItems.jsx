import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VIE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        //upload to imgbb
        const imageFile = {image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
    };

    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Racipe Name"
                            {...register('name', {required: true})}
                            required
                            className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category", {required: true})}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="przza">Przza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        {/* price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', {required: true})}
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* recepe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Racipe Details</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                       
                    </label>

                    <div className="form-control w-full my-6">
                    <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    
                    <button className="btn btn-warning">Add Items
                    <FaUtensils className="ml-4"></FaUtensils> </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;