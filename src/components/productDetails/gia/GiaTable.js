import styles from '../ProductDetails.module.scss';
import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
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
            <IconButton aria-label="comment">
              <div>{item.value}</div>
              {item.icon ?
                <ErrorOutlineIcon /> :
                ""
              }
            </IconButton>
          }
        >
          <ListItemText primary={item.feild} />
        </ListItem> 
      ))}
    </List>
  );
}

export default GiaTable