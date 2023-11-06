import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AddPhoto = () => {

    const handleAddFruit = e => {
        e.preventDefault();
        const form = e.target;
        const fruitName = form.fruitName.value;
        const fruitTaste = form.fruitTaste.value;
        const fruitType = form.fruitType.value;
        const fruitRating = form.fruitRating.value;
        const fruitPhoto = form.fruitPhoto.value;
        const newFruit = { fruitName, fruitTaste, fruitType, fruitRating, fruitPhoto };
        // console.log(newFruit);

        // to send data on mongodb by using server
        fetch('http://localhost:4000/photos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFruit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${fruitName} Added Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
            })
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-4">Add a Fruit 🥝</h1>
            <div className="w-full md:w-4/5 mx-auto my-10 bg-gradient-to-r from-slate-700 to-slate-500 p-4 rounded shadow-2xl">
                <form onSubmit={handleAddFruit}>
                    {/* fruit name and fruit taste row */}
                    <div className="flex flex-col md:flex-row lg:flex-row w-full space-x-0 space-y-4 md:space-y-0 md:space-x-3">
                        <div data-aos="fade-left" data-aos-duration="1000" className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Fruit Name</span>
                            </label>
                            <input type="text" name="fruitName" placeholder="enter a fruit name" className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Taste</span>
                            </label>
                            <input type="text" name="fruitTaste" placeholder="enter the test like sour, sweet etc." className="input input-bordered" required />
                        </div>
                    </div>

                    {/* fruit type and fruit rating row */}
                    <div className="flex flex-col md:flex-row lg:flex-row my-4 w-full space-x-0 space-y-4 md:space-y-0 md:space-x-3">
                        <div data-aos="fade-left" data-aos-duration="1000" className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Fruit Type</span>
                            </label>
                            <input type="text" name="fruitType" placeholder="enter type of fruit like awesome, good, average" className="input input-bordered" required />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1000" className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Fruit Rating</span>
                            </label>
                            <input type="text" name="fruitRating" placeholder="enter the fruit rating" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* fruit image url */}
                    <div className="flex flex-col md:flex-row lg:flex-row w-full space-x-0 space-y-4 md:space-y-0 md:space-x-3">
                        <div data-aos="fade-up" data-aos-duration="1000" className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold text-white">Photo URL</span>
                            </label>
                            <input type="text" name="fruitPhoto" placeholder="enter the photo url of this fruit" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-slate-800 w-1/2 shadow-2xl px-3 py-2 rounded text-lg font-medium text-white bg-gradient-to-r from-orange-500 via-rose-600 to-orange-500 hover:-translate-y-1 transform duration-500">Add a Fruit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPhoto;