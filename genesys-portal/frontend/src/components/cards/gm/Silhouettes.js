// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
//import { RiseOutlined, FallOutlined } from '@ant-design/icons';

const Silhouettes = () => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        Silhouettes
      </Typography>
      <Grid container alignItems="center">
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            0
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="unherit">
            Gnome, cat, dog
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            1
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Human, Dwarf, motorcycle
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            2
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Horse, bear, troll, car
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            3
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Drake, giant, jet fighter
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            4
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Dragon, zepplin, frigate
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            5
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Large warship, transport ship
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            6
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Modern cruiser, star-frigate
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            7
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Oil-tanker, battleship, carrier
          </Typography>
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="caption" color="inherit">
            8+
          </Typography>
        </Grid>
        <Grid item xs={8} align="center">
          <Typography variant="caption" color="inherit">
            Warsun, orbital battle station
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  </MainCard>
);

export default Silhouettes;
