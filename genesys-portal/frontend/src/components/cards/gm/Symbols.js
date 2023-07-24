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

const Symbols = () => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        Symbols
      </Typography>
      <Grid container alignItems="center" rowSpacing={1}>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB3'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB0'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Success
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Failure
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB4'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB1'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Advantage
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Threat
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB5'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB2'}</Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Triumph
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Typography variant="h4" color="inherit">
            Despair
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

export default Symbols;
