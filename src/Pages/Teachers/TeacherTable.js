import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Button, TextField, Box, Typography, Container, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Teachers.css';

const TeacherTable = () => {

  const [teachers, setTeachers] = useState([
    { firstName: "John", lastName: "Doe", address: "123 Main St", degree: "PhD in Mathematics", phone: "123-456-7890" },
    { firstName: "Jane", lastName: "Smith", address: "456 Elm St", degree: "Masters in Physics", phone: "234-567-8901" },
    { firstName: "Emily", lastName: "Johnson", address: "789 Oak St", degree: "PhD in Chemistry", phone: "345-678-9012" },
    { firstName: "Michael", lastName: "Brown", address: "321 Maple St", degree: "Masters in Biology", phone: "456-789-0123" },
    { firstName: "Sarah", lastName: "Davis", address: "654 Pine St", degree: "PhD in Computer Science", phone: "567-890-1234" },
    // Add more teacher objects here...
  ]);

  const [formVisible, setFormVisible] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    firstName: '',
    lastName: '',
    address: '',
    degree: '',
    phone: ''
  });
  const [editTeacher, setEditTeacher] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleFormVisibility = () => setFormVisible(!formVisible);

  const handleAddNewTeacher = () => {
    if (!newTeacher.firstName || !newTeacher.lastName || !newTeacher.address || !newTeacher.degree || !newTeacher.phone) {
      return;
    }
    setTeachers([newTeacher, ...teachers]);
    setNewTeacher({ firstName: '', lastName: '', address: '', degree: '', phone: '' });
    setFormVisible(false);
  };

  const handleUpdateTeacher = () => {
    if (!editTeacher.firstName || !editTeacher.lastName || !editTeacher.address || !editTeacher.degree || !editTeacher.phone) {
      return;
    }
    setTeachers(teachers.map(teacher =>
      teacher.phone === editTeacher.phone ? editTeacher : teacher
    ));
    setEditTeacher(null);
    setFormVisible(false);
  };

  const handleOpenDeleteDialog = (index) => {
    setDeleteIndex(index);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteIndex(null);
    setOpenDeleteDialog(false);
  };

  const handleConfirmDelete = () => {
    setTeachers(teachers.filter((_, index) => index !== deleteIndex));
    handleCloseDeleteDialog();
  };

  const columns = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "address", label: "Address" },
    { name: "degree", label: "Degree" },
    { name: "phone", label: "Phone Number" },
    {
      name: "edit",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => {
          const teacher = teachers[tableMeta.rowIndex];
          return (
            <div>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<EditIcon />} 
                onClick={() => {
                  setEditTeacher(teacher);
                  handleFormVisibility();
                }}
              >
                Edit
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<DeleteIcon />} 
                onClick={() => handleOpenDeleteDialog(tableMeta.rowIndex)}
                style={{ marginLeft: 8 }}
              >
                Delete
              </Button>
            </div>
          );
        }
      }
    }
  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'scroll',
    selectableRows: 'none' // Disable checkbox selection
  };

  return (
    <>
      <Container style={{padding:"50px 50px"}}>
        <Box marginBottom={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" className='teacher-heading'>Teachers</Typography>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => {
            setEditTeacher(null);
            handleFormVisibility();
          }}>
            New Teacher
          </Button>
        </Box>

        {formVisible && (
          <Box marginBottom={2} padding={2} border={1} borderColor="grey.400" borderRadius={1}>
            <Typography variant="h6" gutterBottom>
              {editTeacher ? "Edit Teacher" : "Add New Teacher"}
            </Typography>
            <TextField
              margin="dense"
              label="First Name"
              type="text"
              fullWidth
              variant="outlined"
              value={editTeacher ? editTeacher.firstName : newTeacher.firstName}
              onChange={(e) => editTeacher 
                ? setEditTeacher({ ...editTeacher, firstName: e.target.value }) 
                : setNewTeacher({ ...newTeacher, firstName: e.target.value })}
              required
              error={(!editTeacher ? !newTeacher.firstName : !editTeacher.firstName)}
              helperText={(!editTeacher ? !newTeacher.firstName ? "Please fill out this field" : "" : !editTeacher.firstName ? "Please fill out this field" : "")}
            />
            <TextField
              margin="dense"
              label="Last Name"
              type="text"
              fullWidth
              variant="outlined"
              value={editTeacher ? editTeacher.lastName : newTeacher.lastName}
              onChange={(e) => editTeacher 
                ? setEditTeacher({ ...editTeacher, lastName: e.target.value }) 
                : setNewTeacher({ ...newTeacher, lastName: e.target.value })}
              required
              error={(!editTeacher ? !newTeacher.lastName : !editTeacher.lastName)}
              helperText={(!editTeacher ? !newTeacher.lastName ? "Please fill out this field" : "" : !editTeacher.lastName ? "Please fill out this field" : "")}
            />
            <TextField
              margin="dense"
              label="Address"
              type="text"
              fullWidth
              variant="outlined"
              value={editTeacher ? editTeacher.address : newTeacher.address}
              onChange={(e) => editTeacher 
                ? setEditTeacher({ ...editTeacher, address: e.target.value }) 
                : setNewTeacher({ ...newTeacher, address: e.target.value })}
              required
              error={(!editTeacher ? !newTeacher.address : !editTeacher.address)}
              helperText={(!editTeacher ? !newTeacher.address ? "Please fill out this field" : "" : !editTeacher.address ? "Please fill out this field" : "")}
            />
            <TextField
              margin="dense"
              label="Degree"
              type="text"
              fullWidth
              variant="outlined"
              value={editTeacher ? editTeacher.degree : newTeacher.degree}
              onChange={(e) => editTeacher 
                ? setEditTeacher({ ...editTeacher, degree: e.target.value }) 
                : setNewTeacher({ ...newTeacher, degree: e.target.value })}
              required
              error={(!editTeacher ? !newTeacher.degree : !editTeacher.degree)}
              helperText={(!editTeacher ? !newTeacher.degree ? "Please fill out this field" : "" : !editTeacher.degree ? "Please fill out this field" : "")}
            />
            <TextField
              margin="dense"
              label="Phone Number"
              type="text"
              fullWidth
              variant="outlined"
              value={editTeacher ? editTeacher.phone : newTeacher.phone}
              onChange={(e) => editTeacher 
                ? setEditTeacher({ ...editTeacher, phone: e.target.value }) 
                : setNewTeacher({ ...newTeacher, phone: e.target.value })}
              required
              error={(!editTeacher ? !newTeacher.phone : !editTeacher.phone)}
              helperText={(!editTeacher ? !newTeacher.phone ? "Please fill out this field" : "" : !editTeacher.phone ? "Please fill out this field" : "")}
            />
            <Box marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={editTeacher ? handleUpdateTeacher : handleAddNewTeacher}
              >
                {editTeacher ? "Update" : "Add"}
              </Button>
              <Button variant="outlined" onClick={handleFormVisibility} style={{ marginLeft: 8 }}>
                Cancel
              </Button>
            </Box>
          </Box>
        )}

        <MUIDataTable
          title={"Teacher List"}
          data={teachers}
          columns={columns}
          options={options}
        />

        <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
          <DialogTitle>Delete Teacher</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this teacher's record?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default TeacherTable;
