import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IceCreamListPage({ iceCreams, onFilter }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filtered = iceCreams.filter((ice) =>
      ice.name.toLowerCase().includes(search.toLowerCase()) ||
      ice.flavor.toLowerCase().includes(search.toLowerCase()) ||
      ice.brand.toLowerCase().includes(search.toLowerCase())
    );

    onFilter(filtered); // enviamos los resultados al padre
  }, [search, iceCreams]);

  return (
    <input
      type="text"
      placeholder="Search ice creams..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  );
}

export default IceCreamListPage;

