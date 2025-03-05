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
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiSearch,
  FiEye,
  FiCheck,
  FiX
} from 'react-icons/fi';

function IzinCuti() {
  const [showForm, setShowForm] = useState(false);

  const leaveRequests = [
    {
      id: 1,
      nama: 'Budi Santoso',
      tipe: 'Cuti Tahunan',
      mulai: '2024-03-10',
      selesai: '2024-03-12',
      status: 'Menunggu',
      keterangan: 'Keperluan keluarga',
      sisaCuti: 10
    },
    {
      id: 2,
      nama: 'Dewi Putri',
      tipe: 'Sakit',
      mulai: '2024-03-05',
      selesai: '2024-03-06',
      status: 'Disetujui',
      keterangan: 'Demam',
      sisaCuti: 8
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
            Manajemen Izin & Cuti
          </Typography>
          <Button
            variant="contained"
            startIcon={<FiPlus />}
            onClick={() => setShowForm(true)}
          >
            Ajukan Izin/Cuti
          </Button>
        </Box>
      </Paper>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#1976d2', p: 1, borderRadius: 1, color: 'white' }}>
                <FiCalendar size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Sisa Cuti Tahunan</Typography>
                <Typography variant="h6">12 Hari</Typography>
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
                <Typography variant="h6">8</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#d32f2f', p: 1, borderRadius: 1, color: 'white' }}>
                <FiXCircle size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Ditolak</Typography>
                <Typography variant="h6">1</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Leave Request Form Dialog */}
      <Dialog open={showForm} onClose={() => setShowForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Form Pengajuan Izin/Cuti</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Select defaultValue="" fullWidth>
              <MenuItem value="">Pilih Jenis</MenuItem>
              <MenuItem value="Cuti Tahunan">Cuti Tahunan</MenuItem>
              <MenuItem value="Sakit">Sakit</MenuItem>
              <MenuItem value="Izin Khusus">Izin Khusus</MenuItem>
            </Select>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Tanggal Mulai"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Tanggal Selesai"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <TextField
              label="Keterangan"
              multiline
              rows={3}
              fullWidth
              placeholder="Berikan keterangan detail..."
            />
            <TextField
              type="file"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowForm(false)}>Batal</Button>
          <Button variant="contained">Ajukan</Button>
        </DialogActions>
      </Dialog>

      {/* Leave Requests Table */}
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Cari pengajuan..."
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
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="">Semua Tipe</MenuItem>
                <MenuItem value="Cuti Tahunan">Cuti Tahunan</MenuItem>
                <MenuItem value="Sakit">Sakit</MenuItem>
                <MenuItem value="Izin Khusus">Izin Khusus</MenuItem>
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
                <TableCell>Tipe</TableCell>
                <TableCell>Tanggal Mulai</TableCell>
                <TableCell>Tanggal Selesai</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Keterangan</TableCell>
                <TableCell>Sisa Cuti</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 1 }}>{request.nama[0]}</Avatar>
                      {request.nama}
                    </Box>
                  </TableCell>
                  <TableCell>{request.tipe}</TableCell>
                  <TableCell>{request.mulai}</TableCell>
                  <TableCell>{request.selesai}</TableCell>
                  <TableCell>
                    <Chip
                      label={request.status}
                      color={getStatusColor(request.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{request.keterangan}</TableCell>
                  <TableCell>{request.sisaCuti} hari</TableCell>
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
            Menampilkan 1-10 dari 24 pengajuan
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

export default IzinCuti;
