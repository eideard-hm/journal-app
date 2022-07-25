import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AppRegistration } from '@mui/icons-material';

import AuthLayout from '../layout/AuthLayout';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';

export const RegisterPage = () => {
  useChangePageTitle('Register');
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre completo"
              placeholder="John Doe"
              type="text"
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Correo"
              placeholder="example@example.com"
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
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                <AppRegistration />
                <Typography sx={{ ml: 1 }}>Register</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            ¿Ya tienes una cuenta?.
            <Link to="/auth/login" component={RouterLink}>
              Inicia sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
