import React from 'react';
import { Grid } from '@material-ui/core';
import SectionInfo from '../../../../components/section-info';
import { title, description,demoData,headers,options } from './consts';
import DynamicTable from '../../../../components/dynamic-table';
import TableMenu from '../../../../components/table-menu';



function Users() {
  return (
    <>
      <Grid container>
        <SectionInfo title={title} description={description} />
      </Grid>
      <Grid>
        <DynamicTable data = {demoData.map((item)=>{
          item.menu = <TableMenu option={options}></TableMenu>
          return item
        })} headers = {headers} style={{ }}></DynamicTable>
      </Grid> 
    </>
  );
}

export default Users;
