import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";



 const formTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E8B57'
        }
    }
})
export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={formTheme}>
                <>
                    <Dialog
                        open={true}
                        fullWidth={true}
                        maxWidth='sm'
                    >
                        <Typography style={{textAlign: 'center',}}> Enter Your Details </Typography>
                        <TextField
                            placeholder="Enter Your First Name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Last Name"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.continue}
                        >Continue</Button>
                    </Dialog>
                </>
            </ThemeProvider>
        );
    }
}

export default FormUserDetails;