import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google, Login } from '@mui/icons-material';

import AuthLayout from '../layout/AuthLayout';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';

export const LoginPage = () => {
  useChangePageTitle('Login');
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Correo"
              placeholder="correo@correo.com"
              type="email"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Contraseña"
              placeholder="Contraseña"
              type="password"
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                <Login />
                <Typography sx={{ ml: 1 }}>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link to="/auth/register" component={RouterLink}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
