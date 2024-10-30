import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div>
            <div className="bg-purple-300 p-4 rounded-lg text-xl h-[180px] flex flex-col justify-between">
                <h2><span className="font-bold ">Post Id:</span> {id}</h2>
                <h2 className="mb-3"><span className="font-bold ">Title:</span> {title}</h2>
                <Link to={`/post/${id}`}><button className="btn btn-sm">Show Details</button></Link>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;