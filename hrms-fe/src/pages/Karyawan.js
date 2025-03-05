import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  IconButton,
  Chip,
  InputAdornment,
  Grid
} from '@mui/material';
import {
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiSitemap
} from 'react-icons/fi';

function Karyawan() {
  const [activeTab, setActiveTab] = useState(0);
  
  const employees = [
    {
      id: 'EMP001',
      nama: 'Budi Santoso',
      jabatan: 'Senior Developer',
      divisi: 'IT',
      status: 'Tetap',
      tanggalMasuk: '2022-01-15',
    },
    {
      id: 'EMP002',
      nama: 'Dewi Putri',
      jabatan: 'HR Manager',
      divisi: 'HR',
      status: 'Tetap',
      tanggalMasuk: '2021-08-01',
    },
    // Add more dummy data as needed
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      {/* Header */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5">
            Manajemen Karyawan
          </Typography>
          <Button
            variant="contained"
            startIcon={<FiPlus />}
          >
            Tambah Karyawan
          </Button>
        </Box>
      </Paper>

      {/* Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Daftar Karyawan" />
          <Tab label="Struktur Organisasi" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {activeTab === 0 ? (
            <Box>
              {/* Search and Filter */}
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
                <Grid item xs={12} md={3}>
                  <Select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="">Semua Divisi</MenuItem>
                    <MenuItem value="IT">IT</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="">Semua Status</MenuItem>
                    <MenuItem value="Tetap">Tetap</MenuItem>
                    <MenuItem value="Kontrak">Kontrak</MenuItem>
                    <MenuItem value="Probation">Probation</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              {/* Employee Table */}
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Nama</TableCell>
                      <TableCell>Jabatan</TableCell>
                      <TableCell>Divisi</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Tanggal Masuk</TableCell>
                      <TableCell>Aksi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.nama}</TableCell>
                        <TableCell>{employee.jabatan}</TableCell>
                        <TableCell>{employee.divisi}</TableCell>
                        <TableCell>
                          <Chip
                            label={employee.status}
                            color="success"
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{employee.tanggalMasuk}</TableCell>
                        <TableCell>
                          <IconButton color="primary" size="small">
                            <FiEdit2 />
                          </IconButton>
                          <IconButton color="error" size="small">
                            <FiTrash2 />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Pagination */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Menampilkan 1-10 dari 50 karyawan
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
          ) : (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <FiSitemap size={48} style={{ color: '#ccc', marginBottom: 16 }} />
              <Typography color="text.secondary">
                Struktur organisasi akan ditampilkan di sini
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default Karyawan;
