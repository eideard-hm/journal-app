import { IconButton } from '@mui/material';

import { AddOutlined } from '@mui/icons-material';

export const FloatButton = () => {
  return (
    <IconButton
      size="large"
      sx={{
        backgroundColor: 'error.main',
        color: '#fff',
        ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
        position: 'fixed',
        right: 50,
        bottom: 50,
      }}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>
  );
};
