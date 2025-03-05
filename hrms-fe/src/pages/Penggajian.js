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
  Avatar,
  Divider
} from '@mui/material';
import {
  FiFileText,
  FiDollarSign,
  FiUsers,
  FiClock,
  FiPercent,
  FiDownload,
  FiSend,
  FiSearch,
  FiEye,
  FiPrinter
} from 'react-icons/fi';

function Penggajian() {
  const [showSlipGaji, setShowSlipGaji] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const payrollData = [
    {
      id: 1,
      nama: 'Budi Santoso',
      jabatan: 'Senior Developer',
      gajiPokok: 15000000,
      tunjangan: 2000000,
      lembur: 1000000,
      potongan: 500000,
      total: 17500000,
      status: 'Dibayar',
      tanggal: '2024-02-28'
    },
    {
      id: 2,
      nama: 'Dewi Putri',
      jabatan: 'HR Manager',
      gajiPokok: 12000000,
      tunjangan: 1500000,
      lembur: 0,
      potongan: 300000,
      total: 13200000,
      status: 'Diproses',
      tanggal: '2024-02-28'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Dibayar':
        return 'success';
      case 'Diproses':
        return 'warning';
      case 'Gagal':
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
            Manajemen Penggajian
          </Typography>
          <Box>
            <Button
              variant="contained"
              startIcon={<FiDownload />}
              sx={{ mr: 1 }}
            >
              Export Data
            </Button>
            <Button
              variant="outlined"
              startIcon={<FiFileText />}
            >
              Pengaturan
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#2e7d32', p: 1, borderRadius: 1, color: 'white' }}>
                <FiDollarSign size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Total Penggajian</Typography>
                <Typography variant="h6">Rp 350M</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#1976d2', p: 1, borderRadius: 1, color: 'white' }}>
                <FiUsers size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Total Karyawan</Typography>
                <Typography variant="h6">150</Typography>
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
                <Typography color="text.secondary" variant="body2">Total Lembur</Typography>
                <Typography variant="h6">280 Jam</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ bgcolor: '#9c27b0', p: 1, borderRadius: 1, color: 'white' }}>
                <FiPercent size={24} />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography color="text.secondary" variant="body2">Pajak</Typography>
                <Typography variant="h6">Rp 25M</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Slip Gaji Dialog */}
      <Dialog open={showSlipGaji} onClose={() => setShowSlipGaji(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Slip Gaji</Typography>
            <Box>
              <Button startIcon={<FiPrinter />} sx={{ mr: 1 }}>
                Cetak
              </Button>
              <Button startIcon={<FiSend />} color="primary">
                Kirim Email
              </Button>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedEmployee && (
            <Box sx={{ mt: 2 }}>
              {/* Company Info */}
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography variant="h6">PT. Nama Perusahaan</Typography>
                <Typography variant="body2">Jl. Contoh No. 123, Jakarta</Typography>
                <Typography variant="body2">Telp: (021) 123-4567</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Employee Info */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Nama Karyawan</Typography>
                  <Typography variant="body1">{selectedEmployee.nama}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Jabatan</Typography>
                  <Typography variant="body1">{selectedEmployee.jabatan}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Periode</Typography>
                  <Typography variant="body1">Februari 2024</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">Tanggal</Typography>
                  <Typography variant="body1">{selectedEmployee.tanggal}</Typography>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Salary Details */}
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Keterangan</TableCell>
                      <TableCell align="right">Jumlah</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Gaji Pokok</TableCell>
                      <TableCell align="right">Rp {selectedEmployee.gajiPokok.toLocaleString()}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tunjangan</TableCell>
                      <TableCell align="right">Rp {selectedEmployee.tunjangan.toLocaleString()}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Lembur</TableCell>
                      <TableCell align="right">Rp {selectedEmployee.lembur.toLocaleString()}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: 'error.main' }}>Potongan</TableCell>
                      <TableCell align="right" sx={{ color: 'error.main' }}>
                        - Rp {selectedEmployee.potongan.toLocaleString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                        Rp {selectedEmployee.total.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Payroll Table */}
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                type="month"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="">Semua Divisi</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
              </Select>
              <Select fullWidth defaultValue="" displayEmpty>
                <MenuItem value="">Semua Status</MenuItem>
                <MenuItem value="Dibayar">Dibayar</MenuItem>
                <MenuItem value="Diproses">Diproses</MenuItem>
                <MenuItem value="Gagal">Gagal</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nama</TableCell>
                <TableCell>Jabatan</TableCell>
                <TableCell>Gaji Pokok</TableCell>
                <TableCell>Tunjangan</TableCell>
                <TableCell>Lembur</TableCell>
                <TableCell>Potongan</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Tanggal</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payrollData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar sx={{ mr: 1 }}>{employee.nama[0]}</Avatar>
                      {employee.nama}
                    </Box>
                  </TableCell>
                  <TableCell>{employee.jabatan}</TableCell>
                  <TableCell>Rp {employee.gajiPokok.toLocaleString()}</TableCell>
                  <TableCell>Rp {employee.tunjangan.toLocaleString()}</TableCell>
                  <TableCell>Rp {employee.lembur.toLocaleString()}</TableCell>
                  <TableCell sx={{ color: 'error.main' }}>
                    - Rp {employee.potongan.toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    Rp {employee.total.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={employee.status}
                      color={getStatusColor(employee.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{employee.tanggal}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        size="small"
                        startIcon={<FiEye />}
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setShowSlipGaji(true);
                        }}
                      >
                        Slip Gaji
                      </Button>
                      <Button
                        size="small"
                        startIcon={<FiSend />}
                        color="primary"
                      >
                        Kirim
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
      </Paper>
    </Box>
  );
}

export default Penggajian;
