import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const  ExploreCard=()=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://imgmedia.lbb.in/media/2023/01/63c64d951d43b562bfdbf1ab_1673940373792.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Restuarant card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Restuarants available in Behala.
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default ExploreCard;
