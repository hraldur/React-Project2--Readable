import React from "react";
import { Link } from "react-router-dom";

export default function ListCategories({ categories }) {
  return (
    <div>
      <h4> Categories </h4>

      {Object.keys(categories).length > 0 &&
        categories.categories.map(category => (
          <ul key={category.name}>
            <li>{category.name}</li>
          </ul>
        ))}
    </div>
  );
}
