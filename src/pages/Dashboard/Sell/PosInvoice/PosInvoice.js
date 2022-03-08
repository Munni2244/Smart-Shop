import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./PosInvoice.module.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import Delete from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const PosInvoice = () => {
  const [open, setOpen] = React.useState(false);
  const [toggle, setToggle] = useState(false);
  const [tableRow, setTableRow] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const buttonToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>ADD POS INVOICE</span> <br />{" "}
          <span style={{ color: "#969494" }}>Add new pos invoice</span>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink to="/dashboard/manage-invoice" style={{ textDecoration: "none" }}>
          <Button className={`${styles.paymentBtn}`} startIcon={<MenuIcon />}>
            Manage Invoice
          </Button>
        </NavLink>

        <NavLink to="/dashboard/add-new-invoice" style={{ textDecoration: "none" }}>
          <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
            Add New Invoice
          </Button>
        </NavLink>
      </Box>

      <Box className={`${styles.paymentContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>
          New POS Invoice
        </Typography>
        <hr />

        <form className={`${"shadow"}`}>
          <Box className={`${styles.tableContainer}`}>
            <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
              <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                Barcode<span>*</span>
              </Typography>

              <TextField
                size="small"
                id="outlined-basic"
                sx={{ width: "45%", backgroundColor: "white" }}
                placeholder="Barcode or QR code scan here"
                label="Barcode/QR Code"
                variant="outlined"
                {...register("barcode", { required: true })}
              />
            </Box>

            <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
              <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                Supplier Contact no.<span>*</span>
              </Typography>

              <TextField
                id="outlined-basic"
                size="small"
                sx={{ width: "45%", backgroundColor: "white" }}
                label="Contact no."
                variant="outlined"
                {...register("contactNo", { required: true })}
              />
              <Button
                sx={{ borderRadius: 0, marginTop: "2px" }}
                onClick={() => {
                  setOpen(!open);
                  buttonToggle();
                }}
                className={`${styles.paymentBtn}`}
              >
                {toggle ? "Old Supplier" : "New Supplier"}
              </Button>
            </Box>

            <Collapse in={open} timeout="auto">
              <Box sx={{ width: "45%", display: "flex", flexContent: "between" }}>
                <Box className={`${styles.addSupplierField} ${"pb-4, me-2"}`}>
                  <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                    Supplier Name <span>*</span>
                  </Typography>

                  <TextField
                    size="small"
                    id="outlined-basic"
                    sx={{ backgroundColor: "white" }}
                    label="Supplier Name"
                    variant="outlined"
                    {...register("supplierName", { required: true })}
                  />
                </Box>
                <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                  <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                    Supplier Email
                  </Typography>

                  <TextField
                    size="small"
                    id="outlined-basic"
                    sx={{ backgroundColor: "white" }}
                    label="Supplier Email"
                    variant="outlined"
                    {...register("supplierEmail")}
                  />
                </Box>
              </Box>

              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                  Address
                </Typography>

                <TextField
                  size="small"
                  id="outlined-basic"
                  sx={{ width: "45%", backgroundColor: "white" }}
                  label="Supplier Address"
                  variant="outlined"
                  {...register("supplierAddress")}
                />
              </Box>
            </Collapse>

            <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
              <Typography sx={{ textAlign: "start", fontWeight: "bold", fontSize: "14px" }}>
                Date<span>*</span>
              </Typography>

              <input
                type="date"
                {...register("date", { required: true })}
                style={{
                  width: "45%",
                  padding: "8px",
                  backgroundColor: "white",
                  border: "1px solid #aeaeae",
                  borderRadius: "3px",
                }}
              />
            </Box>
            <TableContainer
              component={Paper}
              sx={{ border: 1, borderColor: "grey.300" }}
            >
              <Table aria-label="simple table">
                <TableHead className={`${styles.tableHeader}`}>
                  <TableRow>
                    <TableCell
                      className={`${styles.tableCell}`}
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)", textAlign: "center" }}
                    >
                      Item Information<span>*</span>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                      className={`${styles.tableCell}`}
                    >
                      Available Ctn.
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                      className={`${styles.tableCell}`}
                    >
                      Carton
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                      className={`${styles.tableCell}`}
                    >
                      Item
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                      className={`${styles.tableCell}`}
                    >
                      Quantity
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                      className={`${styles.tableCell}`}
                    >
                      Rate<span>*</span>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                      className={`${styles.tableCell}`}
                    >
                      Discount/Pcs.
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                      className={`${styles.tableCell}`}
                    >
                      Total
                    </TableCell>

                    <TableCell align="center" className={`${styles.tableCell}`}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...Array(tableRow)].map((elementInArray, index) => {
                    return (
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Product Name"
                            {...register("product", { required: true })}
                            style={{
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Available Ctn."
                            {...register("ctn", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="number"
                            placeholder="0"
                            {...register("carton", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="0"
                            {...register("quantity", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="0"
                            {...register("item", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Rating"
                            {...register("rate", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="0.00"
                            {...register("discount", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>

                        <TableCell
                          align="center"
                          sx={{
                            borderRight: "1px solid rgba(224, 224, 224, 1)",
                            p: 1,
                          }}
                        >
                          <input
                            type="text"
                            placeholder="0"
                            {...register("total", { required: true })}
                            style={{
                              width: "70px",
                              padding: "8px",
                              backgroundColor: "#f1f3f6",
                              border: "1px solid #aeaeae",
                            }}
                          />
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            if (tableRow <= 1) {
                              Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'There are only one row, you can not delete it!'
                              })
                            } else {
                              setTableRow(tableRow - 1);
                            }
                          }}
                          align="center"
                        >
                          {" "}
                          <Delete
                            color="error"
                            className={`${styles.deleteIcon}`}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        textAlign: "right",
                        fontWeight: "bold",
                      }}
                    >
                      Total Discount:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        p: 1,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="0.00"
                        {...register("totalDiscount", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                    >
                      Grand Total:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        p: 1,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="0"
                        {...register("grandTotal", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                        }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      <Button
                        variant="contained"
                        sx={{ borderRadius: "0" }}
                        onClick={() => setTableRow(tableRow + 1)}
                        className={`${styles.receiptBtn}`}
                        color="success"
                      >
                        Add New Item
                      </Button>
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        fontWeight: "bold",
                        p: 1,
                      }}
                    >
                      Paid Amount:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      <input
                        type="text"
                        placeholder="0.00"
                        {...register("paid", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                        }}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        p: 1,
                      }}
                    >
                      <Button
                        sx={{ borderRadius: "0", mb: 1 }}
                        className={`${styles.paymentBtn}`}
                        variant="contained"
                        color="success"
                      >
                        Submit
                      </Button>
                      <Button
                        sx={{ borderRadius: "0" }}
                        variant="contained"
                        color="success"
                      >
                        Print Invoice
                      </Button>
                    </TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                        fontWeight: "bold",
                        textAlign: "right",
                        p: 1,
                      }}
                    >
                      Due:
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                    >
                      <input
                        type="text"
                        placeholder="0"
                        {...register("grandTotal", { required: true })}
                        style={{
                          width: "70px",
                          padding: "8px",
                          backgroundColor: "#f1f3f6",
                          border: "1px solid #aeaeae",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default PosInvoice;
