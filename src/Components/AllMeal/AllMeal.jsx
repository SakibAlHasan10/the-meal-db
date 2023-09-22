import { useLoaderData } from "react-router-dom";
import AllCategory from "../AllCategory/AllCategory";


const AllMeal = () => {
    const {categories} = useLoaderData()
    console.log(categories)
    return (
        <div className="my-6">
            <h2 className="text-4xl mb-10">Categories</h2>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    categories.map(category => <AllCategory 
                        key={category.id} 
                        category={category}></AllCategory>)
                }
            </div>
        </div>
    );
};

export default AllMeal;