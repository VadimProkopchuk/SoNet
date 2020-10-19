import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const formTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E8B57'
        }
    }
})

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values:{firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <ThemeProvider theme={formTheme}>
                <>
                    <Dialog
                        open
                        fullWidth
                        // maxWidth='sm'
                    >
                        <Typography style={{textAlign: 'center',}}> Data Confirmation </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="First Name" secondary={firstName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name" secondary={lastName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Occupation" secondary={occupation} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="City" secondary={city} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bio" secondary={bio} />
                            </ListItem>
                        </List>
                        <br />
                        <ButtonGroup color="primary" variant="contained" fullWidth>
                            <Button
                                onClick={this.back}
                            >Back</Button>
                            <Button
                                onClick={this.continue}
                            >Confirm & Continue</Button>
                        </ButtonGroup>
                    </Dialog>
                </>
            </ThemeProvider>
        );
    }
}

export default Confirm;