import { Link } from "react-router-dom";

const CategoryMeal = ({meal}) => {
    // console.log(meal)
    const {strCategory}= meal
    return (
        <div className="">
            <Link> <button className="btn">{strCategory}</button></Link>
        </div>
    );
};

export default CategoryMeal;