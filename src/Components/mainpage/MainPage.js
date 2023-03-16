import React, { useState } from 'react';
import Button from "@mui/material/Button"
import Table from 'react-bootstrap/Table';
import "./Style.css"
import UserContext from '../UserContext';
import Dailog from '../dailog/DailogPage';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PaginationUser from '../Pagination';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import EditButton from '@mui/icons-material/Edit';
import DeleteButton from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import MUIDataTable from "mui-datatables"
import Search from '@mui/icons-material/Search';

const MainPage = () => {

    const [open , setOpen] = useState(false)
    const [users, setUsers] = useState([])
 
    const handleClose = () => {
        setOpen (false)
    }

    const handleOpen = () => {
        setOpen (true)
    }

    const getUser = (user, userdetail) => {
      setUsers([...users, user.userdetail])
    }
     
    return ( 
        <>
        <div className="title" style={{textAlign:"center" }}>
          <h1>Employee List</h1>
        </div>
       
       <hr/>
      
        <div className='both'>
            <div className='inputfild'>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Employee"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
          
        </div>
            <div className='btn2'> 
            <Button variant='contained'color='primary' onClick={handleOpen}>Add Employee</Button></div>
        </div>
       
       
       <div style={{paddingLeft: 20, paddingRight: 20}}>
       <Table striped bordered hover >
      <thead style={{padding : 20}}>
        <tr style={{ textAlign: "center"}}>
          <th style={{width: 100}}></th>
          <th style={{width: 300}}>Name</th>
          <th style={{width: 200}}>Mobile</th>
          <th style={{width: 200}}>City</th>
          <th style={{width: 300}}>Email</th>
          <th style={{width: 150}}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => {
          return (
            <tr style={{ textAlign: "center"}} key={i}>
            <td><input type="Checkbox"/></td>
            <td>{user?.userdetail?.firstName}</td>
            <td>9922757817</td>
            <td>pune</td>
            <td>shraddha@gmail.com</td>
            <td className='muibtn'>
            <IconButton color='primary'><EditButton/></IconButton>
              <IconButton color='error'><DeleteButton/></IconButton>
            </td>
          </tr>
          ) 
        })}
      
        <tr style={{ textAlign: "center"}}>
        <td><input type="Checkbox"/></td>
          <td>abc</td>
          <td>23456789098</td>
          <td>Otto</td>
          <td>mdo56gmail.com</td>
          <td className='muibtn'>
          <IconButton color='primary'><EditButton/></IconButton>
            <IconButton color='error'><DeleteButton/></IconButton>
          </td>
        </tr>
        <tr style={{ textAlign: "center"}}>
        <td><input type="Checkbox"/></td>
          <td>cfdvfghjkl</td>
          <td>87654345678</td>
          <td>ahmdabad</td>
          <td>bgh@gmail.com</td>
          <td> 
          <IconButton color='primary'><EditButton/></IconButton>
            <IconButton color='error'><DeleteButton/></IconButton>
          </td>
        </tr>
        <tr style={{ textAlign: "center"}}>
        <td><input type="Checkbox"/></td>
          <td>uiiuiuytr</td>
          <td>876543333</td>
          <td>jhgfd</td>
          <td>@mdoffff54</td>
          <td>
          <IconButton color='primary'><EditButton/></IconButton>
            <IconButton color='error'><DeleteButton/></IconButton>
          </td>
        </tr>
        <tr style={{ textAlign: "center"}}>
        <td><input type="Checkbox"/></td>
          <td>oouyui</td>
          <td>3456785678</td>
          <td>Otto</td>
          <td>erty@mdogmail</td>
          <td>
          <IconButton color='primary'><EditButton/></IconButton>
            <IconButton color='error'><DeleteButton/></IconButton>
          </td>
        </tr>
        <tr style={{ textAlign: "center"}}>
        <td><input type="Checkbox"/></td>
          <td>powry</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
          <IconButton color='primary'><EditButton/></IconButton>
            <IconButton color='error'><DeleteButton/></IconButton>
          </td>
        </tr>
        <tr style={{ textAlign: "center"}}>
        <td><input type="Checkbox"/></td>
          <td>priyaaa</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td> 
          <IconButton color='primary'><EditButton/></IconButton>
            <IconButton color='error'><DeleteButton/></IconButton>
          </td>
        </tr>
      </tbody>
    </Table>
     {/* <MUIDataTable columns={columns} data={data}
     options={{search:false, print: false, pagination: false, viewColumns:false}}/> */}
     
       </div>

        <UserContext.Provider
        value={{
            open : open,
            handleClose : handleClose,
           
        }}
        >
         <Dailog getUser={getUser} />  
        </UserContext.Provider>
      
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div className='dropdown' style={{padding: 10}}>
            <select>
                <option>1</option>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
            </select>
        </div>
        
       <div style={{padding: 10}}>
       <PaginationUser/>
       </div>

        </div>

        
        </>

       
     );
}
 
export default MainPage;