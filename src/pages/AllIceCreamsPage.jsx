import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AllIceCreamsPage() {

    const [iceCreams, setIceCreams] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:5005/icecreams")
        .then((response) => {
            setIceCreams(response.data);
        })
        .catch((error) => {
            console.log("Error fetching the ice creams", error);
        })
    }, [])

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5005/icecreams/${id}`)
            .then(() => {
                // Filtrar el helado eliminado sin recargar la página
                setIceCreams((prev) => prev.filter((ice) => ice.id !== id));
            })
            .catch((error) => {
                console.log("Error deleting ice cream", error);
            });
    };
    return(
        <> 
        <h1>All Ice Creams</h1>
        <div className="ice-cream-container">           
            {iceCreams.map((iceCream) => {
                return(
                    <div key={iceCream.id} className="card-ice-cream">
                        <h2>{iceCream.name}</h2>
                        <Link to={`/ice-creams/${iceCream.id}`}>
                        <img src={iceCream.img} alt="" />
                        </Link>
                        <p>Price: {iceCream.price}$</p>
                        <p>Stock: {iceCream.stock}</p>
                        <div>
                        <Link to={`/edit-ice-cream/${iceCream.id}`}>
  <button>Edit</button>
</Link>
                        <button onClick={() => handleDelete(iceCream.id)}>Delete</button>
                    </div>
                    </div>
                    
                );
            })}
        </div>
        </>
    );
}

export default AllIceCreamsPage;