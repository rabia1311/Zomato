import React, { useState, useEffect } from "react";

const Restuantdetail = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = () => {
    fetch("http://localhost:8000/admin/restaurant/")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <img
            src={`http://localhost:8000/uploads/${restaurant.image}`}
            alt="Restaurant Picture"
            style={{ height: "140px" }}
          />
          <h5>{restaurant.Restaurant_name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Restuantdetail;
