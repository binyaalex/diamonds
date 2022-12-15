import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountDetails from './AccountDetails';

import SettingsMenu from "./SettingsMenu";

const Account = () => {

    return (
        <>
            <Typography 
                sx={{  fontWeight: '500',
                    fontSize: '30px',
                    lineHeight: '38px',
                    color: '#101828',
                    paddingBottom: '20px',
                    marginBottom: '32px',
                    borderBottom: '1px solid #EAECF0'
                }}
            >
                Settings
            </Typography>
            <Grid container spacing={2} sx={{margin: '0 0 0 16px'}}>
                <Grid item xs={2.5} sx={{ paddingLeft: '0 !important', paddingTop: '0 !important',}}>
                    <SettingsMenu page='account' />
                </Grid>
                <Grid item xs={9.5} sx={{paddingTop: '0 !important'}}>
                    <AccountDetails />
                </Grid>
            </Grid>
        </>
    );
  };
  
  export default Account;
  