import PropTypes from 'prop-types'
import { Link, NavLink, useNavigate } from 'react-router-dom';
const AllMaleButton = ({category}) => {
    // console.log(category)
    const navigate = useNavigate()
    const handleButton = () =>{
        navigate(`/category/${strCategory}`)
    }
    const {strCategory} = category
    return (
        <div className="flex gap-4 flex-wrap text-center">
            {/* <Link to={`/category/${strCategory}`}> <button className='btn bg-red-500 hover:bg-red-700 text-white'>{strCategory}</button></Link> */}
            <NavLink to={`/category/${strCategory}`}>
            <button onClick={()=> handleButton()} className='btn bg-red-500 hover:bg-red-700 text-white'>{strCategory}</button>
            </NavLink>
        </div>
    );
};
AllMaleButton.propTypes ={
    category: PropTypes.object
}
export default AllMaleButton;