import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import UsersData from "./users-data/UsersData";

const theme = createTheme();
const SecondAssignment = () => {
  let initialData = [];
  // check previous data are in local storage. if yes set as initial user data
  if (localStorage.getItem("users")) {
    const localStoreageUserData = localStorage.getItem("users");
    initialData = JSON.parse(localStoreageUserData); // parse local storage user data and set as initial data
  }

  const [userList, setUserList] = React.useState(initialData); // local state to pass the users data to the UsersData component

  // formik configuration for input validation and form submit handler
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 15 characters or less")
        .required("Last name is required"),
    }),
    onSubmit: (values) => {
      // merge pervious array of object and current object in new array as usersData
      let usersData = [...userList, values];
      setUserList(usersData); // setting updated data to the userList state
      localStorage.setItem("users", JSON.stringify(usersData)); // set data to the local storage
      formik.resetForm(); // reset form once submit functionality done
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <CssBaseline />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <Box
                component="div"
                sx={{
                  p: 2,
                  my: 4,
                  border: "1px solid #8080804f",
                  borderRadius: "5px",
                  boxShadow:
                    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ paddingBottom: "10px", fontSize: "1.4rem" }}
                >
                  User Form
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        fullWidth
                        name="firstName"
                        id="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        fullWidth
                        name="lastName"
                        id="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        sx={{ width: "40%" }}
                        size="large"
                        color="primary"
                        variant="contained"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component="div"
                sx={{
                  m: 4,
                }}
              >
                <UsersData rows={userList} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SecondAssignment;
