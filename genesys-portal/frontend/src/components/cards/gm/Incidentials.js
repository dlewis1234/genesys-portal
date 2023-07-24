// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
//import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const Incidentials = () => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        Incidentials
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={12} align="center">
          <Typography variant="caption" color="inherit">
            Take little time/small effect. Any amount per round.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" color="textSecondary">
        Actions
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={12} align="center">
          <Typography variant="caption" color="inherit">
            Skill check or ability. One per round.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

export default Incidentials;
