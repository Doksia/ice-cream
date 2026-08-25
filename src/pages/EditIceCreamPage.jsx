import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import IceCreamForm from "./IceCreamForm";
import API_URL from "../config"

function EditIceCreamPage() {
  const [iceCream, setIceCream] = useState(null);
  const { iceCreamId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/icecreams/${iceCreamId}`)
      .then((res) => setIceCream(res.data))
      .catch(() => {
        alert("Ice cream not found");
        navigate("/ice-creams");
      });
  }, [iceCreamId]);

  const handleChange = (field, value) => {
    setIceCream((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/icecreams/${iceCreamId}`, {
        ...iceCream,
        price: +iceCream.price,
        stock: +iceCream.stock,
      })
      .then(() => navigate("/ice-creams"))
      .catch(() => alert("Error updating ice cream"));
  };

  if (!iceCream) return <LoadingSpinner />;
  return (
    <div>
      <h1>Edit ice cream</h1>

      <IceCreamForm
        iceCream={iceCream}
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonLabel="Update ice cream"
      />
    </div>
  );
}

export default EditIceCreamPage;
