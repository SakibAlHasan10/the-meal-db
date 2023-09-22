import { Link } from "react-router-dom";

const Bottom = () => {
    return (
        <div>
            <h2 className="text-3xl">Bottom</h2>
            <div className="mt-6">
                <Link to={'/rechart'}> <button className="btn btn-secondary">ReChart</button></Link>
                <Link to={'/category'}> <button className="btn btn-secondary">Category</button></Link>
                <Link to={'/contact'}> <button className="btn btn-secondary">Contact</button></Link>
            </div>
        </div>
    );
};

export default Bottom;