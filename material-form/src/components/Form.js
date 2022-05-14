import React from "react"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from "@mui/material"

const Form = () => {
    //Validation Schema with Yup
    const validationSchema = yup.object({
        email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
        password: yup
            .string("Enter your password")
            .min(10,"Password should be at least 10 chars long")
            .required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: validationSchema,

        onSubmit: values => {
            console.log(values)
            alert("Login Succesful")
        }

    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="custom-form">
                <TextField 
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField 
                    id="password"
                    name="password"
                    label="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </>
    )
}

export default Form;