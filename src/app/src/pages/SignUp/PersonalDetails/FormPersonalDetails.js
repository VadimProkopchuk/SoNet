import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";


const formTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E8B57'
        }
    }
})

export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={formTheme}>
                <>
                    <Dialog
                        open={true}
                        fullWidth
                        // maxWidth='sm'
                    >
                 {/*       <Typography style={{textAlign: 'center',}}> Enter Your Personal Details </Typography>
                        <TextField
                            placeholder="Enter Your Password"
                            label="Occupation"
                            onChange={handleChange('password')}
                            defaultValue={values.password}
                            margin="normal"
                            fullWidth
                        />
                        <br />*/}
                       {/* <TextField
                            placeholder="Enter Your City"
                            label="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Bio"
                            label="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                            margin="normal"
                            fullWidth
                        />
                        <br />*/}
                        <ButtonGroup color="primary" variant="contained" fullWidth>
                            <Button
                                onClick={this.back}
                            >Back</Button>
                            <Button
                                onClick={this.continue}
                            >Continue</Button>
                        </ButtonGroup>
                    </Dialog>
                </>
            </ThemeProvider>
        );
    }
}

export default PersonalDetails;