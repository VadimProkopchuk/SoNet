import React, {Component, useState} from "react";
import UserDetails from "../UserDetails/UserDetails";
import PersonalDetails from "../PersonalDetails/FormPersonalDetails";
import Confirm from "../Confirm/Confirm";
import Success from "../Success/Success";
import useForm from "../../../hooks/useForm";
import validateSignUp from "../../../hooks/formValidation";
import formValidation from "../../../hooks/formValidation";


export class SignUp extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }


    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    };

 /*   const {myErrors, setErrors} = useState({});

    const confirmAndSubmt = (event) => {
        event.preventDefault();
        setErrors(formValidation(this.values));
        setSubmit(true);
    }*/

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio}
        switch (step){
            case 1:
                return(
                    < UserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return(
                    < PersonalDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return   < Confirm
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
            case 4:
                return < Success
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}/>
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default SignUp;