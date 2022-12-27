import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import SlopesRow from './SlopesRow';

import data from '../databases/ski-info.json';

const SlopesTable = () => {

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Ski Resort</TableCell>
                    <TableCell align="right">Current Temperature ({"\u00B0"}F)</TableCell>
                    <TableCell align="right">Current Base (inches)</TableCell>
                    <TableCell align="right">Price (USD)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <SlopesRow key={row.hill} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SlopesTable;

// <TableCell align="right">{row.currentbase}</TableCell>
// <TableCell align="right">{row.price.adultful}</TableCell>
// <TableCell align="right">{row.websiteprices}</TableCell>

// function Row(props: { row: ReturnType<typeof createData> }) {
//     const { row } = props;
//     const [open, setOpen] = React.useState(false);
  
//     return (
//       <React.Fragment>
//         <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//           <TableCell>
//             <IconButton
//               aria-label="expand row"
//               size="small"
//               onClick={() => setOpen(!open)}
//             >
//               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//             </IconButton>
//           </TableCell>
//           <TableCell component="th" scope="row">
//             {row.name}
//           </TableCell>
//           <TableCell align="right">{row.calories}</TableCell>
//           <TableCell align="right">{row.fat}</TableCell>
//           <TableCell align="right">{row.carbs}</TableCell>
//           <TableCell align="right">{row.protein}</TableCell>
//         </TableRow>
//         <TableRow>
//           <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//               <Box sx={{ margin: 1 }}>
//                 <Typography variant="h6" gutterBottom component="div">
//                   History
//                 </Typography>
//                 <Table size="small" aria-label="purchases">
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Customer</TableCell>
//                       <TableCell align="right">Amount</TableCell>
//                       <TableCell align="right">Total price ($)</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {row.history.map((historyRow) => (
//                       <TableRow key={historyRow.date}>
//                         <TableCell component="th" scope="row">
//                           {historyRow.date}
//                         </TableCell>
//                         <TableCell>{historyRow.customerId}</TableCell>
//                         <TableCell align="right">{historyRow.amount}</TableCell>
//                         <TableCell align="right">
//                           {Math.round(historyRow.amount * row.price * 100) / 100}
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </Box>
//             </Collapse>
//           </TableCell>
//         </TableRow>
//       </React.Fragment>
//     );
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//     createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//     createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//     createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
//   ];
  
//   export default function CollapsibleTable() {
//     return (
//       <TableContainer component={Paper}>
//         <Table aria-label="collapsible table">
//           <TableHead>
//             <TableRow>
//               <TableCell />
//               <TableCell>Dessert (100g serving)</TableCell>
//               <TableCell align="right">Calories</TableCell>
//               <TableCell align="right">Fat&nbsp;(g)</TableCell>
//               <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//               <TableCell align="right">Protein&nbsp;(g)</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <Row key={row.name} row={row} />
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
//   }