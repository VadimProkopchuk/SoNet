import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";

import is from 'is_js';
import Input from "@material-ui/core/Input";
import {updateSignUpData} from "../../../store/actions/signUpActions";




 const formTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E8B57'
        }
    }
})

class UserDetails extends Component {

    state = {
        formControls: {
            /*   firstName: '',
               lastName: '',*/
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter correct email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Enter correct password (6 symbols min)',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                },
                /* city: '',
                 bio: '',*/
            }
        },
    }

    componentDidMount() {
        const formControls = {...this.state.formControls};
        formControls.email.value = this.props.email;
        formControls.password.value = this.props.password;
        this.setState({formControls});
    }

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
               {/*         <TextField
                            placeholder="Enter Your Email"
                            label="Email"
                            /*onChange={handleChange('email')}
                            defaultValue={values.email}
                            margin="normal"
                            fullWidth
                        />*/}

                        <br />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.continue.bind(this)}
                        >Continue</Button>
                    </Dialog>
                </>
            </ThemeProvider>
        );
    }

    onChangeHandler(event, controlName) {
        const formControls = this.state.formControls;
        const control = {...formControls[controlName]}

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;
        this.setState({formControls});
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

    continue() {
        const email = this.state.formControls.email.value;
        const password = this.state.formControls.password.value;
        this.props.updateSignUpData(email, password);
        this.props.nextStep();
        //action type
        // action
        // process data
        // wrap continue func
        //map to props + another func



        // const email = this.state.formControls.email.value,
        // const password = this.state.formControls.password.value,
        // dispatch(changeUserData(email, password))
        //this.props.nextStep();
    };


    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    label={control.label}
                    onChange={event => {this.onChangeHandler(event, controlName)}}
                />
            )
        })
    };
}

const mapStateToProps = state => {
    return {
        email: state.signUp.email,
        password: state.signUp.password,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        updateSignUpData: (email, password) => dispatch(updateSignUpData(email, password)),
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
