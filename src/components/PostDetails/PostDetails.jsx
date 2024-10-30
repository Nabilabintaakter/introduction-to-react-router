import { Link, useLoaderData, useParams } from "react-router-dom";


const PostDetails = () => {
    const {postId} = useParams();
    console.log(postId);
    const post = useLoaderData();
    const {userId, id, title, body}= post;
    return (
        <div className="bg-purple-400 p-8  rounded-2xl text-xl my-10 w-fit lg:w-1/3 mx-auto space-y-3">
            <h2><span className="font-bold ">User Id:</span> {userId}</h2>
            <h2><span className="font-bold ">Id:</span> {id}</h2>
            <h2><span className="font-bold ">Title:</span> {title}</h2>
            <h2><span className="font-bold ">Body:</span> {body}</h2>
            <Link to='/posts'><button className="btn btn-sm mt-6">Go Back</button></Link>
        </div>
    );
};

export default PostDetails;