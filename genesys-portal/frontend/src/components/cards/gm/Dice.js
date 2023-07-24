// material-ui
import { Grid, Stack, Typography } from '@mui/material';

import Genesys from 'assets/fonts/Genesys_Icons_05.ttf';

// project import
import MainCard from 'components/MainCard';

// assets
//import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const genesys = {
  fontFamily: 'Genesys',
  fontStyle: 'normal',
  fontSize: '1.25 rem',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    local('Genesys'),
    url(${Genesys}) format('truetype')`
};

const Dice = () => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        Dice
      </Typography>
      <Grid container alignItems="center" justifyContent="center" rowSpacing={1}>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#287F38' }}>{'\uDB88\uDEB7'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#642385' }}>{'\uDB88\uDEB7'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Ability
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Difficulty
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#ABDEF7' }}>{'\uDB88\uDEB8'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB8'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Boost
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Setback
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#FBD72F' }}>{'\uDB88\uDEBB'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#7A1722' }}>{'\uDB88\uDEBB'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Proficiency
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Challenge
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

export default Dice;
