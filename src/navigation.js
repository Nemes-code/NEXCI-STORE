import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link">
          POS
        </Link>
      </li>
      <li>
        <Link to="/inventory" className="nav-link">
          Stock
        </Link>
      </li>
      <li>
        <Link to="/point-of-sale" className="nav-link">
          Accounts
        </Link>
      </li>
      <li>
        <Link to="/supplier" className="nav-link">
          Suppliers
        </Link>
      </li>
      <li>
        <Link to="/hr" className="nav-link">
          Management
        </Link>
      </li>
      <li>
        <Link to="/crm" className="nav-link">
          Customers
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
