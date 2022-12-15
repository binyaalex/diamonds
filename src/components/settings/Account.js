import Grid from '@mui/material/Grid';

import SettingsMenu from "./SettingsMenu";

const Account = () => {

    return (
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
            <SettingsMenu page='account' />
        </Grid>
        <Grid item xs={9.5}>
            Account
        </Grid>
      </Grid>
    );
  };
  
  export default Account;
  