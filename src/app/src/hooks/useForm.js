import { useState, useEffect } from "react";
import formValidation from "./formValidation";


export default function useForm  (state,  callback = () => {console.log('useForm submit callback')}) {

    const [values, setValues] = useState({state});
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(formValidation(values));
        setSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submit) {
            callback();
        }
    }, [errors]);

    return {
        handleChange,
       // handleSubmit,
        values,
     //   errors
    };
};
