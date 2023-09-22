
const AllCategory = ({category}) => {
    console.log(category)
    const {strCategory, strCategoryDescription, strCategoryThumb} = category;
    return (
        <div className=" text-center mx-auto" >
            {/* <h2>All Category : {category}</h2> */}
            <img src={strCategoryThumb} alt="" />
            <h2 className="text-2xl">{strCategory}</h2>
        </div>
    );
};

export default AllCategory;