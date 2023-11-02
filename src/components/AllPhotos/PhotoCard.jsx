import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FiDelete } from 'react-icons/fi';
import { GrUpdate } from 'react-icons/gr';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const PhotoCard = ({ fruit, fruits, setFruits }) => {

    const { fruitName, fruitTaste, fruitType, fruitRating, fruitPhoto, _id } = fruit;

    // delete the specific data
    const handleDeletePhoto = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't able to see this Fruit: ${fruitName}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/photos/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `${fruitName} Deleted Successfully.`,
                                'success'
                            )
                            const remaining = fruits.filter(f => f._id !== _id);
                            setFruits(remaining);
                        }
                    })
            }
        })
    };

    return (
        <div className="my-5">
            <div className="card w-96 bg-base-100 shadow-2xl hover:shadow-blue-500 transition-transform hover:scale-105 duration-500">
                <figure><img className="h-[300px]" src={fruitPhoto} alt="Shoes" /></figure>
                <div className="card-body my-3">
                    <h2 className="card-title text-2xl">{fruitName}</h2>
                    <p className="text-lg">Taste: {fruitTaste}</p>
                    <p className="text-lg">Type: {fruitType}</p>
                    <p className="text-lg">Rating: {fruitRating}</p>
                    <div className="card-actions justify-evenly mt-3">
                        <button className="bg-slate-800 shadow-2xl px-3 py-2 rounded font-bold text-white bg-gradient-to-r from-rose-500 to-orange-600 hover:-translate-y-1 transform duration-500">
                            <Link className="flex justify-center items-center" to={`/cardetails/${_id}`}>Details <BsFillArrowRightCircleFill className="ml-2" /></Link>
                        </button>
                        <button className="bg-slate-800 shadow-2xl px-3 py-2 rounded font-bold text-white bg-gradient-to-r from-rose-500 to-orange-600 hover:-translate-y-1 transform duration-500">
                            <Link className="flex items-center justify-center" to={`/updatePhoto/${_id}`}> <GrUpdate className="mr-2" /> Update</Link>
                        </button>
                        <button className="bg-slate-800 shadow-2xl px-3 py-2 rounded text-2xl font-bold text-white bg-gradient-to-r from-rose-500 to-orange-600 hover:-translate-y-1 transform duration-500"
                            onClick={() => handleDeletePhoto(_id)}><FiDelete /></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PhotoCard;