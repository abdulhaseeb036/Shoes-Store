import React, { useState,useContext } from 'react';
import 'firebase/auth';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid,Box,Typography,Container,makeStyles} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Profile from '../profile/profile';
import { signInWithGoogle } from '../api/firebaseCon'
import {UserContext} from '../api/contextapi'
import styles from '../sigin/signin.module.css';
import {signin} from '../api/contextapi';
import { useNavigate} from 'react-router-dom';

function Copyright() {

    return (

        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Haseeb Alam Rafiq Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Signin() {
    const classes = useStyles();
    const history = useNavigate();

    const {user} = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(false);

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
   
            signin(email,password);
            
            history('/profile')
            console.log(email, password);
    
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    return (
        user ? (
            <Profile />
        ) : (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="userEmail"
                                autoComplete="email"
                                autoFocus
                                onChange={(event) => onChangeHandler(event)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="userPassword"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(event) => onChangeHandler(event)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}
                            >
                                Sign In
          </Button>

          <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit + " " + styles.googlesigin}
                                onClick={(event) => {signInWithGoogle(event)}}
                            >
                                SignIn with Google
          </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
              </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            )
    )
}
// function Signin() {
//     return (
//         <h1>signin</h1>
//     )
// }

export default Signin;