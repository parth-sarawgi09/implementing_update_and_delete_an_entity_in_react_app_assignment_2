import ItemList from "./components/ItemList";

const App = () => {
  return (
    <div style={{ width: "300px", margin: "20px auto", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Item List</h2>
      <ItemList />
    </div>
  );
};

export default App;