// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
//import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const Initiative = () => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        Initiative
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            Vigilance Check
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="unherit">
            Target is unaware of attack
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            Cool Check
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Target is aware of attack
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

export default Initiative;
