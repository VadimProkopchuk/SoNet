import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";


const formTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E8B57'
        }
    }
})



export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <ThemeProvider theme={formTheme}>
                <>
                    <Dialog
                        open={true}
                        fullWidth
                        maxWidth='sm'
                    >
                        <Typography color="primary" style={{textAlign: 'center',}}>Success!</Typography>
                        <h1>Thank You For Your Submission</h1>
                        <p>You will get an email with further instructions.</p>
                    </Dialog>
                </>
            </ThemeProvider>
        );
    }
}

export default Success;