// import React from 'react';
import HeadshotOmni from '../../components/img/HeadshotOmni.png';
import HeadshotFatlip from '../../components/img/HeadshotFatlip.png';
import '../style.css';
// import Banner from '../../components/img/Banner.png';

import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

// import ThemeProvider from '@mui/material/styles';
// import createTheme from '@mui/material/styles';


function OmniSwitch() {
    let Fatlip = document.getElementById("about-Fatlip");
    Fatlip.style.display = 'none'
    let omni = document.getElementById("about-Omni");
    omni.style.display = 'block'

};

function FatlipSwitch() {
    let omni = document.getElementById("about-Omni");
    omni.style.display = 'none'
    let Fatlip = document.getElementById("about-Fatlip");
    Fatlip.style.display = 'block'


};

function AboutPage() {

const [open, setOpen] = React.useState(false);
const [fullWidth, setFullWidth] = React.useState(true);
const [maxWidth, setMaxWidth] = React.useState('xl');

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleMaxWidthChange = (event) => {
  setMaxWidth(
    // @ts-expect-error autofill of arbitrary value is not handled.
    event.target.value,
  );
};

const handleFullWidthChange = (event) => {
  setFullWidth(event.target.checked);
};

const [formState, setFormState] = useState({ email: "", password: "" });
const [login, { error, data }] = useMutation(LOGIN_USER);

// update state based on form input changes
const handleChange = (event) => {
  const { name, value } = event.target;

  setFormState({
    ...formState,
    [name]: value,
  });
};

// submit form
const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);
  try {
    const { data } = await login({
      variables: { ...formState },
    });

    Auth.login(data.login.token);
  } catch (e) {
    console.error(e);
  }

  // clear form values
  setFormState({
    email: "",
    password: "",
  });
};

// const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#FF5733',
//       },

//     },
//   });

    return (
        
        <section>

<React.Fragment>
    <Box textAlign='center'>
    {/* <ThemeProvider theme={theme}> */}
      <Button variant="text"  onClick={handleClickOpen}>
        _
      </Button>
    {/* </ThemeProvider> */}
    </Box>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>

        <Card sx={{ minWidth: 275 }} className="card-body">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar  variant="dense">
                  <Typography variant="h6" color="inherit" component="span">
                    Log In
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          </Typography>
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit} className="formCard">
              <Typography variant="h5" component="span">
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  component="span"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <TextField
                  fullWidth
                  id="password"
                  component="span"
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </Typography>
              <Typography variant="body2">
                <Button
                  variant="contained"
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Log In
                </Button>
              </Typography>
            </form>
          )}
          <a href="/signup" rel="signup">
            Sign Up Instead?
          </a>
          {error && (
            <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
          )}
        </CardContent>
      </Card>

          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
            {/* <h1>About</h1> */}
            {/* <section className="aboutSin-Img"style={{justifyContent: "Center"}}>
                <img src={Banner} ></img>
            </section> */}
            <section>
                <p>
                    Aliqua proident ad aliquip irure ipsum et cupidatat et culpa consequat consequat. Cillum sint quis tempor sunt sit consequat qui. Lorem sunt ullamco consectetur deserunt ullamco commodo labore exercitation ad dolor cillum pariatur. Id sint voluptate commodo duis.


                </p>
                <p>
                    Commodo nostrud anim sit in consectetur adipisicing irure ullamco enim eu non. Reprehenderit commodo ullamco non aliquip sunt. Elit commodo cillum laboris non sint fugiat. Dolor aliqua amet velit qui excepteur non ipsum incididunt. Amet eu sit commodo duis deserunt amet nisi ut esse. Tempor cupidatat aliqua commodo ullamco dolore veniam exercitation. Amet dolor excepteur adipisicing sit.

                </p>
            </section>
            <section >
                <section className="about-Img">
                    <img id="omni-Img" onClick={OmniSwitch} src={HeadshotOmni} alt="Omni" />

                    <img id="Fatlip-Img" onClick={FatlipSwitch} src={HeadshotFatlip} alt='Fat Lip'></img>
                </section>
            </section>
            <section id="about-Omni" style={{ display: "none" }}>
                <p>
                    Aliqua proident ad aliquip irure ipsum et cupidatat et culpa consequat consequat. Cillum sint quis tempor sunt sit consequat qui. Lorem sunt ullamco consectetur deserunt ullamco commodo labore exercitation ad dolor cillum pariatur. Id sint voluptate commodo duis.


                </p>
                <p>
                    Commodo nostrud anim sit in consectetur adipisicing irure ullamco enim eu non. Reprehenderit commodo ullamco non aliquip sunt. Elit commodo cillum laboris non sint fugiat. Dolor aliqua amet velit qui excepteur non ipsum incididunt. Amet eu sit commodo duis deserunt amet nisi ut esse. Tempor cupidatat aliqua commodo ullamco dolore veniam exercitation. Amet dolor excepteur adipisicing sit.

                </p>
            </section>

            <section id="about-Fatlip" style={{ display: "none" }}>
                <p>
                    Commodo nostrud anim sit in consectetur adipisicing irure ullamco enim eu non. Reprehenderit commodo ullamco non aliquip sunt. Elit commodo cillum laboris non sint fugiat. Dolor aliqua amet velit qui excepteur non ipsum incididunt. Amet eu sit commodo duis deserunt amet nisi ut esse. Tempor cupidatat aliqua commodo ullamco dolore veniam exercitation. Amet dolor excepteur adipisicing sit.

                </p>
                <p>
                    Aliqua proident ad aliquip irure ipsum et cupidatat et culpa consequat consequat. Cillum sint quis tempor sunt sit consequat qui. Lorem sunt ullamco consectetur deserunt ullamco commodo labore exercitation ad dolor cillum pariatur. Id sint voluptate commodo duis.


                </p>
            </section>

        </section>

    )
}

export default AboutPage;