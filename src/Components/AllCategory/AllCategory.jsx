import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const AllCategory = ({category}) => {
    // console.log(category)
    const {strCategory, strCategoryDescription, strCategoryThumb} = category;
    return (
        <div className=" text-center mx-auto" >
            <Link to={`/category/${strCategory}`}>
                <img src={strCategoryThumb} alt="" />
                <h2 className="text-2xl">{strCategory}</h2>
            </Link>
        </div>
    );
};
AllCategory.propTypes ={
    category: PropTypes.object
}
export default AllCategory;