import React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const PaginationUser = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  }
    return ( 
        <>
    <Stack spacing={2}>
      <Pagination count={2} page={page} onChange={handleChange} />
    </Stack>
        </>
     );
}
 
export default PaginationUser;