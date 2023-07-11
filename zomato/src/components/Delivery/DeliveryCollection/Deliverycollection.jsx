import React, { useEffect, useState } from 'react';

const Deliverycollection = () => {
  const [categories, setCategories] = useState([]);
  const [catCredentials, setCatCredentials] = useState({
    category: {
      CategoryType: "",
      CategoryName: "",
      Description: "",
      image: "",
    },
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://localhost:8000/admin/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.CategoryName}
            {category.CategoryType}
            {category.Description}
            {category.image}
          
          
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Deliverycollection;
