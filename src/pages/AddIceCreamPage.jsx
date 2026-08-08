import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddIceCreamPage() {
    
    const [img, setImg] = useState("");
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [flavor, setFlavor] = useState("");
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIceCream = {
        img: img,
        name: name,
        brand: brand,
        flavor: flavor,
        description: description,
        price: price,
        stock: stock
        }
        axios.
        post("http://localhost:5005/icecreams", newIceCream)
        .then((response) => {
            console.log("Ice cream created");
            navigate("/ice-creams");
        
        })
        .catch((error) => {
            console.assert.log(error);
        })
    }

    const navigate = useNavigate(handleSubmit);
    
    return(
        <div className="add-ice-cream">
            <h1>Add new ice cream</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Image</label>
                <input type="url" name="" id="" onChange={(e) => setImg(e.target.value)} value={img}/>
                <label htmlFor="">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                <label htmlFor="">Price</label>
                <input type="number" name="" id="" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <label htmlFor="">Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label htmlFor="">Brand</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                <label htmlFor="">Flavor</label>
                <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)}/>
                <label htmlFor="">Stock</label>
                <input type="number" name="" id="" value={stock} onChange={(e) => setStock(e.target.value)}/>
                <button type="submit">Create new ice cream</button>
            </form>
        </div>
    );
}

export default AddIceCreamPage;