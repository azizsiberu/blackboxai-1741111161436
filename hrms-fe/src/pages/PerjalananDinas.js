import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  InputAdornment,
  Avatar
} from '@mui/material';
import {
  FiPlus,
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiCheckCircle,
  FiSearch,
  FiEye,
  FiCheck,
  FiX,
  FiPaperclip
} from 'react-icons/fi';

function PerjalananDinas() {
  const [showForm, setShowForm] = useState(false);

  const businessTrips = [
    {
      id: 1,
      nama: 'Budi Santoso',
      tujuan: 'Jakarta',
      tanggalBerangkat: '2024-03-10',
      tanggalKembali: '2024-03-12',
      status: 'Menunggu',
      keperluan: 'Meeting Client',
      estimasiBiaya: 5000000
    },
    {
      id: 2,
      nama: 'Dewi Putri',
      tujuan: 'Surabaya',
      tanggalBerangkat: '2024-03-15',
      tanggalKembali: '2024-03-16',
      status: 'Disetujui',
      keperluan: 'Training',
      estimasiBiaya: 3000000
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Disetujui':
        return 'success';
      case 'Menunggu':
        return 'warning';
      case 'Ditolak':
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
            Perjalanan Dinas
          </Typography>
          <Button
            variant="contained"
            startIcon={<FiPlus />}
            onClick={() => setShowForm(true)}
          >
            Ajukan Perjalanan Dinas
          </Button>
        </Box>
      </Paper>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#1976d2', p: 1, borderRadius: 1, color: 'white' }}>
                <FiMapPin size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Total Perjalanan</Typography>
                <Typography variant="h6">24</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#ed6c02', p: 1, borderRadius: 1, color: 'white' }}>
                <FiClock size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Menunggu Persetujuan</Typography>
                <Typography variant="h6">3</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#2e7d32', p: 1, borderRadius: 1, color: 'white' }}>
                <FiCheckCircle size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Disetujui</Typography>
                <Typography variant="h6">18</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#9c27b0', p: 1, borderRadius: 1, color: 'white' }}>
                <FiDollarSign size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Total Biaya</Typography>
                <Typography variant="h6">Rp 45M</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Business Trip Form Dialog */}
      <Dialog open={showForm} onClose={() => setShowForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Form Perjalanan Dinas</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Tujuan"
              fullWidth
              placeholder="Masukkan kota tujuan"
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Tanggal Berangkat"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Tanggal Kembali"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <TextField
              label="Keperluan"
              multiline
              rows={3}
              fullWidth
              placeholder="Jelaskan tujuan perjalanan dinas..."
            />
            <TextField
              label="Estimasi Biaya"
              type="number"
              fullWidth
              placeholder="Masukkan estimasi biaya"
              InputProps={{
                startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
              }}
            />
            <TextField
              type="file"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiPaperclip />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowForm(false)}>Batal</Button>
          <Button variant="contained">Ajukan</Button>
        </DialogActions>
      </Dialog>

      {/* Business Trips Table */}
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Cari perjalanan dinas..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FiSearch />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                type="month"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="">Semua Tujuan</MenuItem>
                <MenuItem value="Jakarta">Jakarta</MenuItem>
                <MenuItem value="Surabaya">Surabaya</MenuItem>
                <MenuItem value="Bandung">Bandung</MenuItem>
              </Select>
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="">Semua Status</MenuItem>
                <MenuItem value="Menunggu">Menunggu</MenuItem>
                <MenuItem value="Disetujui">Disetujui</MenuItem>
                <MenuItem value="Ditolak">Ditolak</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nama</TableCell>
                <TableCell>Tujuan</TableCell>
                <TableCell>Tanggal Berangkat</TableCell>
                <TableCell>Tanggal Kembali</TableCell>
                <TableCell>Keperluan</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Estimasi Biaya</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {businessTrips.map((trip) => (
                <TableRow key={trip.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 1 }}>{trip.nama[0]}</Avatar>
                      {trip.nama}
                    </Box>
                  </TableCell>
                  <TableCell>{trip.tujuan}</TableCell>
                  <TableCell>{trip.tanggalBerangkat}</TableCell>
                  <TableCell>{trip.tanggalKembali}</TableCell>
                  <TableCell>{trip.keperluan}</TableCell>
                  <TableCell>
                    <Chip
                      label={trip.status}
                      color={getStatusColor(trip.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>Rp {trip.estimasiBiaya.toLocaleString()}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        size="small"
                        startIcon={<FiEye />}
                        color="primary"
                      >
                        Detail
                      </Button>
                      <Button
                        size="small"
                        startIcon={<FiCheck />}
                        color="success"
                      >
                        Setuju
                      </Button>
                      <Button
                        size="small"
                        startIcon={<FiX />}
                        color="error"
                      >
                        Tolak
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Menampilkan 1-10 dari 24 perjalanan
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
      </Paper>
    </Box>
  );
}

export default PerjalananDinas;
