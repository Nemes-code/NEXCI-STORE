import React from "react";

function Inventory() {
  return (
    <div>
      <navigation />

      <div className="nav">
        <h1>INVENTORY MANAGEMENT</h1>
        <img className="image" src="inventory.jpg" alt="Imfwage" />

        <h3>Available stock</h3>
        <h3>Stocks to order</h3>
        <h3>Expiry dates</h3>
        <h3>Much more</h3>
      </div>
    </div>
  );
}

export default Inventory;
