import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";

import is from 'is_js';
import Input from "@material-ui/core/Input";




 const formTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E8B57'
        }
    }
})
export class UserDetails extends Component {


    render() {
      //  const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={formTheme}>
                <>
                    <Dialog
                        open={true}
                        fullWidth={true}
                        maxWidth='sm'
                    >
                        <Typography style={{textAlign: 'center',}}> Enter Your Details </Typography>
                        {this.renderInputs()}
                    {/*
                            <TextField
                            placeholder="Enter Your First Name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            margin="normal"
                            fullWidth
                        />
                        error message
                        <br />
                        <TextField
                            placeholder="Enter Your Last Name"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            margin="normal"
                            fullWidth
                        />
                        error message
                        <br />*/}
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

    onChangeHandler(event, controlName) {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value()
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control
        this.setState({formControls})
    }

    validateControl(value, validation) {
        if (!validation){
            return true
        }
        let isValid = true

        if (validation.required){
            isValid = value.trim() !== "" && isValid
        }
        if (validation.email){
            isValid = is.email(value) && isValid
        }
        if (validation.minLength){
            isValid = validation.minLength <= value.length && isValid
        } return isValid
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    renderInputs(){
        return  Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={ !!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => {this.onChangeHandler(event, controlName)}}
                />
            )
        })
    };
}

export default UserDetails;