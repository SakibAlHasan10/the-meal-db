import { useEffect, useState } from "react";
import Category from "./Category";

const AllMeal = () => {
    const [categorys, setCategorys] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setCategorys(data.categories))
    },[])
    return (
        <div>
            <h2>all meal</h2>
            <div className="grid grid-cols-4">
                {
                    categorys.map((category, i) => <Category key={i} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default AllMeal;