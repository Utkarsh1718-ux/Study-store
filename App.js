import React from "react";

const products = [
  {
    id: 1,
    title: "NEET Biology Notes",
    description: "Concise and complete handwritten notes for NEET aspirants.",
    price: "₹199",
  },
  {
    id: 2,
    title: "Class 11 NCERT Summary Book",
    description: "Summarized version of NCERT Biology for quick revision.",
    price: "₹149",
  },
  {
    id: 3,
    title: "Physics Formula Sheet",
    description: "All important formulas in one place.",
    price: "₹49",
  },
];

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#2c2c2c", color: "white", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "20px" }}>Study Store</h1>
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
        {products.map((product) => (
          <div key={product.id} style={{ backgroundColor: "#424242", padding: "20px", borderRadius: "12px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{product.title}</h2>
            <p style={{ fontSize: "1rem", color: "#b0b0b0" }}>{product.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{product.price}</span>
              <button style={{ padding: "8px 16px", backgroundColor: "#6200ea", color: "#fff", border: "none", borderRadius: "6px" }}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
