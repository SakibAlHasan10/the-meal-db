import { useLoaderData } from "react-router-dom";

const Contact = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Contact;