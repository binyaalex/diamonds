import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { GrDiamond } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';

import { useState } from 'react';
import avatar from "../../assets/images/avatar.jpg"
const pages = ['Loose Diamonds', 'Fancy Color Diamonds ', 'Lorem'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    display: "none",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  [theme.breakpoints.up('sm')]: {
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  // color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Inter',
  ].join(','),
  '&:hover': {
    color: '#6941C6',
  },
  '&.Mui-selected': {
    color: '#6941C6',
    backgroundColor: '#F9F5FF',
    borderRadius: "6px",
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    color: '#6941C6',
  },
}));

function Header() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        background: "white", color: '#344054', boxShadow: "none", borderBottom: "1px solid #EAECF0",
        fontFamily: ['Inter']
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D0D5DD 100%), #FFFFFF",
              border: "0.2px solid #D0D5DD",
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              display: 'flex',
              justifyContent: 'center',
              alignItems: "center",
              mr: 1
            }}
          >
            <GrDiamond
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 600,
              color: '#101828',
              textDecoration: 'none',
              fontFamily: ['Inter']

            }}
          >
            Diamonds
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              // fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
            >
              {pages.map((page) => (

                <AntTab
                  label={page}
                  key={page}
                />
              ))}
            </AntTabs>
            <Box sx={{ p: 3 }} />
          </Box>



          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Badge badgeContent={3} color="error" >
              <IconButton
                sx={{
                  padding: "12px",
                  width: "42px",
                  height: "40px",
                  border: "1px solid #D0D5DD",
                  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                  borderRadius: "8px",
                  ml: 2
                }}>
                <FiShoppingCart />
              </IconButton>
            </Badge>
            <Badge badgeContent={3} color="error" >

              <IconButton
                sx={{
                  padding: "12px",
                  width: "42px",
                  height: "40px",
                  border: "1px solid #D0D5DD",
                  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                  borderRadius: "8px",
                  ml: 2
                }}>
                <AiOutlineHeart />
              </IconButton>
            </Badge>
            <IconButton
              sx={{
                padding: "12px",
                width: "42px",
                height: "40px",
                borderRadius: "8px",
                ml: 2
              }}>
              <IoNotificationsOutline />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}

            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Header;