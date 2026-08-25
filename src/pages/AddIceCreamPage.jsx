import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IceCreamForm from "./IceCreamForm";
import API_URL from "../config"


function AddIceCreamPage() {
  const [iceCream, setIceCream] = useState({
    img: "",
    name: "",
    brand: "",
    flavor: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setIceCream((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/icecreams`, {
        ...iceCream,
        price: +iceCream.price,
        stock: +iceCream.stock,
      })
      .then(() => navigate("/ice-creams"))
      .catch(() => alert("Error creating ice cream"));
  };

  return (
    <div>
      <h1>Add new ice cream</h1>

      <IceCreamForm
        iceCream={iceCream}
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonLabel="Create new ice cream"
      />
    </div>
  );
}

export default AddIceCreamPage;
