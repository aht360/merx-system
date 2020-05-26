import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

function createData(mes, consumo, contrato, lastro, status, percent) {
  return { mes, consumo, contrato, lastro, status, percent };
}

const rows = [
  createData('Mar/19', '159,13', '192,15','0,02', <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>, '0%'),
  createData('Mar/19', '159,13', '192,15','0,02', <FontAwesomeIcon icon={faTimes} className="verticalIcon" style={{color: "red"}}/>, '0%'),
  createData('Mar/19', '159,13', '192,15','0,02', <FontAwesomeIcon icon={faExclamation} className="verticalIcon" style={{color: "#FF9C27"}}/>, '0%'),
  createData('Mar/19', '159,13', '192,15','0,02', <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>, '0%'),
  createData('Mar/19', '159,13', '192,15','0,02', <FontAwesomeIcon icon={faExclamation} className="verticalIcon" style={{color: "#FF9C27"}}/>, '0%'),
  createData('Mar/19', '159,13', '192,15','0,02', <FontAwesomeIcon icon={faCheck} className="verticalIcon" style={{color: "green"}}/>, '0%'),
  createData('Mar/19', '159,13', '192,15','0,02', <FontAwesomeIcon icon={faTimes} className="verticalIcon" style={{color: "red"}}/>, '0%')
  
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight: "bold"}}>Mês/Ano</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="right">Consumo</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="right">Contrato</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="right">Lastro</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="right">Status</TableCell>
                    <TableCell style={{fontWeight: "bold"}} align="right">%</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>

                {rows.map((row) => (
                    <TableRow key={row.mes}>

                    <TableCell component="th" scope="row">
                        {row.mes}
                    </TableCell>
                        <TableCell align="right">{row.consumo}</TableCell>
                        <TableCell align="right">{row.contrato}</TableCell>
                        <TableCell align="right">{row.lastro}</TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.percent}</TableCell>

                    </TableRow>
                ))}

            </TableBody>

        </Table>
    </TableContainer>
  );
}
