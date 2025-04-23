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
    <div style={{ minHeight: "100vh", backgroundColor: "#1c1c1c", color: "white", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Study Store</h1>
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {products.map((product) => (
          <div key={product.id} style={{ background: "#2e2e2e", borderRadius: "8px", padding: "16px" }}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
