import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllIceCreamsPage() {
  const [iceCreams, setIceCreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5005/icecreams")
      .then((response) => setIceCreams(response.data))
      .catch(() => setError("Error fetching ice creams"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this ice cream?")) return;

    axios
      .delete(`http://localhost:5005/icecreams/${id}`)
      .then(() => {
        setIceCreams((prev) => prev.filter((ice) => ice.id !== id));
      })
      .catch(() => alert("Error deleting ice cream"));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      <h1>All Ice Creams</h1>

      {iceCreams.length === 0 && <p>No ice creams available</p>}

      <div className="ice-cream-container">
        {iceCreams.map((iceCream) => (
          <div key={iceCream.id} className="card-ice-cream">
            <h2>{iceCream.name}</h2>

            <Link to={`/ice-creams/${iceCream.id}`}>
              <img src={iceCream.img} alt={iceCream.name} />
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
        ))}
      </div>
    </>
  );
}

export default AllIceCreamsPage;
