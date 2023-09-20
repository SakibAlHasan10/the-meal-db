import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    // console.log(error)
    return (
        <div className="text-center flex flex-col justify-center">
            <h2 className="text-4xl">Oops!!!</h2>
        </div>
    );
};

export default ErrorPage;