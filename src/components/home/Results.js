import React, { useState } from 'react';
import styles from '../../App.module.scss';

//mui
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';




import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
//assets
import { ReactComponent as List } from "../../assets/icons/List.svg"
import { ReactComponent as Gallery } from "../../assets/icons/Gallery.svg"

//data
const columns = [
  {
    field: 'id', headerName: 'ID', width: 70,
    renderCell: () => <List />
  },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: "List", lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
        ?
        <Box style={{ height: 400, width: '100%' }}>

          <DataGrid
            sx={{ border: 'none' }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableColumnMenu
          />
        </Box>
        : 'g'
      }
    </>
  )
}
export default Results