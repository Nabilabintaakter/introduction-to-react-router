import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const User = ({user}) => {
    const {name, id} = user;
    return (
        <div className="bg-red-200 p-4 rounded-lg text-xl">
            <h2><span className="font-bold ">User Id:</span> {id}</h2>
            <h2 className="mb-3"><span className="font-bold ">Name:</span> {name}</h2>
            <Link to={`/user/${id}`}><button className="btn btn-sm">Show Details</button></Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
};

export default User;