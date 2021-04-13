import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#3f50b5',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default function CurrencyList(props) {
  const {currencyData} = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CurrencyCode</StyledTableCell>
            <StyledTableCell align="right">Quotes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {currencyData.map((row) => (
            <StyledTableRow key={row.currency}>
              <StyledTableCell component="th" scope="row">
                {row.currency}
              </StyledTableCell>
              <TableCell align="right">{row.quote}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
