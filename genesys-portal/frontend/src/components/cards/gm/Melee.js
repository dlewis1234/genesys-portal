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

const Melee = () => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        Melee Combat Check
      </Typography>
      <Grid container alignItems="center" justifyContent="center" rowSpacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" color="inherit">
            Melee Difficulty
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Stack direction="row" spacing={1}>
            <Typography sx={{ fontFamily: genesys, color: '#642385' }}>{'\uDB88\uDEB7\uDB88\uDEB7'}</Typography>
            <Typography variant="h5" color="inherit">
              +1
            </Typography>
            <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB8'}</Typography>
            <Typography variant="h5" color="inherit">
              per targets melee defense(max 4)
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h4" color="inherit">
            Melee Damage
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <Stack direction="row" spacing={1}>
            <Typography variant="h5" color="inherit">
              Brawn + weapon damage +1 per
            </Typography>
            <Typography sx={{ fontFamily: genesys, color: '#000000' }}>{'\uDB88\uDEB3'}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

export default Melee;
