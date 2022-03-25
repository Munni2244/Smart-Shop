import React from "react";
import { useForm } from "react-hook-form";
import styles from "./AddSupplier.module.css";
import TextField from "@mui/material/TextField";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { saveSupplierToDB } from "../../../store/supplier";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

const AddSupplier = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //Send form data to Server
    dispatch(saveSupplierToDB(data));

    Swal.fire({
      position: "top",
      icon: "success",
      title: "New Supplier Added",
      showConfirmButton: true,
    });
    reset();
  };

  const [company, setCompany] = React.useState('');

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <Container sx={{ width: "100%", mb: 5 }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px", marginLeft: "-34px" }}>Supplier</span> <br />{" "}
          <span style={{ color: "#969494" }}>Add New Supplier</span>
        </Typography>
      </Box>

      <Box sx={{ textAlign: "right", my: 2 }}>
        <NavLink to="/dashboard/manage-supplier" style={{ textDecoration: "none" }}>
          <Button className={`${styles.receiptBtn}`} startIcon={<MenuIcon />}>
            Manage Supplier
          </Button>
        </NavLink>
      </Box>

      <Box className={`${styles.paymentContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "start" }}>
          Add Supplier
        </Typography>
        <hr />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.paymentForm} ${"shadow"}`}
        >
          <Grid
            container
            spacing={4}
            columns={16}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            <Grid item md={8} sm={16} sx={16}>
              <Box className={`${styles.addSupplierField} ${"pb-4"}`} >
                <Typography className={`${styles.addSupplierFieldLabel} ${'mb-2'}`}>
                  Supplier Name <span>*</span>
                </Typography>

                <TextField
                  id="outlined-basic"
                  size="small"
                  className={`${styles.supplierTextField}`}
                  label="Supplier Name"
                  variant="outlined"
                  {...register("name", { required: true })}
                />
              </Box>

              <Box className={`${styles.addSupplierField} ${"pb-4"}`} sx={{ mt: 2 }}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Supplier Contact No. <span>*</span>
                </Typography>
                <TextField
                  id="outlined-basic"
                  size="small"
                  className={`${styles.supplierTextField}`}
                  label="Supplier Contact No."
                  variant="outlined"
                  {...register("contact", { required: true })}
                />
              </Box>
            </Grid>
            <Grid item md={8} sm={16} sx={16}>
              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Company Name<span>*</span>
                </Typography>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="outlined-basic"
                    size="small"
                    className={`${styles.supplierTextField}`}
                    label="Company Name"
                    variant="outlined"
                    {...register("company", { required: true })}
                    value={company}
                    sx={{ padding: "4px" }}
                    onChange={handleCompanyChange}
                  >
                    <MenuItem value="Cheviot International Ltd.">Cheviot International Ltd.</MenuItem>
                    <MenuItem value="Hoang Mo Thien Company Limited">Hoang Mo Thien Company Limited</MenuItem>
                    <MenuItem value="Ozege tekstil konfeksioyon sanayi ve ticaret">Ozege tekstil konfeksioyon sanayi ve ticaret</MenuItem>
                    <MenuItem value="Cannabis Suppliers">Cannabis Suppliers</MenuItem>
                    <MenuItem value="Best International Ltd.">Best International Ltd.</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box className={`${styles.addSupplierField} ${"pb-4"}`}>
                <Typography className={`${styles.addSupplierFieldLabel}`}>
                  Company Address<span>*</span>
                </Typography>

                <TextField
                  id="outlined-textarea"
                  label="Company Address"
                  size="small"
                  multiline
                  className={`${styles.supplierTextField}`}
                  {...register("companyAddress", { required: true })}
                />
              </Box>
            </Grid>
            <Box className="d-block m-auto mt-2">
              <Button type="submit" className={`${styles.addSupplierButton} ${"mb-1"}`}>
                Save Supplier
              </Button>

            </Box>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddSupplier;
