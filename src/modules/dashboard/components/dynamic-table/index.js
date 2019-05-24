import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { StyledTableRow } from './styled';

function DynamicTable({data,headers,style,className}) {
  /*const data = props.data
  const headers = props.headers*/
  //const {data,headers} = props;
  const values = Object.values(headers)
  const keys = Object.keys(headers)
  
  return (
    <Table style={style} className={className}>
        <TableHead >
          <TableRow>
            {values.map((item)=>{
              return <TableCell> {item}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <StyledTableRow  key={index}>
            {keys.map((key)=>{
              return <TableCell style={{border : "none"}}> {row[key]}</TableCell>
            })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default DynamicTable
