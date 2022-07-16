import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Typography } from '@mui/material';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';

const Form = () => {

    const paperdesign = {
        padding:"30px",
        marginTop: "50px"
        
    }

    return(
        
            <Grid container>
                    <Grid item sm={12} lg={4} md={3}>

                    </Grid>
                    <Grid item sm={12} lg={4} md={6} style={{margin:"0 auto"}}>
                        <Paper elevation={5} style={paperdesign}>

                           <Grid align="center">
                            <Avatar style={{backgroundColor:"#1dd1a1" }}>
                                <LockOpenRoundedIcon/>
                            </Avatar>
                           <h2>Login Here</h2>
                           </Grid>

                        {/* Start Input Filds */}

                           <TextField
                                id="input-with-icon-textfield"
                                label="Username"
                                fullWidth
                                placeholder='Enter Username'
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                ),
                                }}
                                variant="standard"
                            />

                            <TextField
                                id="input-with-icon-textfield"
                                label="Password"
                                fullWidth
                                type='password'
                                placeholder='Enter Password'
                                style={{marginTop:"30px"}}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                    <KeyIcon />
                                    </InputAdornment>
                                ),
                                }}
                                variant="standard"
                            />

                                    {/* End Input Filds */}

                                  
                                <Box mt={1}>
                                <FormControlLabel control={<Checkbox />} label="Remember Me" />
                                </Box>


                                    {/* start Button */}

                         <Box mt={2}>
                         <Button variant="contained" style={{backgroundColor:"#1dd1a1"}} fullWidth={true}>Login</Button>
                         </Box>

                                {/* End Button */}

                               <Box mt={2}>
                               <Link href="#" underline="none">
                                    Forgot Password?
                                </Link>
                               </Box>

                              <Box mt={1}>
                              <Typography>Not a member?
                              <Link href="#" underline="none">
                                    Signup Here
                                </Link>
                                </Typography>
                              </Box>
                        
                        </Paper>
                    </Grid>
                    <Grid item sm={12} lg={4} md={3}>

                    </Grid>
            </Grid>
        
    )
}


export default Form;