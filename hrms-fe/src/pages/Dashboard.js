import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Divider
} from '@mui/material';
import { 
  FiUsers, 
  FiClock, 
  FiCalendar, 
  FiDollarSign,
  FiPlusCircle,
  FiFileText,
  FiBarChart2
} from 'react-icons/fi';

function Dashboard() {
  const stats = [
    { title: 'Total Karyawan', value: '150', icon: <FiUsers size={24} />, color: '#1976d2' },
    { title: 'Hadir Hari Ini', value: '142', icon: <FiClock size={24} />, color: '#2e7d32' },
    { title: 'Izin/Cuti', value: '8', icon: <FiCalendar size={24} />, color: '#ed6c02' },
    { title: 'Lembur Bulan Ini', value: '24', icon: <FiDollarSign size={24} />, color: '#9c27b0' },
  ];

  const recentActivities = [
    { user: 'Budi Santoso', action: 'melakukan absensi masuk', time: '08:00' },
    { user: 'Dewi Putri', action: 'mengajukan cuti', time: '09:15' },
    { user: 'Ahmad Rahman', action: 'menyelesaikan lembur', time: '18:30' },
    { user: 'Siti Aminah', action: 'mengajukan perjalanan dinas', time: '11:45' },
  ];

  return (
    <Box>
      {/* Greeting */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Selamat Datang, Admin
        </Typography>
        <Typography color="text.secondary">
          Berikut adalah ringkasan aktivitas hari ini
        </Typography>
      </Paper>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    backgroundColor: stat.color,
                    borderRadius: 1,
                    p: 1,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography color="text.secondary" variant="body2">
                    {stat.title}
                  </Typography>
                  <Typography variant="h6">
                    {stat.value}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activities */}
      <Paper sx={{ mb: 3 }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">Aktivitas Terkini</Typography>
        </Box>
        <Divider />
        <List>
          {recentActivities.map((activity, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{activity.user[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <strong>{activity.user}</strong> {activity.action}
                    </Typography>
                  }
                  secondary={activity.time}
                />
              </ListItem>
              {index < recentActivities.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Quick Actions */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Aksi Cepat
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              startIcon={<FiPlusCircle />}
              fullWidth
            >
              Tambah Karyawan
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              startIcon={<FiClock />}
              fullWidth
            >
              Rekap Absensi
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              startIcon={<FiFileText />}
              fullWidth
            >
              Buat Slip Gaji
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              startIcon={<FiBarChart2 />}
              fullWidth
            >
              Laporan
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Dashboard;
