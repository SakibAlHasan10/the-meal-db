import { Outlet, useLoaderData } from "react-router-dom";
import AllCategory from "../AllCategory/AllCategory";
import AllMaleButton from "./AllMaleButton";


const AllMeal = () => {
    const {categories} = useLoaderData()
    // console.log(categories)
    return (
        <div className="my-6">
            <div className="flex mb-5 gap-3 flex-wrap mx-auto justify-center">
            {
                categories.map((category, i) => <AllMaleButton
                    key={i} 
                    category={category}
                ></AllMaleButton>)
                }
            </div>
            <Outlet></Outlet>
            {/* <h2 className="text-4xl mb-10">Categories</h2> */}
            <div className="grid grid-cols-3 gap-5 ">
                {
                    categories.map((category, i) => <AllCategory 
                    key={i} 
                    category={category}></AllCategory>)
                }
            </div>
        </div>
    );
};

export default AllMeal;