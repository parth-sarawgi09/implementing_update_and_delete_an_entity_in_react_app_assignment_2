import { useEffect, useState } from "react";
import axios from "axios";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;;

const Item = ({ item, onDelete }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <span>{item.name}</span>
      <button onClick={() => onDelete(item.id)} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
};

export default Item;