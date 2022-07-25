import { Grid, Typography } from '@mui/material';

const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      spacing={0}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          width: { md: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/* children */}
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
