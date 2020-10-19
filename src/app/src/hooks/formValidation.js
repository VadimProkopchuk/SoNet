export default function validateSignUp(values) {
    let errors = {};
    if (!values.firstName){
        errors.firstName = "Name is required"
    }
    if (!values.lastName){
        errors.lastName = "Last name is required"
    }
    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
    return errors;
}