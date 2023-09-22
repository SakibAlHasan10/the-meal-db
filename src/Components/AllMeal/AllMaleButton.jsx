import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const AllMaleButton = ({category}) => {
    // console.log(category)
    const {strCategory} = category
    return (
        <div className="flex gap-4 flex-wrap text-center">
            <Link to={`/category/${strCategory}`}> <button className='btn bg-red-500 hover:bg-red-700 text-white'>{strCategory}</button></Link>
        </div>
    );
};
AllMaleButton.propTypes ={
    category: PropTypes.object
}
export default AllMaleButton;