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
  FiClock,
  FiDollarSign,
  FiCheckCircle,
  FiXCircle,
  FiSearch,
  FiEye,
  FiCheck,
  FiX
} from 'react-icons/fi';

function Lembur() {
  const [showForm, setShowForm] = useState(false);

  const overtimeRequests = [
    {
      id: 1,
      nama: 'Budi Santoso',
      tanggal: '2024-03-04',
      mulai: '18:00',
      selesai: '21:00',
      status: 'Menunggu',
      project: 'Project A',
      keterangan: 'Deployment sistem baru'
    },
    {
      id: 2,
      nama: 'Dewi Putri',
      tanggal: '2024-03-04',
      mulai: '18:00',
      selesai: '20:00',
      status: 'Disetujui',
      project: 'Project B',
      keterangan: 'Meeting dengan client'
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
            Manajemen Lembur
          </Typography>
          <Button
            variant="contained"
            startIcon={<FiPlus />}
            onClick={() => setShowForm(true)}
          >
            Ajukan Lembur
          </Button>
        </Box>
      </Paper>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#9c27b0', p: 1, borderRadius: 1, color: 'white' }}>
                <FiClock size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Total Jam Lembur</Typography>
                <Typography variant="h6">24 Jam</Typography>
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
                <Typography variant="h6">5</Typography>
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
                <Typography variant="h6">12</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#1976d2', p: 1, borderRadius: 1, color: 'white' }}>
                <FiDollarSign size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Total Kompensasi</Typography>
                <Typography variant="h6">Rp 2.4M</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Overtime Request Form Dialog */}
      <Dialog open={showForm} onClose={() => setShowForm(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Form Pengajuan Lembur</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Tanggal Lembur"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Jam Mulai"
                  type="time"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Jam Selesai"
                  type="time"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Select defaultValue="" fullWidth>
              <MenuItem value="">Pilih Project</MenuItem>
              <MenuItem value="Project A">Project A</MenuItem>
              <MenuItem value="Project B">Project B</MenuItem>
              <MenuItem value="Project C">Project C</MenuItem>
            </Select>
            <TextField
              label="Keterangan"
              multiline
              rows={3}
              fullWidth
              placeholder="Berikan detail pekerjaan yang akan dilakukan..."
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowForm(false)}>Batal</Button>
          <Button variant="contained">Ajukan</Button>
        </DialogActions>
      </Dialog>

      {/* Overtime Requests Table */}
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Cari pengajuan lembur..."
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
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="">Semua Project</MenuItem>
                <MenuItem value="Project A">Project A</MenuItem>
                <MenuItem value="Project B">Project B</MenuItem>
                <MenuItem value="Project C">Project C</MenuItem>
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
                <TableCell>Tanggal</TableCell>
                <TableCell>Jam Mulai</TableCell>
                <TableCell>Jam Selesai</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Keterangan</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {overtimeRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 1 }}>{request.nama[0]}</Avatar>
                      {request.nama}
                    </Box>
                  </TableCell>
                  <TableCell>{request.tanggal}</TableCell>
                  <TableCell>{request.mulai}</TableCell>
                  <TableCell>{request.selesai}</TableCell>
                  <TableCell>{request.project}</TableCell>
                  <TableCell>
                    <Chip
                      label={request.status}
                      color={getStatusColor(request.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{request.keterangan}</TableCell>
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
            Menampilkan 1-10 dari 20 pengajuan
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

export default Lembur;
