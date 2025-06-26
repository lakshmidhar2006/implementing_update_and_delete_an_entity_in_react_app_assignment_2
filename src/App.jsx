import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  // Fetch all doors from server
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URI);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, []);

  return <ItemList items={items} setItems={setItems} apiUrl={API_URI} />;
}

export default App;
