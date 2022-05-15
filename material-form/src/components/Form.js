import React from "react"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ref } from "yup"
import { Button, TextField, Box } from "@mui/material"

const Form = () => {
    //Validation Schema with Yup
    const validationSchema = yup.object({
        firstName: yup
            .string("Enter your first name")
            .required("First name is required"),
        lastName: yup
            .string("Enter your last name")
            .required("Last name is required"),
        email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
        password: yup
            .string("Enter your password")
            .min(10,"Password should be at least 10 chars long")
            .required("Password is required"),
        confirm_password: yup
            .string("Please confirm the password")
            .required("Password confirmation is required")
            .oneOf([ref("password")], "Passwords do not match")
        
    });

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm_password: "",
            rememberMe: false
        },

        validationSchema: validationSchema,

        onSubmit: values => {
            console.log(values)
            alert("Login Succesful")
        }
    })

    return (
        <>
            <form className="custom-form" onSubmit={formik.handleSubmit}>
                <div className="title">Sign Up</div>
                <Box m={2} >
                    <TextField 
                        className="text-box"
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </Box>
                    
                <Box m={2}>
                    <TextField 
                        className="text-box"
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Box>
                <Box m={2} >
                    <TextField 
                        className="text-box"
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
                <Box m={2}>
                    <TextField 
                        className="text-box"
                        id="password"
                        name="password"
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Box>

                <Box m={2}>
                    <TextField 
                        className="text-box"
                        id="confirm_password"
                        name="confirm_password"
                        label="Confirm Password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                        helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                    />
                </Box>
                
                <Box m={1}>
                    <input 
                        type="checkbox" 
                        id="rememberMe"
                        name="rememberMe"
                        checked={formik.values.rememberMe}
                        onChange={formik.handleChange}
                    />
                    <label name="remeber">Remember me</label>
                </Box>

                <Box m={1}>
                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
                
            </form>
        </>
    )
}

export default Form;