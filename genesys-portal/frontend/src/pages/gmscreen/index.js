import { Grid, Stack } from '@mui/material';
import Dice from 'components/cards/gm/Dice';
import Symbols from 'components/cards/gm/Symbols';
import Silhouettes from 'components/cards/gm/Silhouettes';
import Initiative from 'components/cards/gm/Initiative';
import Incidentials from 'components/cards/gm/Incidentials';
import Melee from 'components/cards/gm/Melee';

const GMScreen = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} alignItems="stretch">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Dice />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Symbols />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Silhouettes />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Initiative />
          <Incidentials />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Melee />
      </Grid>
    </Grid>
  );
};
export default GMScreen;
