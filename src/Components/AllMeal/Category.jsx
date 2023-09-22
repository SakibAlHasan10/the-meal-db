
const Category = ({category}) => {
console.log(category)
const {strCategoryDescription,strCategoryThumb, strCategory} = category
    return (
        <div className="w-64">
            <img src={strCategoryThumb} alt="" />
            <h2>{strCategory}</h2>
        </div>
    );
};

export default Category;