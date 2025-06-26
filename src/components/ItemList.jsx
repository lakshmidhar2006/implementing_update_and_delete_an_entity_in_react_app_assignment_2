import Item from "./Item";

const ItemList = ({ items, setItems, apiUrl }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      // Filter out deleted item
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Delete error:", error.message);
    }
  };

  return (
    <>
      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        items.map((item) => (
          <Item key={item.id} item={item} onDelete={handleDelete} />
        ))
      )}
    </>
  );
};

export default ItemList;
