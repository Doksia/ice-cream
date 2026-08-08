import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function IceCreamDetailsPage(){
        
    const [iceCream, setIcream] = useState({});
    const {iceCreamId} = useParams();
    useEffect(() => {
        axios
        .get(`http://localhost:5005/icecreams/${iceCreamId}`)
        .then((response) => {
            setIcream(response.data);
        })
        .catch((error) => {
            console.log("Error fetching the ice cream details", error);
        })
    }, [iceCreamId])
    
    return(
        <div>
            <img src={iceCream.img} alt="" />
            <h2>{iceCream.name}</h2>
            <p>{iceCream.description}</p>
            <p>{iceCream.flavor}</p>
            <p>{iceCream.brand}</p>
            <p>Price: {iceCream.price}$</p>
            <p>Stock: {iceCream.stock}</p>
        </div>
    );

}

export default IceCreamDetailsPage;