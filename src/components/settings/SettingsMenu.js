import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function SettingsMenu({page}) {
    const notActive = { padding: '8px 12px',
                        borderRadius: '6px',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#667085',
                      }
    const active = { padding: '8px 12px',
                        borderRadius: '6px',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#6941C6',
                        background: '#F9F5FF',
                      }
    let account = notActive
    let password = notActive
    let method = notActive
    let shipping = notActive
    switch (page) {
        case 'account':
            account = active
            break;
        case 'password':
            password = active
            break;
        case 'method':
            method = active
            break;
        case 'shipping':
            shipping = active
            break;
        default:
            account = active
            break;
    }
  return (
    <Stack direction="row" spacing={2}>
        <MenuList 
            sx={{padding: '0',
                gap: '8px',
                display: 'flex',
                flexDirection: 'column'}}
        >
            <MenuItem sx={account} >
                Account Info
            </MenuItem>
            <MenuItem sx={password} >
                Password
            </MenuItem>
            <MenuItem sx={method}>
                My payment methods
            </MenuItem>
            <MenuItem sx={shipping}>
                Shipping
            </MenuItem>
        </MenuList>
    </Stack>
  );
}