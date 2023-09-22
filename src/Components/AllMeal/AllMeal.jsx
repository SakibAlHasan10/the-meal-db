
import { useLoaderData } from "react-router-dom";

const AllMeal = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className="my-6">
            <h2>All Categories</h2>
        </div>
    );
};

export default AllMeal;