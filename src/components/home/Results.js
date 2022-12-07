import React, { useState } from 'react';
import styles from '../../App.module.scss';

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
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
    renderCell: () => (<List />), headerClassName: 'header'
  },
  { field: 'firstName', headerName: 'First name', width: 130, headerClassName: 'header' },
  { field: 'lastName', headerName: 'Last name', width: 130, headerClassName: 'header' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
    headerClassName: 'header'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    headerClassName: 'header'
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
  const [isAll, setIsAll] = useState('all')
  const [pageSize, setPageSize] = useState(5);


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
          sx={{
            '&>*': {
              color: '#344054',
              '&.Mui-selected': {
                backgroundColor: '#F9FAFB',
              }
            }
          }}
        >
          <ToggleButton value="list" aria-label="left aligned">
            <List />
          </ToggleButton>
          <ToggleButton value="gallery" aria-label="centered">
            <Gallery />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box >
      {
        view === 'list'
          ?

          <Paper variant="outlined"
            style={{ height: '400px', width: '100%' }}>
            <Box sx={{
              display: 'flex', justifyContent: 'left', p: "12px 16px"
            }}>
              <ToggleButtonGroup
                value={isAll}
                exclusive
                onChange={e => setIsAll(e.target.value)}
                aria-label="text alignment"
                sx={{
                  '&>*': {
                    p: '10px 16px',
                    textTransform: 'none',
                    color: '#344054',
                    '&.Mui-selected': {
                      backgroundColor: '#F9FAFB',
                    }
                  }
                }}
              >
                <ToggleButton value="all" aria-label="left aligned" >
                  {'All Diamonds (12,345)'}
                </ToggleButton>
                <ToggleButton value="compare" aria-label="centered">
                  {'Comparison (0)'}
                </ToggleButton>
              </ToggleButtonGroup>
            </Box >

            <DataGrid
              sx={{
                border: 'none',
                '& .header': { backgroundColor: '#FCFCFD' }
              }}
              rows={rows}
              columns={columns}

              disableColumnMenu
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
            />
          </Paper>

          : 'g'
      }
    </>
  )
}
export default Results