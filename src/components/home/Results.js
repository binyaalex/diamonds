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
import { ReactComponent as Compare } from "../../assets/icons/Compare.svg"
import { ReactComponent as Heart } from "../../assets/icons/Heart.svg"
import { ReactComponent as Shape } from "../../assets/icons/Shape.svg"
import { ReactComponent as Eye } from "../../assets/icons/Eye.svg"

//data
const columns = [
  {
    field: 'compare',
    headerName: 'Compare',
    renderCell: () => (<Compare />),
    headerClassName: 'header'
  },
  {
    field: 'favorite',
    headerName: 'Favorite',
    renderCell: () => (<Heart />),
    headerClassName: 'header'
  },

  {
    field: 'shape',
    headerName: 'Shape',
    headerClassName: 'header',
    renderCell: (params) => (<><Shape style={{ marginRight: '14px' }} />{' '}{params.row.shape}</>),
  },
  {
    field: 'size',
    headerName: 'Size',
    type: 'number',
    headerClassName: 'header'
  },
  {
    field: 'color',
    headerName: 'Color',
    headerClassName: 'header'
  },
  {
    field: 'clarity',
    headerName: 'Clarity',
    headerClassName: 'header'
  },
  {
    field: 'cut',
    headerName: 'Cut',
    headerClassName: 'header'
  },
  {
    field: 'polish',
    headerName: 'Polish',
    headerClassName: 'header'
  },
  {
    field: 'symmetry',
    headerName: 'Symmetry',
    headerClassName: 'header'
  },
  {
    field: 'fluorescence',
    headerName: 'Fluorescence',
    headerClassName: 'header'
  },
  {
    field: 'certified',
    headerName: 'Certified',
    headerClassName: 'header'
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    headerClassName: 'header',
    renderCell: (params) => (<>{`$${params.row.price.toLocaleString()}`}</>),
  },
  {
    field: 'ct',
    headerName: '$/Ct',
    type: 'number',
    headerClassName: 'header',
    renderCell: (params) => (<>{`$${params.row.ct}`}</>),
  },
  {
    field: 'rap',
    headerName: '%Rap',
    type: 'number',
    headerClassName: 'header',
    renderCell: (params) => (<>{`${params.row.rap}%`}</>),
  },
  {
    field: 'watch',
    renderCell: () => (<Eye />),
    headerClassName: 'header'
  }
];

const rows = [
  { id: 1, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
  { id: 2, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
  { id: 3, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
  { id: 4, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
  { id: 5, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
  { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },

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

          <div variant="outlined"
            style={{ height: '500px', width: '100%', border: '1px solid #EAECF0', boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)', borderRadius: '8px' }}>
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
              autoPageSize='true'
              disableColumnMenu
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
            />
          </div>

          : 'g'
      }
    </>
  )
}
export default Results