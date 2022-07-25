import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';

export const NothingSelectedView = () => {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      spacing={0}
      sx={{
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'secondary.main',
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ fontSize: 100, color: '#fff' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color={'#fff'} variant="h5">
          Select or create a note
        </Typography>
      </Grid>
    </Grid>
  );
};
