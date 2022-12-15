import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function AccountDetails() {
    const headerCss = {
        padding: '2px 48px 20px 0',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '28px',
        color: '#101828',
    }
    const listItemCss = {
        padding: '20px 48px 20px 0',
        borderTop: '1px solid #EAECF0',
    }
    const editCss = {
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '18px',
        borderBottom: '1px solid',
        color: '#000000',
    }
    const fieldCss = {
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#101828',
    }
    const valueCss = {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '20px',
        color: '#475467',
    }

    const accountArr = [
        {
            field: 'Company Name',
            value: 'Diamonds LLC',
        },
        {
            field: 'DBA',
            value: 'DBA',
        },
        {
            field: 'Business type',
            value: 'This is my buisness type',
        },
        {
            field: 'Tax Identification Number',
            value: 'TIN/EIN number',
        },
        {
            field: 'Business address',
            value: 'Start typing address...',
        },
        {
            field: 'Email',
            value: 'myemail@gmail.com',
        },
        {
            field: 'Phone number',
            value: '0544435566',
        },
        {
            field: 'Main contact',
            value: 'Danna Marom',
        },
    ]

    return (
        <List sx={{ width: '90%', bgcolor: 'background.paper', paddingTop: 0 }}>
            <Typography sx={headerCss} >
                Account
            </Typography>
            {accountArr.map((element, i) => (
                <ListItem
                    sx={listItemCss}
                    key={i}
                    disableGutters
                    secondaryAction={
                        <Typography sx={editCss} >
                            Edit
                        </Typography>
                    }
                >
                    <Stack direction="column" spacing={0}>
                        <Typography sx={fieldCss} >
                            {element.field}
                        </Typography>
                        <Typography sx={valueCss} >
                            {element.value}
                        </Typography>
                    </Stack>
                </ListItem>
            ))}
        </List>
    );
}
