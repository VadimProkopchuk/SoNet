import React, {Component} from "react";
import UserDetails from "../UserDetails/UserDetails";
import PersonalDetails from "../PersonalDetails/FormPersonalDetails";
import Confirm from "../Confirm/Confirm";
import Success from "../Success/Success";


 class SignUp extends Component {

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
    }

    state = {
        step: 1,
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


        /*   const {myErrors, setErrors} = useState({});

           const confirmAndSubmit = (event) => {
               event.preventDefault();
               setErrors(formValidation(this.values));
               setSubmit(true);
           }*/

        handleChange(event, controlName) {
            this.setState({[controlName]: event.target.value})
        },

        render() {
            const {step} = this.state;
            const {email, password} = this.state.formControls;
            const values = {email, password}// firstName, lastName,, city, bio
            switch (step) {
                case 1:
                    return (
                        < UserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    )
                case 2:
                    return (
                      /*  < PersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />*/
                        < Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    )
                case 3:
                    return  (< Success
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}/>)
                        /*< Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />*/
             /*
                case 4:
                    return < Success
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}/>*/
                default:
                    (console.log('This is a multi-step form built with React.'))
            }
        }
    }
}
export default SignUp;