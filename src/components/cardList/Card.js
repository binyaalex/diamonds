import styles from './Card.module.scss';
import * as React from 'react';
import { useNavigate } from "react-router-dom";

//mui
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//assets
import favorit from '../../assets/images/cardFavorit.png'
import rare from '../../assets/images/rare.png'
import sale from '../../assets/images/Sale.png'
import eye from '../../assets/images/eye.png'
import cart from '../../assets/images/cart.png'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ img, product }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  // console.log(product);
  const price = product.price?.toLocaleString() || null
  // console.log(img);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  
      sx = {{ 
        maxWidth: 279, 
        border: '1px solid #EAECF00', 
        cursor: 'pointer',
        position: 'relative',
        // '&:hover': {
        //   backgroundColor: '#212B36',
        //   opacity: 0.2,
        // },
      }} 
      onClick={() => navigate('/productdetails')}
    >
      {product.sale ? 
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: 'rgb(33,43,54, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 1,
          }}
        >
          <IconButton aria-label="" className={styles.saleIcon}>
            <img src={sale} />
          </IconButton>
          <IconButton aria-label="">
            <img src={eye} />
          </IconButton>
          <IconButton aria-label="">
            <img src={cart} />
          </IconButton>
        </Box>
      : ""}
      
      <CardMedia
        className={styles.cardImg}
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent className={styles.cardContent}>
        <CardActions className={styles.cardIcons} disableSpacing>
          <IconButton aria-label="">
            {product.rare ? 
              <img src={rare} />
            : ""}
      </IconButton>
          <IconButton aria-label="add to favorites">
            <img src={favorit} />
          </IconButton>
        </CardActions>
        <Typography className={styles.cardPrice} variant="body1" color="text.secondary">
          {`$ ${price ? price : '302,876'}`}
          {/* {`$${product?.price.toLocaleString() || '32,876'}`} */}
        </Typography>
        <Typography className={styles.cardTitle} variant="body2" color="text.secondary">
          5.01-Carat Asscher Cut Diamond
        </Typography>
        <Typography className={styles.cardDespriction} variant="body2" color="text.secondary">
          {product?.color || 'D'}  | {product?.clarity || 'FL'} | {product?.cut || 'Very Good'}
        </Typography>
      </CardContent>
    </Card>
  );
}