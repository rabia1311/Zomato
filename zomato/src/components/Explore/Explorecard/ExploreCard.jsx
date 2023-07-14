import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Explorecard/exploreCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ExploreCard = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = () => {
    fetch('http://localhost:8000/admin/restaurant')
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleRestaurantClick = (restaurantName) => {
    axios
      .get("http://localhost:8000/admin/subcategory", {
        params: {
          Restaurantname: restaurantName,
        },
      })
      .then((subcategoryResponse) => {
        const subcategories = subcategoryResponse.data.filter(
          (subcat) => subcat.Restaurantname === restaurantName
        );

        axios
          .get("http://localhost:8000/admin/restaurant/")
          .then((restaurantResponse) => {
            const restaurants = restaurantResponse.data.filter(
              (restaurant) => restaurant.Restaurant_name === restaurantName
            );

            console.log("Subcategory details:", subcategories);
            console.log("Restaurant details:", restaurants);

            navigate("/menu", { state: { subcategories, restaurants } });
          })
          .catch((error) => {
            console.log("Error fetching restaurant details:", error);
          });
      })
      .catch((error) => {
        console.log("Error fetching subcategory details:", error);
      });
  };

  return (
    <>
      {restaurants.map((restaurant) => (
        <Card
          oncclassName="explore-card"
          key={restaurant.id}
          sx={{ maxWidth: 345 }}
        >
          <CardMedia
            className="explore-card-image"
            component="img"
            alt="Restaurant Picture"
            height="140"
            image={`http://localhost:8000/uploads/${restaurant.image}`}
            title={restaurant.Restaurant_name}
          />
          <CardContent className="">
            <Typography gutterBottom variant="h5" component="div" onClick={() => handleRestaurantClick(restaurant.Restaurant_name)}>
              {restaurant.Restaurant_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.Description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Delivery Time: {restaurant.DeliveryTime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: {restaurant.Restaurant_Address}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ExploreCard;
