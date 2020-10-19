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
    compo() {
        // send request to API
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
                        <Typography color="primary" style={{textAlign: 'center'}}>Success!</Typography>
                        <h1>Thank You For Your Submission</h1>
                        <p>You will get an email with further instructions.</p>
                    </Dialog>
                </>
            </ThemeProvider>
        );
    }
}

export default Success;
