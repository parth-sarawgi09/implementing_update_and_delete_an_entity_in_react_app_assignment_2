import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors;`;

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(API_URI);
      setItems(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load items.");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URI}/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError("Failed to delete item.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {items.length > 0 ? items.map(item => (
        <Item key={item.id} item={item} onDelete={handleDelete} />
      )) : <p>No items available.</p>}
    </div>
  );
};

export default ItemList;