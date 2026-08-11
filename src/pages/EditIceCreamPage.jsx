import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditIceCreamPage() {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [flavor, setFlavor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const { iceCreamId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/icecreams/${iceCreamId}`)
      .then((response) => {
        const ice = response.data;

        setImg(ice.img);
        setName(ice.name);
        setBrand(ice.brand);
        setFlavor(ice.flavor);
        setDescription(ice.description);
        setPrice(ice.price);
        setStock(ice.stock);
      })
      .catch((error) => {
        console.log("Error loading ice cream:", error);
      });
  }, [iceCreamId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedIceCream = {
      img,
      name,
      brand,
      flavor,
      description,
      price: Number(price),
      stock: Number(stock),
    };

    axios
      .put(`http://localhost:5005/icecreams/${iceCreamId}`, updatedIceCream)
      .then(() => {
        navigate("/ice-creams");
      })
      .catch((error) => {
        console.log("Error updating ice cream:", error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
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

      <button type="submit">Update ice cream</button>
    </form>
  );
}

export default EditIceCreamPage;
