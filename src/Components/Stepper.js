import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Grid, Step, StepLabel, Stepper, TextField, Typography, Box } from '@mui/material';
import PersonalDetails from './form/PersonalDetails';
import BankDetails from './form/BankDetails';
import UserContext from './UserContext';
import * as yup from 'yup';
import { Formik } from "formik"
import { getSuggestedQuery } from '@testing-library/react';

function getSteps() {
  return [
    "Personal Details",
    "Bank Details",
    "Educational Details",
    "Experiance Details",
  ]
}

const StepperUser = ({getUser}) => {

  const [user, setUser] = useState({})
  const [allowNext, setAllowNext] = useState(false)
  const PersonalDetailsref = useRef()
  // const [isValid, setIsValid] = useState(false)
  const [dirty, setisDirty] = useState(false)
  // const bankRef = useRef()
  const [activeStep, setActiveStep] = useState(0)
 

  const steps = getSteps()

  const handleSubmit = (e) => {
    e.preventDefault() 
  }

  const OnSuccess = useCallback((values) => {
     setAllowNext(true)
    
  },[])


  const OnError = useCallback(() => {
    setAllowNext(false)
  },[])

  const bankdetail =(values) => {
    setUser(values)
    console.log("bankdetails", user);
  }


  const handleNext = useCallback(() => {
    setAllowNext(false)
    
    setActiveStep(activeStep => activeStep + 1)
    if (activeStep == 0) {
      const personaldetail = PersonalDetailsref?.current?.getdata();
      setUser({ ...user, personaldetail })
      console.log("personalDetails", personaldetail)
      getUser(user)
       console.log("users", user);
    } 


    if (activeStep == 1) {
    //   const bankdetail = bankRef?.current?.getbank();
    //   console.log("bankdetails", bankdetail)
    //   setUser({...user, bankdetail })
    //   console.log("users", user);
   
   bankdetail()
    }


  })

  const handleBack = useCallback(() => {
    setActiveStep(activeStep => activeStep - 1)
  })


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <PersonalDetails OnSuccess={OnSuccess} ref={PersonalDetailsref} OnError={OnError} user={user}/>
          </>
        )
      case 1:
        return (
          <>
            <BankDetails OnSuccess={OnSuccess}  OnError={OnError} user={user} bankdetail={bankdetail} />
            {/*  ref={bankRef} */}
           
          </>
        )
      case 2:
        return (
          <>

          </>
        )
    }
  }
  

  return (
    <>

      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <hr />

      <form onSubmit={handleSubmit}>
        {getStepContent(activeStep)}
      </form>
      <div style={{ justifyContent: "space-between", display: "flex" }}>
        <div>
          <Button variant='contained' color='primary' hidden={activeStep == 0} onClick={handleBack}>Back</Button>
        </div>
        <div>
          <Button variant='contained' color='primary' type="submit" onClick={handleNext} disabled={allowNext ? false : true}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default StepperUser;

