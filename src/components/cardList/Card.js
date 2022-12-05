import styles from './Card.module.scss';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import favorit from '../../assets/images/cardFavorit.png'
import rare from '../../assets/images/rare.png'

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

export default function RecipeReviewCard({img}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 279, border: '1px solid #EAECF0' }}>
      <CardMedia
        className={styles.cardImg}
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent className={styles.cardContent}>
        <CardActions className={styles.cardIcons} disableSpacing>
            <IconButton aria-label="share">
                <img src={rare} />
            </IconButton>
            <IconButton aria-label="add to favorites">
                <img src={favorit} />
            </IconButton>
        </CardActions>
        <Typography className={styles.cardPrice} variant="body1" color="text.secondary">
            $302,876
        </Typography>
        <Typography className={styles.cardTitle} variant="body2" color="text.secondary">
            5.01-Carat Asscher Cut Diamond
        </Typography>
        <Typography className={styles.cardDespriction} variant="body2" color="text.secondary">
            D  | FL | Very Good
        </Typography>
      </CardContent>
    </Card>
  );
}