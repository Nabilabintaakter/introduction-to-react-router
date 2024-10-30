import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="text-5xl  flex flex-col justify-center items-center h-screen gap-3">
            <p className="font-bold">Oops!!!</p>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {
                error.status === 404 &&
                <div className="flex flex-col justify-center items-center">
                    <p className="text-lg mb-2">Go back where you come from</p>
                    <Link to='/users'><button className="btn">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;