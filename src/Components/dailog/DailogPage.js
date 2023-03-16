import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useContext } from 'react';
import StepperUser from '../Stepper';
import UserContext from '../UserContext';
const Dailog = ({getUser, userdetail}) => {

    const {open , handleClose}  = useContext(UserContext);

    return ( 
        <>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Form</DialogTitle>
        <DialogContent>
           <StepperUser getUser={getUser} userdetail={userdetail}/>
        </DialogContent>
       </Dialog>
        </>
     );
}
 
export default Dailog;