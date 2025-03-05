import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  InputAdornment
} from '@mui/material';
import {
  FiDownload,
  FiSettings,
  FiUserCheck,
  FiUserX,
  FiClock,
  FiHome,
  FiSearch,
  FiInfo
} from 'react-icons/fi';

function Absensi() {
  const [activeTab, setActiveTab] = useState(0);

  const attendanceData = [
    {
      id: 1,
      nama: 'Budi Santoso',
      tanggal: '2024-03-04',
      masuk: '08:00',
      keluar: '17:00',
      status: 'Hadir',
      lokasi: 'Kantor Pusat',
      keterangan: '-'
    },
    {
      id: 2,
      nama: 'Dewi Putri',
      tanggal: '2024-03-04',
      masuk: '08:15',
      keluar: '17:00',
      status: 'Terlambat',
      lokasi: 'WFH',
      keterangan: 'Terlambat 15 menit'
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Hadir':
        return 'success';
      case 'Terlambat':
        return 'warning';
      case 'Tidak Hadir':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Header */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5">
            Manajemen Absensi
          </Typography>
          <Box>
            <Button
              variant="contained"
              startIcon={<FiDownload />}
              sx={{ mr: 1 }}
            >
              Unduh Laporan
            </Button>
            <Button
              variant="outlined"
              startIcon={<FiSettings />}
            >
              Pengaturan
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: '#e8f5e9' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#2e7d32', p: 1, borderRadius: 1, color: 'white' }}>
                <FiUserCheck size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Hadir</Typography>
                <Typography variant="h6">142</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: '#ffebee' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#d32f2f', p: 1, borderRadius: 1, color: 'white' }}>
                <FiUserX size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Tidak Hadir</Typography>
                <Typography variant="h6">3</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: '#fff3e0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#ed6c02', p: 1, borderRadius: 1, color: 'white' }}>
                <FiClock size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Terlambat</Typography>
                <Typography variant="h6">5</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: '#e3f2fd' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#1976d2', p: 1, borderRadius: 1, color: 'white' }}>
                <FiHome size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">WFH</Typography>
                <Typography variant="h6">8</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Content */}
      <Paper>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Absensi Harian" />
          <Tab label="Rekap Bulanan" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {/* Filters */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Cari karyawan..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FiSearch />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  type="date"
                  fullWidth
                />
                <Select
                  fullWidth
                  defaultValue=""
                  displayEmpty
                >
                  <MenuItem value="">Semua Lokasi</MenuItem>
                  <MenuItem value="Kantor Pusat">Kantor Pusat</MenuItem>
                  <MenuItem value="WFH">WFH</MenuItem>
                </Select>
                <Select
                  fullWidth
                  defaultValue=""
                  displayEmpty
                >
                  <MenuItem value="">Semua Status</MenuItem>
                  <MenuItem value="Hadir">Hadir</MenuItem>
                  <MenuItem value="Terlambat">Terlambat</MenuItem>
                  <MenuItem value="Tidak Hadir">Tidak Hadir</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          {/* Attendance Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nama</TableCell>
                  <TableCell>Tanggal</TableCell>
                  <TableCell>Jam Masuk</TableCell>
                  <TableCell>Jam Keluar</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Lokasi</TableCell>
                  <TableCell>Keterangan</TableCell>
                  <TableCell>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.nama}</TableCell>
                    <TableCell>{record.tanggal}</TableCell>
                    <TableCell>{record.masuk}</TableCell>
                    <TableCell>{record.keluar}</TableCell>
                    <TableCell>
                      <Chip
                        label={record.status}
                        color={getStatusColor(record.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{record.lokasi}</TableCell>
                    <TableCell>{record.keterangan}</TableCell>
                    <TableCell>
                      <Button
                        startIcon={<FiInfo />}
                        size="small"
                        color="primary"
                      >
                        Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Menampilkan 1-10 dari 150 data
            </Typography>
            <Box>
              <Button variant="outlined" sx={{ mr: 1 }}>
                Sebelumnya
              </Button>
              <Button variant="outlined">
                Selanjutnya
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Absensi;
