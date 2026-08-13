import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function IceCreamDetailsPage() {
  const [iceCream, setIceCream] = useState({});
  const [loading, setLoading] = useState(true);

  const { iceCreamId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/icecreams/${iceCreamId}`)
      .then((response) => setIceCream(response.data))
      .catch(() => {
        alert("Ice cream not found");
        navigate("/ice-creams");
      })
      .finally(() => setLoading(false));
  }, [iceCreamId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="details-card">
      <img src={iceCream.img} alt={iceCream.name} />

      <div>
        <h2>{iceCream.name}</h2>
        <p>Description: {iceCream.description}</p>
        <p>Flavor: {iceCream.flavor}</p>
        <p>Brand: {iceCream.brand}</p>
        <p>Price: {iceCream.price}$</p>
        <p>Stock: {iceCream.stock}</p>

        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default IceCreamDetailsPage;
