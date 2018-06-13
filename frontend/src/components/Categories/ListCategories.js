import React from "react";
import { Link } from "react-router-dom";

import Paper from "material-ui/Paper";
import { MenuItem, Menu } from "material-ui/Menu";

export default function ListCategories({ categories }) {
  return (
    <Paper style={paperStyle}>
      <Menu>
        <h4> Categories </h4>
        {Object.keys(categories).length > 0 &&
          categories.categories.map(category => (
            <MenuItem key={category.name}>
              <Link to={`/${category.path}/posts`} className="link">
                <button style={buttonStyle}>{category.name}</button>
              </Link>
            </MenuItem>
          ))}
      </Menu>
    </Paper>
  );
}

const paperStyle = {
  display: "inline-block",
  margin: "0px 0px 16px 30px",
  padding: "16px 16px 16px 16px",
  width: "100%"
};


const buttonStyle = {
  background: "transparent",
  border: "none",
  textAlign: "left",
  width: "100%",
  height: "50px"
};
