import React, { useContext, useEffect, useState, memo, forwardRef, useImperativeHandle } from 'react';
import { Button, Grid, Step, StepLabel, Stepper, TextField, Typography, Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as yup from 'yup';
import { useFormik } from 'formik';


const validateSchema = yup.object({
  firstName: yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('first Name is Required!'),
  lastName: yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('lastt Name is Required!'),
  city: yup.string()
    .min(4, 'Must be 4 characters or more')
    .max(14, 'Must be 15 characters or less')
    .required('City is Required!'),
  email: yup.string()
    .email('Invalid email address')
    .required('Email is Required!'),
  mobile: yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(/^[0-9]{10}$/, "phone number must be 10 digits")
    .required('phone number is required!'),
  dob: yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
});

const initialPersonalDetails = {
  firstName: "",
  mobile: "",
  lastName: "",
  email: "",
  city: "",
  dob: ""
}
const PersonalDetails = ({ OnSuccess, OnError, personaldetail, user, setUser }, ref) => {



  const formik = useFormik({

    initialValues: user.personaldetail? user.personaldetail: initialPersonalDetails,

    enableReinitialize: true,
    validationSchema: validateSchema,
   
  })

  useImperativeHandle(ref, () => ({
    getdata

  }));
  const getdata = () => {
    return formik.values;
  }


  // useEffect(()=>{
  //   if(user?.userdetail?.firstName){
  //     setInitialUser({...user.userdetail})
  //     console.log(formik.values);
  //   }
  // },[])


  // useEffect(() => {
  //   if (!formik.dirty) OnError()
  // }, [])

  useEffect(() => {
    // if(!formik,isValid||!formik.dirty){
    //   OnError()
    // }

    // if (formik.isValid || formik.dirty) {
    //   console.log("hel", formik.isValid, formik.dirty)
    //   OnSuccess()
    // }

   if(formik.isValid) {
    OnSuccess(formik)
   }else{
    OnError()
   }
  }, [formik])




  return (
    // <form onSubmit={formik.onSubmit}>
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            fullWidth
            id="firstName"
            label="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && formik.errors.firstName ? true : false}
            helperText={formik.touched.firstName && formik.errors.firstName}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            onChange={formik.handleChange}
            autoComplete="family-name"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && formik.errors.lastName ? true : false}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={formik.handleChange}
            autoComplete="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="mobile"
            label="Mobile"
            name="mobile"
            onChange={formik.handleChange}
            autoComplete="mobile"
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            error={formik.touched.mobile && formik.errors.mobile ? true : false}
            helperText={formik.touched.mobile && formik.errors.mobile}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            onChange={formik.handleChange}
            autoComplete="city"
            onBlur={formik.handleBlur}
            value={formik.values.city}
            error={formik.touched.city && formik.errors.city ? true : false}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="dob"
            label="DOB"
            type="date"
            id="dob"
            onChange={formik.handleChange}
            autoComplete="new-password"
            onBlur={formik.handleBlur}
            value={formik.values.dob}
            error={formik.touched.dob && formik.errors.dob ? true : false}
            helperText={formik.touched.dob && formik.errors.dob}
          />
        </Grid>
        <FormControl onChange={formik.handleChange} >
          <FormLabel id="demo-row-radio-buttons-group-label" style={{ marginLeft: 18, marginTop: 15 }}>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            style={{ marginLeft: 18 }}
            defaultValue="female"

          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Grid>


    </Box>
    //  </form>

  );
}

export default forwardRef(PersonalDetails);


