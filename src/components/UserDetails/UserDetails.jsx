import { useLoaderData, useNavigate } from "react-router-dom";



const UserDetails = () => {
    const user= useLoaderData();
    const {id,name,username,email,address,phone,website,company} = user;
    const navigate = useNavigate();

    const handleGoBack = ()=>{
        navigate (-1);
    }
    return (
        <div className="bg-red-300 p-8  rounded-2xl text-xl my-10 w-fit lg:w-1/3 mx-auto space-y-3">
            <h2><span className="font-bold ">User Id:</span> {id}</h2>
            <h2><span className="font-bold ">Name:</span> {name}</h2>
            <h2><span className="font-bold ">Username:</span> {username}</h2>
            <h2><span className="font-bold ">Email:</span> {email}</h2>
            <h2><span className="font-bold ">Address:</span> {address.street}</h2>
            <h2><span className="font-bold ">Phone:</span> {phone}</h2>
            <h2><span className="font-bold ">Website:</span> {website}</h2>
            <h2><span className="font-bold">Company:</span> {company.name}</h2>
            <button onClick={handleGoBack} className="btn btn-sm mt-6">Go Back</button>
        </div>
    );
};

export default UserDetails;