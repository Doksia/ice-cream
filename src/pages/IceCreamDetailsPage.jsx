import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";

function IceCreamDetailsPage() {
  const [iceCream, setIceCream] = useState({});
  const [loading, setLoading] = useState(true);

  const { iceCreamId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/${iceCreamId}`)
      .then((response) => setIceCream(response.data))
      .catch(() => {
        alert("Ice cream not found");
        navigate("/ice-creams");
      })
      .finally(() => setLoading(false));
  }, [iceCreamId, navigate]);

  

if (loading) return <LoadingSpinner />;


  return (
    <div className="details-card">
      <div>
        <img src={iceCream.img} alt={iceCream.name} />

        <div>
          <h2>{iceCream.name}</h2>
          <p><span>Flavor:</span> {iceCream.flavor}</p>
          <p><span>Brand:</span> {iceCream.brand}</p>
          <p><span>Price:</span> {iceCream.price}$</p>
          <p><span>Stock:</span> {iceCream.stock}</p>
          <p><span>Description:</span> {iceCream.description}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default IceCreamDetailsPage;
