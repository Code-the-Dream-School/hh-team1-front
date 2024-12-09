import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import {
  Container,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  colors,
  Select,
  MenuItem,
  SvgIcon,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import { Route, Routes } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import styled from "@emotion/styled";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
  },
}));

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  const handleFirstname = () => {
    if (
      !firstnameInput ||
      firstnameInput.length < 3 ||
      firstnameInput.length > 15
    ) {
      setFirstnameError(true);
      return;
    }
    setFirstnameError(false);
  };

  const handleLastname = () => {
    if (
      !lastnameInput ||
      lastnameInput.length < 3 ||
      lastnameInput.length > 15
    ) {
      setLastnameError(true);
      return;
    }
    setLastnameError(false);
  };

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 15
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleCity = () => {
    if (!cityInput) {
      setCityError(true);
      return;
    }
    setCityError(false);
  };

  const [selectedState, setSelectedState] = useState("");

  const handleState = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess();
    if (firstnameError || !firstnameInput) {
      setFormValid(
        "Firstname should be in 3-15 characters long.Please Re-Enter Firstname "
      );
      return;
    }

    if (lastnameError || !lastnameInput) {
      setFormValid(
        "Lastname should be in 3-15 characters long.Please Re-Enter Lastname "
      );
      return;
    }

    if (emailError || !emailInput) {
      setFormValid("Email is inValid.Please Re-Enter Email");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid(
        "Password should be in 5-15 characters.Please Re-Enter Password"
      );
      return;
    }
    setFormValid(null);
    setSuccess("Form submitted successfully");

    console.log("First Name:" + firstnameInput);
    console.log("Last Name:" + lastnameInput);
    console.log("Email:" + emailInput);
    console.log("Password:" + passwordInput);
    console.log("City:" + cityInput);
    console.log("State:" + selectedState);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <>
      <Box
        component="form"
        sx={{
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            background: "#000",
            "& .MuiPaper-root": {
              background: "#000",
              border: ".3rem solid blue",
              borderRadius: "1.5rem",
            },
            "& .MuiBackdrop-root": {
              backgroundColor: "black",
            },
          }}
        >
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12,0.5C5.7,0.5,0.5,5.7,0.5,12c0,6.3,5.2,11.5,11.5,11.5S23.5,18.3,23.5,12C23.5,5.7,18.3,0.5,12,0.5z M16.8,8.8v5v0.4v1.2  c0,0.8-0.6,1.4-1.4,1.4h-0.6c-0.8,0-1.4-0.6-1.4-1.4v-0.6c0-0.8,0.6-1.4,1.4-1.4h1.1V9.4l-5.2,1.6v4.3v0.8v0.8  c0,0.8-0.6,1.4-1.4,1.4H8.6c-0.8,0-1.4-0.6-1.4-1.4v-0.6c0-0.8,0.6-1.4,1.4-1.4h1.1v-4.1V8.1c0-0.2,0.1-0.4,0.3-0.5l6.2-1.9  c0.1,0,0.3,0,0.4,0.1c0.1,0.1,0.2,0.2,0.2,0.4V8.8z"
              />
            </svg>
          </SvgIcon>
          <DialogTitle sx={{ textAlign: "center", color: "white" }}>
            SignUp
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent
            sx={{
              color: "white",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              width: 400,
            }}
          >
            <Typography color="white" textAlign="center">
              {" "}
              Already a member?{"    "}
              <Link href="/login" variant="body2" style={{ color: "white" }}>
                Login
              </Link>
            </Typography>

            <TextField
              sx={{
                border: "white",
                backgroundColor: "white",
                borderRadius: "1rem",
                "& .MuiInputBase-root": {
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:hover:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                },
              }}
              id="firstname"
              error={firstnameError}
              label="First Name"
              value={firstnameInput}
              onChange={(event) => setFirstnameInput(event.target.value)}
              onBlur={handleFirstname}
              variant="filled"
              fullWidth
            />

            <TextField
              sx={{
                border: "white",
                backgroundColor: "white",
                borderRadius: "1rem",
                "& .MuiInputBase-root": {
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:hover:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                },
              }}
              id="lastname"
              error={lastnameError}
              label="Last Name"
              value={lastnameInput}
              onChange={(event) => setLastnameInput(event.target.value)}
              onBlur={handleLastname}
              variant="filled"
              fullWidth
            />

            <TextField
              sx={{
                border: "white",
                backgroundColor: "white",
                borderRadius: "1rem",
                "& .MuiInputBase-root": {
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:hover:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                },
              }}
              id="email"
              error={emailError}
              label="Email Address"
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
              onBlur={handleEmail}
              variant="filled"
              fullWidth
            />

            {/* <FormControl
              style={{ marginTop: "16px" }}
              variant="outlined"
              fullWidth
            >
              <InputLabel id="password-label" htmlFor="password">
                Password
              </InputLabel>
              <Input
                error={passwordError}
                id="password"
                type={showPassword ? "text" : "password"}
                value={passwordInput}
                onChange={(event) => setPasswordInput(event.target.value)}
                onBlur={handlePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl> */}

            <TextField
              sx={{
                border: "white",
                backgroundColor: "white",
                borderRadius: "1rem",
                borderBottom: "0 0 black",

                "& .MuiInputBase-root": {
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:hover:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                },
              }}
              error={passwordError}
              label="Password"
              variant="filled"
              type={showPassword ? "text" : "password"}
              value={passwordInput}
              onChange={(event) => setPasswordInput(event.target.value)}
              onBlur={handlePassword}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              sx={{
                borderColor: "white",
                backgroundColor: "white",
                borderRadius: "1rem",
                "& .MuiInputBase-root": {
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:hover:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                },
              }}
              id="city"
              error={cityError}
              label="City"
              value={cityInput}
              onChange={(event) => setCityInput(event.target.value)}
              onBlur={handleCity}
              variant="filled"
              fullWidth
            />
            <FormControl
              fullWidth
              variant="filled"
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                "& .MuiInputBase-root": {
                  "&:before": {
                    borderBottom: "none",
                  },
                  "&:hover:before": {
                    borderBottom: "none",
                  },
                  "&:after": {
                    borderBottom: "none",
                  },
                },
              }}
            >
              <InputLabel id="state-select-label">State</InputLabel>
              <Select
                labelId="state-select-label"
                value={selectedState}
                onChange={handleState}
                label="State"
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              startIcon={<LoginIcon />}
            >
              SIGN UP
            </Button>
            <Typography>
              {formValid && <Alert severity="error">{formValid} </Alert>}
            </Typography>
            <Typography>
              {success && <Alert severity="success">{success}</Alert>}
            </Typography>
          </DialogContent>
        </Dialog>
      </Box>
      {/* <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifycontent: "center",
            alignItems: "center",
            "& > :not(style) ~ :not(style)": {
              ml: 2,
            },
          }}
        >
          <Paper
            style={{ padding: "2rem" }}
            sx={{
              margin: 15,
              borderRadius: ".8rem",
              border: "3px solid blue",
              backgroundColor: "black",
            }}
          >
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              color="primary"
              variant="standard"
            />
            <Typography color="white">
              {" "}
              Already a member?{"    "}
              <Link href="/login" variant="body2">
                Login
              </Link>
            </Typography>
            <span>
              <p>
                <TextField
                  sx={{
                    label: { color: "white" },
                  }}
                  id="firstname"
                  error={firstnameError}
                  label="First Name"
                  value={firstnameInput}
                  onChange={(event) => setFirstnameInput(event.target.value)}
                  onBlur={handleFirstname}
                  variant="outlined"
                  fullWidth
                />
              </p>
              <p>
                <TextField
                  id="lastname"
                  error={lastnameError}
                  label="Last Name"
                  value={lastnameInput}
                  onChange={(event) => setLastnameInput(event.target.value)}
                  onBlur={handleLastname}
                  variant="standard"
                  fullWidth
                />
              </p>
              <p>
                <TextField
                  id="email"
                  error={emailError}
                  label="Email Address"
                  value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)}
                  onBlur={handleEmail}
                  variant="standard"
                  fullWidth
                />
              </p>
              <p>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel error={passwordError} htmlFor="password">
                    Password
                  </InputLabel>
                  <Input
                    fullWidth
                    error={passwordError}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={passwordInput}
                    onChange={(event) => setPasswordInput(event.target.value)}
                    onBlur={handlePassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </p>
              <p>
                <Button
                  onClick={handleSubmit}
                  fullWidth
                  variant="contained"
                  startIcon={<LoginIcon />}
                >
                  SIGN UP
                </Button>
              </p>
              <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>
              <p>{success && <Alert severity="success">{success}</Alert>}</p>
            </span>
          </Paper>
        </Box>
      </Container> */}
    </>
  );
}
export default SignUp;
