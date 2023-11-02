import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePhoto = () => {

    const singleFruit = useLoaderData();
    const { fruitName, fruitTaste, fruitType, fruitRating, fruitPhoto, _id } = singleFruit;
    // console.log(singleFruit);

    // for updating my old data with this new one
    const handleUpdatePhoto = e => {
        e.preventDefault();
        const form = e.target;
        const fruitName = form.fruitName.value;
        const fruitTaste = form.fruitTaste.value;
        const fruitType = form.fruitType.value;
        const fruitRating = form.fruitRating.value;
        const fruitPhoto = form.fruitPhoto.value;
        const updateFruitPhoto = { fruitName, fruitTaste, fruitType, fruitRating, fruitPhoto };

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/photos/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateFruitPhoto)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire(`${fruitName} Updated`, '', 'success')
                        }
                    })

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    };

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold text-center my-4 bg-gradient-to-r from-orange-700 via-rose-500 to-blue-500 inline-block text-transparent bg-clip-text">Update a Fruit: {fruitName} 🤟</h1>
            </div>
            <div className="w-full md:w-4/5 mx-auto my-10 bg-gradient-to-r from-slate-700 to-slate-500 p-4 rounded shadow-2xl">
                <form onSubmit={handleUpdatePhoto}>
                    {/* fruit name and fruit taste row */}
                    <div className="flex flex-col md:flex-row lg:flex-row w-full space-x-0 space-y-4 md:space-y-0 md:space-x-3">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Fruit Name</span>
                            </label>
                            <input type="text" name="fruitName" defaultValue={fruitName} placeholder="enter a fruit name" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Taste</span>
                            </label>
                            <input type="text" name="fruitTaste" defaultValue={fruitTaste} placeholder="enter the test like sour, sweet etc." className="input input-bordered" required />
                        </div>
                    </div>

                    {/* fruit type and fruit rating row */}
                    <div className="flex flex-col md:flex-row lg:flex-row my-4 w-full space-x-0 space-y-4 md:space-y-0 md:space-x-3">
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Fruit Type</span>
                            </label>
                            <input type="text" name="fruitType" defaultValue={fruitType} placeholder="enter type of fruit like awesome, good, average" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Fruit Rating</span>
                            </label>
                            <input type="text" name="fruitRating" defaultValue={fruitRating} placeholder="enter the fruit rating" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* fruit image url */}
                    <div className="flex flex-col md:flex-row lg:flex-row w-full space-x-0 space-y-4 md:space-y-0 md:space-x-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Photo URL</span>
                            </label>
                            <input type="text" name="fruitPhoto" defaultValue={fruitPhoto} placeholder="enter the photo url of this fruit" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-slate-800 w-1/2 shadow-2xl px-3 py-2 rounded text-lg font-medium text-white bg-gradient-to-r from-orange-500 via-rose-600 to-orange-500 hover:-translate-y-1 transform duration-500">Add a Fruit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdatePhoto;