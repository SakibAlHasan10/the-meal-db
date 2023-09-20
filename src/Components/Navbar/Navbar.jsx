import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [inputText, setInputText] = useState('')

    // console.log(inputText)
    const handleInputText = (e) =>{
        if(e.key==='Enter'){
            setInputText(e.target.value)
        }
    }
    console.log(inputText)
    return (
        <div className=" bg-orange-950">
            <div className="flex items-center py-7 max-w-screen-xl mx-auto justify-between">
                <h2 className="text-3xl  text-yellow-200 font-bold">TheMealDB</h2>
                <div>
                    <Link to={'/'}>
                    <button className="bg-red-500 text-xl font-semibold text-white px-3 py-2 rounded-lg mr-4">Home</button>
                    </Link>
                    <Link>
                        <input onKeyDown={handleInputText} type="text" placeholder="Search" className="px-2 h-8 w-40 rounded-md" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;