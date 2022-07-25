import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';

import { Navbar, SideBar } from '../components';

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <SideBar />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {/* Toolbar */}
        <Toolbar />

        {/* Content */}
        {children}
      </Box>
    </Box>
  );
};

export default JournalLayout;
