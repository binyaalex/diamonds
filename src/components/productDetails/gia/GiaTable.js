import styles from '../ProductDetails.module.scss';
import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function GiaTable({data}) {
  return (
    <List>
      {data.map((item, i) => (
        <ListItem
          className={styles.listRow}
          key={i}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment" style={{ paddingRight: '28px', color: '#161D25' }} >
              <Typography>{item.value}</Typography>
              {item.icon ?
                <ErrorOutlineIcon style={{ paddingLeft: '10px' }} /> :
                ""
              }
            </IconButton>
          }
        >
          <ListItemText primary={item.feild} style={{ color: '#959EAD' }} />
        </ListItem> 
      ))}
    </List>
  );
}

export default GiaTable