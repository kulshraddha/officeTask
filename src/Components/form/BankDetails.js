import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Button, Grid, Step, StepLabel, Stepper, TextField, Typography, Box } from '@mui/material';
import * as yup from "yup"
import { useFormik } from "formik"
import { PestControlRodentRounded } from '@mui/icons-material';

const validateSchema = yup.object({
  bankName: yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Bank Name is Required!'),
  accno: yup.string()
  .typeError("That doesn't look like a account number")
  .matches(/^[0-9]{12}$/, "account number must be 12 digits")
  .required('account number is required!'),
  ifsccode: yup.string()
  .typeError("That doesn't look like a account number")
  .required('IFSC code is required!'),
  aadhar: yup.string()
  .typeError("That doesn't look like a aadhar number")
  .matches(/^[0-9]{12}$/, "Aadhar number must be 12 digits")
  .required('aadhar number is required!'),
  pan: yup.string()
    .typeError("That doesn't look like a pan number")
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "pan number must be 10 digits")
    .required('pan number is required!'),
});


const BankDetails = ({ OnSuccess, OnError ,user, bankdetail}, ref) => {


  const [initialUser, setInitialUser] = useState({
    bankName: "",
    accno: "",
    ifsccode: "",
    aadhar: "",
    pan: ""
  })

  const formik = useFormik({
    initialValues: initialUser,
    enableReinitialize: true,
    validationSchema: validateSchema,
  })


  const getbank = () => {
    return formik.values
  }
  useImperativeHandle(ref, () => ({
    getbank,
  }))


  useEffect(() => {
  if(formik.isValid){
   OnSuccess(formik)
   bankdetail(formik.values)

  }else{
    OnError()
  }

  }, [formik])

  useEffect(()=>{
    if(user?.bankdetail?.bankName){
      setInitialUser({...user.bankdetail})
      console.log(formik.values);
    }
  },[])
  return (
    <>
    <Box>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="given-name"
          name="bankName"
          required
          fullWidth
          id="bankName"
          label="Bank Name"
          onChange={formik.handleChange}
          value={formik.values.bankName}
          autoFocus
          onBlur={formik.handleBlur}
          error={formik.touched.bankName && formik.errors.bankName ? true : false}
           helperText={formik.touched.bankName && formik.errors.bankName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="accNo"
          label="Account No."
          name="accno"
          onChange={formik.handleChange}
          value={formik.values.accno}
          onBlur={formik.handleBlur}
          error={formik.touched.accno && formik.errors.accno ? true : false}
          helperText={formik.touched.accno && formik.errors.accno}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="ifscCode"
          label="IFSC Code No."
          name="ifsccode"
          onChange={formik.handleChange}
          value={formik.values.ifsccode}
          onBlur={formik.handleBlur}
            error={formik.touched.ifsccode && formik.errors.ifsccode ? true : false}
            helperText={formik.touched.ifsccode && formik.errors.ifsccode}
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          required
          fullWidth
          id="aadhar"
          label="Aadhar No."
          name="aadhar"
          onChange={formik.handleChange}
          value={formik.values.aadhar}
          autoComplete="mobile"
          onBlur={formik.handleBlur}
            error={formik.touched.aadhar && formik.errors.aadhar ? true : false}
            helperText={formik.touched.aadhar && formik.errors.aadhar}
        />
      </Grid>
      <Grid item xs={6} style={{ paddingBottom: 80 }}>
        <TextField
          required
          fullWidth
          id="pan"
          label="PAN No."
          name="pan"
          onChange={formik.handleChange}
          value={formik.values.pan}
          onBlur={formik.handleBlur}
            error={formik.touched.pan && formik.errors.pan ? true : false}
            helperText={formik.touched.pan && formik.errors.pan}
        />
      </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default forwardRef(BankDetails);
// export default BankDetails;


