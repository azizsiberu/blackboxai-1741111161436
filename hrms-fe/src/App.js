import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Drawer, AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  FiHome, 
  FiUsers, 
  FiClock, 
  FiCalendar, 
  FiDollarSign,
  FiAward,
  FiPieChart,
  FiFileText,
  FiBriefcase,
  FiMenu,
  FiBell,
  FiUser
} from 'react-icons/fi';

import Dashboard from './pages/Dashboard';
import Karyawan from './pages/Karyawan';
import Absensi from './pages/Absensi';
import IzinCuti from './pages/IzinCuti';
import Lembur from './pages/Lembur';
import PerjalananDinas from './pages/PerjalananDinas';
import Penggajian from './pages/Penggajian';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    }),
  }),
);

const menuItems = [
  { icon: <FiHome size={20} />, text: 'Dashboard', path: '/' },
  { icon: <FiUsers size={20} />, text: 'Karyawan', path: '/karyawan' },
  { icon: <FiClock size={20} />, text: 'Absensi', path: '/absensi' },
  { icon: <FiCalendar size={20} />, text: 'Izin & Cuti', path: '/izin-cuti' },
  { icon: <FiAward size={20} />, text: 'Lembur', path: '/lembur' },
  { icon: <FiBriefcase size={20} />, text: 'Perjalanan Dinas', path: '/perjalanan-dinas' },
  { icon: <FiDollarSign size={20} />, text: 'Penggajian', path: '/penggajian' },
  { icon: <FiPieChart size={20} />, text: 'Penilaian Kinerja', path: '/kinerja' },
  { icon: <FiFileText size={20} />, text: 'Klaim & Laporan', path: '/klaim-laporan' },
];

function App() {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
            ml: open ? `${drawerWidth}px` : 0,
            backgroundColor: 'white',
            color: 'text.primary',
            boxShadow: 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <FiMenu />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <FiBell />
            </IconButton>
            <IconButton color="inherit">
              <FiUser />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: 'primary.main',
              color: 'white',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              HRMS
            </Typography>
          </Toolbar>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text}
                component="a"
                href={item.path}
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Main open={open}>
          <Toolbar /> {/* Spacer for AppBar */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/karyawan" element={<Karyawan />} />
            <Route path="/absensi" element={<Absensi />} />
            <Route path="/izin-cuti" element={<IzinCuti />} />
            <Route path="/lembur" element={<Lembur />} />
            <Route path="/perjalanan-dinas" element={<PerjalananDinas />} />
            <Route path="/penggajian" element={<Penggajian />} />
          </Routes>
        </Main>
      </Box>
    </Router>
  );
}

export default App;
