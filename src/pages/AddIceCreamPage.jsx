import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddIceCreamPage() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [flavor, setFlavor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIceCream = {
      img,
      name,
      brand,
      flavor,
      description,
      price: Number(price),
      stock: Number(stock),
    };

    axios
      .post("http://localhost:5005/icecreams", newIceCream)
      .then(() => {
        navigate("/ice-creams");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="add-ice-cream">
      <h1>Add new ice cream</h1>

      <form onSubmit={handleSubmit}>
        <label>Image</label>
        <input type="url" value={img} onChange={(e) => setImg(e.target.value)} />

        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Brand</label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />

        <label>Flavor</label>
        <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />

        <label>Stock</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />

        <button type="submit">Create new ice cream</button>
      </form>
    </div>
  );
}

export default AddIceCreamPage;
