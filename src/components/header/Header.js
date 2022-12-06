import React, { useState } from 'react';
import styles from '../../App.module.scss';

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { EightK } from '@mui/icons-material';

//assets

import avatar from "../../assets/images/avatar.jpg"
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg"
import { ReactComponent as Orders } from "../../assets/icons/Orders.svg"
import { ReactComponent as Listings } from "../../assets/icons/Listings.svg"
import { ReactComponent as Offers } from "../../assets/icons/Offers.svg"
import { ReactComponent as Settings } from "../../assets/icons/Settings.svg"
import { ReactComponent as Support } from "../../assets/icons/Support.svg"
import { ReactComponent as Out } from "../../assets/icons/Out.svg"
import { ReactComponent as Cart } from "../../assets/icons/Cart.svg"
import { ReactComponent as Heart } from "../../assets/icons/Heart.svg"
import { ReactComponent as Bell } from "../../assets/icons/Bell.svg"


const pages = ['Loose Diamonds', 'Fancy Color Diamonds ', 'Lorem'];
const profile = [
  { title: 'Orders', icon: <Orders /> },
  { title: 'My Listings', icon: <Listings /> },
  { title: 'My Offers', icon: <Offers /> },
  { title: 'Settings', icon: <Settings />, divider: true },
  { title: 'Support', icon: <Support />, divider: true },
  { title: 'Log Out', icon: <Out /> },

];

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
      className={styles.nav}
      sx={{
        background: "white", color: '#344054', boxShadow: "none", borderBottom: "1px solid #EAECF0",
        fontFamily: ['Inter']
      }}
      position="fixed"
    >
      {/* <Container maxWidth="xl"> */}
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
          <Logo
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

        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          </Typography> */}

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
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
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
              <Cart />
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
              <Heart />
            </IconButton>
          </Badge>

          <IconButton
            sx={{
              padding: "12px",
              width: "42px",
              height: "40px",
              ml: 2
            }}>
            <Bell />
          </IconButton>

          <Tooltip title="My Profile">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
              <Avatar alt="Remy Sharp" src={avatar} />
            </IconButton>
          </Tooltip>

          <Menu
            //     PaperProps={{
            //   style: {width: "240px", height: "300px" },
            // }}
            sx={{
              mt: '45px',
              // width: "240px", height: "300px"
            }}
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
            <MenuList

            >
              <Box
                sx={{
                  width: "240px", display: 'flex', alignItems: 'center', p: "0 16px "
                }}>
                <Avatar alt="Remy Sharp" src={avatar} />
                <Box
                  sx={{
                    p: "12px "
                  }}>
                  <Typography >Danna Cohen</Typography>
                  <Typography
                    sx={{
                      color: "  #667085 "
                    }}

                  >Danna@gmail.com</Typography>
                </Box>
              </Box>
              <Divider />

              {profile.map((el) => (
                <>
                  <MenuItem key={el.title} onClick={handleCloseUserMenu}>
                    <ListItemIcon>{el.icon}</ListItemIcon>
                    <ListItemText fontSize="small">{el.title}</ListItemText>
                  </MenuItem>
                  {el.divider ? <Divider /> : null}
                </>
              ))}
            </MenuList>
          </Menu>

        </Box>

      </Toolbar>
      {/* </Container> */}
    </AppBar >
  );
}
export default Header;