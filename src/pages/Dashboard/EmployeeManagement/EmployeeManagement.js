import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";
<<<<<<< HEAD
import { Button, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
=======
import { Container, TextField } from "@mui/material";
import styles from "./EmployeeManagement.module.css";
>>>>>>> 67fdee1b3d66d1784793d9103e565c492d418cc3
import employees from "../../../assets/data/employees.json";
import styles from "./EmployeeManagement.module.css";

function Row(props) {
  const { employee } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableHover}`}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {employee._id}
        </TableCell>
        <TableCell align="center">{employee.name}</TableCell>
        <TableCell align="center">{employee.position}</TableCell>
        <TableCell align="center">{employee.phone}</TableCell>
        <TableCell align="center">{employee.email}</TableCell>
        <TableCell align="center">
          <img
            style={{ width: "70px", height: "70px" }}
            src={employee.img}
            alt="Product"
            // loading="lazy"
          />
        </TableCell>
        <TableCell align="center">
          <EditIcon className={`${styles.editIcon}`} />
          <Delete className={`${styles.deleteIcon}`} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Employee Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Position</TableCell>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={employee._id}>
                    <TableCell component="th" scope="row">
                      {employee.name}
                    </TableCell>
                    <TableCell align="center">{employee.phone}</TableCell>
                    <TableCell align="center">{employee.position}</TableCell>
                    <TableCell align="center">{employee.address}</TableCell>
                    <TableCell align="center">BDT {employee.salary}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    employeeId: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
  }).isRequired,
};

const EmployeeManagement = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
<<<<<<< HEAD
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>HRM</span> <br />{" "}
          <span style={{ color: "#969494" }}>Manage Employee</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <Button className={`${styles.designationBtn}`}>Designation</Button>
        <Button className={`${styles.addEmployeeBtn}`}>Add Employee</Button>
      </Box>
      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold" }}>Manage Employee</Typography>
        <hr />
        <TableContainer
          component={Paper}
          sx={{ border: 1, borderColor: "grey.300" }}
        >
          <Table aria-label="simple table">
            <TableHead className={`${styles.tableHeader}`}>
              <TableRow>
                <TableCell />
                <TableCell className={`${styles.tableCell}`}>SL.</TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Name
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Designation
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Phone
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Email
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Picture
                </TableCell>
                <TableCell align="center" className={`${styles.tableCell}`}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((employee) => (
                  <Row key={employee._id} employee={employee} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography className="mt-3">
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Typography>
      </Box>
=======
    <Container sx={{ width: "100%" }}>
   
      {/* <Paper>
        <Box>
         <Typography variant="h5" sx={{}}>
            Category Name 
         </Typography>
         <TextField id="outlined-basic" label="Outlined" variant="outlined" />


        </Box>
      </Paper> */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>SL.</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee) => (
                <Row key={employee._id} employee={employee} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography className="mt-3">
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Typography>
>>>>>>> 67fdee1b3d66d1784793d9103e565c492d418cc3
    </Container>
  );
};

export default EmployeeManagement;
