import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Explorecard/exploreCard.css"
const ExploreCard = () => {
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

  return (
    <>
      {restaurants.map((restaurant) => (
        <Card  className="explore-card" key={restaurant.id} sx={{ maxWidth: 345 }}>
        <CardMedia className='explore-card-image'
            component="img"
            alt="Restaurant Picture"
            height="140"
            image={`http://localhost:8000/uploads/${restaurant.image}`}
            title={restaurant.Restaurant_name}
          />
          <CardContent className=''>
            <Typography  gutterBottom variant="h5" component="div">
              {restaurant.Restaurant_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.Description}
            </Typography>
            <Typography  variant="body2" color="text.secondary">
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
