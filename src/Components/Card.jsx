import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function productcard({ id, price, name, description, img, rating }) {

  return (

    <Card sx={{ maxWidth: 345 }}>

      <CardHeader
        action={
          <IconButton onClick={() => console.log("addFavorite")}>
            <FavoriteIcon />
          </IconButton>
        }
        title={
          <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
            {name}
          </Link>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>}
      />

      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="myProduct"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>


      <CardActions disableSpacing>

        <IconButton aria-label="addShop">
          <AddShoppingCartIcon />
        </IconButton>

        <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
      </CardActions>

    </Card>
  );
}
