import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import sun from "../icons/sun.png";
import suncloud from "../icons/suncloud.png";
import cloud from "../icons/cloud.svg";
import rain from "../icons/rain.png";
import snow from "../icons/snow.png";

const SlopesRow = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    const weather = row.weatherreport;
    const weatherrow = [{day: "prevDay3", conditions: weather.prevDay3}, {day: "prevDay2", conditions: weather.prevDay2},
                        {day: "prevDay1", conditions: weather.prevDay1}, {day: "current", conditions: weather.current},
                        {day: "futureDay1", conditions: weather.futureDay1}, {day: "futureDay2", conditions: weather.futureDay2},
                        {day: "futureDay3", conditions: weather.futureDay3}];
      
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.hill}
          </TableCell>
          <TableCell align="right">{row.weatherreport.current.temperature}{"\u00B0"}F</TableCell>
          <TableCell align="right">{row.currentbase}"</TableCell>
          <TableCell align="right"><a href={row.websiteprices}>${row.price.adultfull}</a></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Weather Forcast
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Day</TableCell>
                      <TableCell>Temperature</TableCell>
                      <TableCell>Expected Snow (inches)</TableCell>
                      <TableCell>Wind</TableCell>
                      <TableCell>Cloud Coverage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {weatherrow.map((row) => (
                      <TableRow key={row.day}>
                        <TableCell component="th" scope="row">
                          {row.day}
                        </TableCell>
                        <TableCell>{row.conditions.temperature}{"\u00B0"}F</TableCell>
                        <TableCell>{row.conditions.snowinches}"</TableCell>
                        <TableCell>{row.conditions.wind}mph</TableCell>
                        <TableCell><img src={row.conditions.sun === "sun" ? sun : 
                                             row.conditions.sun === "suncloud" ? suncloud :
                                             row.conditions.sun === "cloud" ? cloud :
                                             row.conditions.sun === "rain" ? rain : snow} width="25" height="25"/></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  export default SlopesRow;