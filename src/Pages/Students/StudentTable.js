import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Button, TextField, Box, Typography, Container, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './StudentTable.css'


const StudentTable = () => {
  const [students, setStudents] = useState([
    { name: "Samanta William", id: "123456789", parentName: "Mana William", city: "Jakarta", class: "VII A" },
    { name: "Tony Soap", id: "123456790", parentName: "James Soap", city: "Jakarta", class: "VII B" },
    { name: "Jordan Nico", id: "123456791", parentName: "Amanda Nico", city: "Jakarta", class: "VII A" },
    { name: "Karen Hope", id: "123456792", parentName: "Justin Hope", city: "Jakarta", class: "VII C" },
    { name: "Nadila Adja", id: "123456793", parentName: "Jack Adja", city: "Jakarta", class: "VII A" },
    // Add more student objects here...
  ]);

  const [formVisible, setFormVisible] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '',
    id: '',
    parentName: '',
    city: '',
    class: ''
  });
  const [editStudent, setEditStudent] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleFormVisibility = () => setFormVisible(!formVisible);

  const handleAddNewStudent = () => {
    if (!newStudent.name || !newStudent.id || !newStudent.parentName || !newStudent.city || !newStudent.class) {
      return;
    }
    setStudents([newStudent, ...students]);
    setNewStudent({ name: '', id: '', parentName: '', city: '', class: '' });
    setFormVisible(false);
  };

  const handleUpdateStudent = () => {
    if (!editStudent.name || !editStudent.id || !editStudent.parentName || !editStudent.city || !editStudent.class) {
      return;
    }
    setStudents(students.map(student =>
      student.id === editStudent.id ? editStudent : student
    ));
    setEditStudent(null);
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
    setStudents(students.filter((_, index) => index !== deleteIndex));
    handleCloseDeleteDialog();
  };

  const columns = [
    { name: "name", label: "Name" },
    { name: "id", label: "ID" },
    { name: "parentName", label: "Parent Name" },
    { name: "city", label: "City" },
    { name: "class", label: "Grade" },
    {
      name: "edit",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => {
          const student = students[tableMeta.rowIndex];
          return (
            <div>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<EditIcon />} 
                onClick={() => {
                  setEditStudent(student);
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
        <Typography variant="h6" className='student-heading'>Students</Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => {
          setEditStudent(null);
          handleFormVisibility();
        }}>

          New Student
        </Button>
      </Box>

      {formVisible && (
        <Box marginBottom={2} padding={2} border={1} borderColor="grey.400" borderRadius={1}>
          <Typography variant="h6" gutterBottom>
            {editStudent ? "Edit Student" : "Add New Student"}
          </Typography>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={editStudent ? editStudent.name : newStudent.name}
            onChange={(e) => editStudent 
              ? setEditStudent({ ...editStudent, name: e.target.value }) 
              : setNewStudent({ ...newStudent, name: e.target.value })}
            required
            error={(!editStudent ? !newStudent.name : !editStudent.name)}
            helperText={(!editStudent ? !newStudent.name ? "Please fill out this field" : "" : !editStudent.name ? "Please fill out this field" : "")}
          />
          <TextField
            margin="dense"
            label="ID"
            type="text"
            fullWidth
            variant="outlined"
            value={editStudent ? editStudent.id : newStudent.id}
            onChange={(e) => editStudent 
              ? setEditStudent({ ...editStudent, id: e.target.value }) 
              : setNewStudent({ ...newStudent, id: e.target.value })}
            required
            error={(!editStudent ? !newStudent.id : !editStudent.id)}
            helperText={(!editStudent ? !newStudent.id ? "Please fill out this field" : "" : !editStudent.id ? "Please fill out this field" : "")}
          />
          <TextField
            margin="dense"
            label="Parent Name"
            type="text"
            fullWidth
            variant="outlined"
            value={editStudent ? editStudent.parentName : newStudent.parentName}
            onChange={(e) => editStudent 
              ? setEditStudent({ ...editStudent, parentName: e.target.value }) 
              : setNewStudent({ ...newStudent, parentName: e.target.value })}
            required
            error={(!editStudent ? !newStudent.parentName : !editStudent.parentName)}
            helperText={(!editStudent ? !newStudent.parentName ? "Please fill out this field" : "" : !editStudent.parentName ? "Please fill out this field" : "")}
          />
          <TextField
            margin="dense"
            label="City"
            type="text"
            fullWidth
            variant="outlined"
            value={editStudent ? editStudent.city : newStudent.city}
            onChange={(e) => editStudent 
              ? setEditStudent({ ...editStudent, city: e.target.value }) 
              : setNewStudent({ ...newStudent, city: e.target.value })}
            required
            error={(!editStudent ? !newStudent.city : !editStudent.city)}
            helperText={(!editStudent ? !newStudent.city ? "Please fill out this field" : "" : !editStudent.city ? "Please fill out this field" : "")}
          />
          <TextField
            margin="dense"
            label="Grade"
            type="text"
            fullWidth
            variant="outlined"
            value={editStudent ? editStudent.class : newStudent.class}
            onChange={(e) => editStudent 
              ? setEditStudent({ ...editStudent, class: e.target.value }) 
              : setNewStudent({ ...newStudent, class: e.target.value })}
            required
            error={(!editStudent ? !newStudent.class : !editStudent.class)}
            helperText={(!editStudent ? !newStudent.class ? "Please fill out this field" : "" : !editStudent.class ? "Please fill out this field" : "")}
          />
          <Box marginTop={2} display="flex" justifyContent="flex-end">
            <Button 
              onClick={() => editStudent ? handleUpdateStudent() : handleAddNewStudent()} 
              color="primary" 
              variant="contained"
              style={{ marginRight: 8 }}
            >
              {editStudent ? "Update" : "Add"}
            </Button>
            <Button onClick={handleFormVisibility} color="secondary" variant="outlined">
              Cancel
            </Button>
          </Box>
        </Box>
      )}

      {/* Confirm Delete Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
      >
        <DialogTitle>{"Are you sure you want to delete this student?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once deleted, this action cannot be undone.
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

      <MUIDataTable
        title={""}
        data={students.map(student => [student.name, student.id, student.parentName, student.city, student.class])}
        columns={columns}
        options={options}
      />
    </Container>
    </>
  );
};

export default StudentTable;
