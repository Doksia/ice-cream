import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IceCreamListPage from "./IceCreamListPage";

function AllIceCreamsPage() {
  const [iceCreams, setIceCreams] = useState([]);
  const [filtered, setFiltered] = useState([]); // ← nuevo estado
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5005/icecreams")
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
      .delete(`http://localhost:5005/icecreams/${id}`)
      .then(() => {
        setIceCreams((prev) => prev.filter((ice) => ice.id !== id));
        setFiltered((prev) => prev.filter((ice) => ice.id !== id));
      })
      .catch(() => alert("Error deleting ice cream"));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <IceCreamListPage iceCreams={iceCreams} onFilter={setFiltered} />

      <h1>All Ice Creams</h1>

      {filtered.length === 0 && <p>No ice creams found</p>}

      <div className="ice-cream-container">
        {filtered.map((iceCream) => (
          <div key={iceCream.id} className="card-ice-cream">
            <h2>{iceCream.name}</h2>

            <Link to={`/ice-creams/${iceCream.id}`}>
              <img src={iceCream.img} alt={iceCream.name} />
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
