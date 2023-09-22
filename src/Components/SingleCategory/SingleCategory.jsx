import { useLoaderData } from "react-router-dom";

const SingleCategory = () => {
    const {meals} = useLoaderData()
    // const mealt = 
    console.log(meals)
    return (
        <div className="flex gap-4 flex-wrap text-center">
            <h3>meal: {meals.length}</h3>
            {
                meals.map(meal => {
                    return <>
                    <img src={meal.strMealThumb}/>
                    {meal.strMeal}
                    </>
                })
            }
        </div>
    );
};

export default SingleCategory;