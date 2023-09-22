
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const SingleCategory = () => {
    const {meals} = useLoaderData()
    const navigate = useNavigate()
    const handleBack = () =>{
        navigate(-1)
    }
    console.log(meals)
    return (
        <div className="flex gap-4 flex-wrap text-center">
            <h3 className="text-center text-3xl">meal: {meals.length}</h3>
            <div className="grid grid-cols-4 gap-6 justify-center">

                {
                    meals.map(meal => { 
                        return <>
                        <div className=" mx-auto my-3">
                            <Link>
                                <img src={meal.strMealThumb} className=""/>
                                <h2 className="text-2xl mt-3">{meal.strMeal}</h2>
                            </Link>
                        </div>
                        </>
                    })
                }
            </div>
            <button onClick={()=>handleBack()} className="bg-red-500 btn mx-auto">Back</button>
        </div>
    );
};

export default SingleCategory;