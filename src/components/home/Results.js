import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import CardList from '../cardList/CardList'

//mui
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { GridActionsCellItem } from '@mui/x-data-grid';

//assets
import { ReactComponent as List } from "../../assets/icons/List.svg"
import { ReactComponent as Gallery } from "../../assets/icons/Gallery.svg"
import { ReactComponent as Compare } from "../../assets/icons/Compare.svg"
import { ReactComponent as Heart } from "../../assets/icons/Heart.svg"
import { ReactComponent as Shape } from "../../assets/icons/Shape.svg"
import { ReactComponent as Eye } from "../../assets/icons/Eye.svg"

const Results = () => {

  const columns = [
    {
      field: 'compare',
      headerName: 'Compare',
      type: 'boolean',
      renderCell: (params) => (<Compare stroke={params.row.compare ? '#2E90FA' : 'black'} fillOpacity={0} />),
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
      headerAlign: 'left',
      align: 'left',
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
      headerClassName: 'header',
      width: 120
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
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'header',
      renderCell: (params) => (<>{`$${params.row.price.toLocaleString()}`}</>),
    },
    {
      field: 'ct',
      headerName: '$/Ct',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'header',
      renderCell: (params) => (<>{`$${params.row.ct}`}</>),
    },
    {
      field: 'rap',
      headerName: '%Rap',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'header',
      renderCell: (params) => (<>{`${params.row.rap}%`}</>),
    },
    {
      field: 'watch',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Eye />}
          component={Link}
          to={`/productdetails`}
        />],
      headerClassName: 'header'
    }
  ];

  const rows = [
    { id: 1, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, compare: true },
    { id: 2, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, rare: true },
    { id: 3, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, compare: true },
    { id: 4, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37, rare: true },
    { id: 5, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
    { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
    { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
    { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
    { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
    { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
    { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
    { id: 6, shape: 'Round', size: 11.01, color: 'F', clarity: 'FL', cut: 'Very Good', polish: 'G', symmetry: 'VG', fluorescence: 'Very Strong', certified: 'GIA', price: 543345, ct: 186, rap: -37 },
  ];

  const [view, setView] = useState('list')
  const [isAll, setIsAll] = useState('all')
  const [pageSize, setPageSize] = useState(5);
  const [filteredRows, setFilteredRows] = useState([...rows]);

  useEffect(() => {
    const newRows = rows.filter((row) => row.compare);
    isAll === 'all' ? setFilteredRows(rows) : setFilteredRows(newRows)
  }, [isAll])

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
          <ToggleButton value="list" aria-label="list">
            <List />
          </ToggleButton>
          <ToggleButton value="gallery" aria-label="gallery">
            <Gallery />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box >
      <Box variant="outlined"
        sx={{

          display: 'flex',
          flexDirection: 'column',
          minHeight: '460px',
          width: '100%',
          border: '1px solid #EAECF0',
          boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          borderRadius: '8px',
        }}>
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
            <ToggleButton value='all' aria-label="left aligned" >
              {'All Diamonds (12,345)'}
            </ToggleButton>
            <ToggleButton value='some' aria-label="centered">
              {'Comparison (0)'}
            </ToggleButton>
          </ToggleButtonGroup>
        </Box >
        {filteredRows.length > 0 && view === 'list' ? (
          <DataGrid
            sx={{
              border: 'none',
              '& .header': { backgroundColor: '#FCFCFD' }
            }}
            rows={filteredRows}
            columns={columns}
            disableColumnMenu
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
          />
        ) : (<CardList products={filteredRows} getCardWidth={() => console.log('we dont need that function here')} />)}
      </Box>
    </>
  )
}
export default Results