// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import "./dataTable.css"

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   { field: 'name', headerName: 'Name', width: 150 },
//   { field: 'customerId', headerName: 'Customer ID', width: 150 },
//   { field: 'startDate', headerName: 'Start Date', width: 150 },
//   { field: 'duration', headerName: 'Duration', width: 150 },
//   { field: 'comment', headerName: 'Comment', width: 200 },
//   { field: 'contractValue', headerName: 'Contract Value', width: 150 },
//   { field: 'type', headerName: 'Type', width: 150 },
// ];


// export default function DataGridTable({documents}) {
//   return (
//     <Box sx={{ height: 400, width: '100%', backgroundColor: 'white', margin:"10px" }}> 
//       <DataGrid
//         rows={documents}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./dataTable.css";

export default function DataGridTable({ data, columns }) {
  return (
    <Box sx={{ height: 400, width: '100%', backgroundColor: 'white', margin:"10px" }}> 
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
