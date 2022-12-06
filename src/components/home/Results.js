import React, { useState } from 'react';
import styles from '../../App.module.scss';

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
//assets
import { ReactComponent as List } from "../../assets/icons/List.svg"
import { ReactComponent as Gallery } from "../../assets/icons/Gallery.svg"

//data

const Results = () => {
  const [view, setView] = useState('list')


  return (
    <>
      <Box sx={{
        display: 'flex', justifyContent: 'right', p: "16px 0"
      }}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={e => setView(e.target.value)}
          aria-label="text alignment"
        >
          <ToggleButton value="list" aria-label="left aligned">
            <List />
          </ToggleButton>
          <ToggleButton value="gallery" aria-label="centered">
            <Gallery />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box >
      {view === 'list'
        ? "l"
        : 'g'
      }
    </>
  )
}
export default Results