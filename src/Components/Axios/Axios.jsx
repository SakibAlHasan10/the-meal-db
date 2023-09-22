// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactLodear from "../ReactLoader/ReactLodear";

const Axios = () => {
    const [allData, setData] = useState([])
    const [loder, setLoder] = useState(true)
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        .then(data => setData(data.data.meals))
        setLoder(false)
    },[])
    return (
        <div>
            <h2 className="text-4xl">the meal data: {allData.length}</h2>
            {
                loder ? <ReactLodear></ReactLodear> : ''
            }
        </div>
    );
};

export default Axios;