import React from 'react';
import { AppBar, Avatar, Grid, Paper, Toolbar, TextField, Button, Typography, Link} from '@material-ui/core';
import {Redirect} from 'react-router-dom';

const gridStyle = {
    width: '100%',
    margin: '0px'
}

const leftPaperStyle = {
    width: '100%',
    backgroundColor: '#405185'
}

const rightPaperStyle = {
    padding: "20px",
    height: "60vh",
    width: "280px",
    margin: "20px auto"
}

const h3Style = {
    color: "#FFFFFF",
    padding: "20px"
}

const buttonStyle = {
    margin: "10px 0"
}


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstname: "",
            lastname: "",
            password: "",
            success: false,
            login: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.redirectToLogIn = this.redirectToLogIn.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    redirectToLogIn() {
        this.setState({login: true});
    }

    render() {
        if (this.state.login) {
            return <Redirect to='./login'/>
        }
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <h1>Friender</h1>
                    </Toolbar>
                </AppBar>
                <Grid container style={gridStyle} spacing={2}>
                    <Grid item xs={9}>
                        <Paper style={leftPaperStyle}>
                            <div>
                                <h3 style={h3Style}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu facilisis lectus, sit amet commodo ante. Vivamus viverra maximus enim ac eleifend. Vestibulum neque nisl, scelerisque sit amet ullamcorper vel, tempus viverra dolor. Sed eu lacus in leo iaculis euismod in vitae felis. 

                                </h3>
                                <img src="https://images.unsplash.com/photo-1616095653157-36fae98bdcea" alt="repeating pattern of tomatoes on vine"/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper style={rightPaperStyle} elevation={10}>
                            <Grid align='center'>
                                <Avatar></Avatar>
                                <h2>Sign Up</h2>
                            </Grid>
                            <form>
                                <TextField label='First name' placeholder="John" name="firstname" id="firstname" fullWidth required autoFocus onChange={this.handleChange} value={this.state.firstname}/>
                                <TextField label='Last name' placeholder="Smith" name="lastname" id="lastname" fullWidth required onChange={this.handleChange} value={this.state.lastname}/>
                                <TextField label='E-mail' placeholder="E-mail" name="email" id="email" fullWidth required onChange={this.handleChange} value={this.state.email}/>
                                <TextField label='Password' placeholder="Password" name="password" id="passwor" fullWidth required type="password" onChange={this.handleChange} value={this.state.password}/>
                                <Button type="submit" color="primary" variant="contained" fullWidth style={buttonStyle}>
                                    Sign up
                                </Button>
                            </form>
                            <Typography>
                                Already have an account?<Link href="" onClick={this.redirectToLogIn}>   Log In</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SignUp;