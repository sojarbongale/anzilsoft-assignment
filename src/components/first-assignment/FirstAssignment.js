import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

const theme = createTheme();

const FirstAssignment = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operationText, setOperationText] = useState("Result");
  const [result, setResult] = useState(0);

  const regex = /^[0-9\b]+$/; // regululare expression to accept number only

  // on change handler for first input
  const num1Handler = (e) => {
    e.preventDefault();
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNum1(e.target.value);
    }
  };

  // on change handler for second input
  const num2Handler = (e) => {
    e.preventDefault();
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNum2(e.target.value);
    }
  };

  // Function to handle addition operation
  const additionHandler = (e) => {
    e.preventDefault();
    setOperationText("Addition Result");
    setResult(Number(num1) + Number(num2));
  };

  // Function to handle substraction operation
  const substractHandler = (e) => {
    e.preventDefault();
    setOperationText("Substraction Result");
    setResult(Number(num1) - Number(num2));
  };

  // Function to handle multiplication operation
  const multiplicationHandler = (e) => {
    e.preventDefault();
    setOperationText("Multiplication Result");
    setResult(Number(num1) * Number(num2));
  };

  // Function to handle division operation
  const divisionHandler = (e) => {
    e.preventDefault();
    setOperationText("Division Result");
    if (Number(num1) !== 0 && Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            my: 4,
            border: "1px solid #8080804f",
            borderRadius: "5px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
        >
          <CssBaseline />
          <h2>Arithmatic Operations</h2>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="Number1"
                    id="Number1"
                    label="Number1"
                    autoFocus
                    onChange={num1Handler}
                    value={num1}
                    inputProps={{ maxLength: 5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="Number2"
                    id="Number2"
                    label="Number2"
                    autoFocus
                    onChange={num2Handler}
                    value={num2}
                    inputProps={{ maxLength: 5 }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <h4>
                    {operationText} = {result}
                  </h4>
                </Grid>
              </Grid>
              <Button
                type="button"
                variant="contained"
                sx={{ mt: 3, mb: 2, margin: "10px" }}
                disabled={num1 === "" || num2 === "" ? true : false}
                onClick={additionHandler}
              >
                Add
              </Button>
              <Button
                type="button"
                variant="contained"
                sx={{ mt: 3, mb: 2, margin: "10px" }}
                disabled={num1 === "" || num2 === "" ? true : false}
                onClick={substractHandler}
              >
                Sub
              </Button>
              <Button
                type="button"
                variant="contained"
                sx={{ mt: 3, mb: 2, margin: "10px" }}
                disabled={num1 === "" || num2 === "" ? true : false}
                onClick={multiplicationHandler}
              >
                Mul
              </Button>
              <Button
                type="button"
                variant="contained"
                sx={{ mt: 3, mb: 2, margin: "10px" }}
                disabled={num1 === "" || num2 === "" ? true : false}
                onClick={divisionHandler}
              >
                Div
              </Button>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                textAlign: "left",
                color: "#d32f2f",
                fontSize: "10px",
                fontStyle: "italic",
                padding: "20px 0px",
              }}
            >
              Note: Both fields are mandatory otherwise you cannot perform any
              operation.
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default FirstAssignment;
