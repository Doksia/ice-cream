import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IceCreamListPage from "./IceCreamListPage";
import LoadingSpinner from "../components/LoadingSpinner";
import API_URL from "../services/api"

function AllIceCreamsPage() {

  const [iceCreams, setIceCreams] = useState([]);
  const [filtered, setFiltered] = useState([]); // ← nuevo estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/icecreams`)
      .then((response) => {
        setIceCreams(response.data);
        setFiltered(response.data); // mostrar todos al inicio
      })
      .catch(() => setError("Error fetching ice creams"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this ice cream?")) return;

    axios
      .delete(`${API_URL}/icecreams/${id}`)
      .then(() => {
        setIceCreams((prev) => prev.filter((ice) => ice.id !== id));
        setFiltered((prev) => prev.filter((ice) => ice.id !== id));
      })
      .catch(() => alert("Error deleting ice cream"));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="all-ice-creams">
      <IceCreamListPage iceCreams={iceCreams} onFilter={setFiltered} />

      <h1>All Ice Creams</h1>

      {filtered.length === 0 && <p>No ice creams found</p>}

      <div className="ice-cream-container">
        {filtered.map((iceCream) => (
          <div key={iceCream.id} className="card-ice-cream">
            <svg width="340" height="70">



  <defs>
    <path id="curvaH2" d="M0,50 Q170,0 340,50" />



  </defs>

  <text class="curveado">
    <textPath href="#curvaH2" startOffset="50%" text-anchor="middle">
      {iceCream.name}
    </textPath>
  </text>
</svg>



            <Link to={`/ice-creams/${iceCream.id}`}>
              <img className="img-default" src={iceCream.img} alt={iceCream.name} />
            </Link>

            <p><span>Price:</span> {iceCream.price}$</p>
            <p><span>Stock:</span> {iceCream.stock}</p>

            <div>
              <Link to={`/edit-ice-cream/${iceCream.id}`}>
                <button>Edit</button>
              </Link>

              <button onClick={() => handleDelete(iceCream.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllIceCreamsPage;
