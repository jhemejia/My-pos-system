import React, { useState } from "react";
import useTable from "../../hooks/useTable";
import Styles from "../../Styles/styles.module.scss";
import TableFooter from "../../components/Table/TableFooter";
import ReadOnlyRow from "../../components/Table/ReadOnlyRow";
import EditableRow from "../../components/Table/EditableRow";


const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    const [editProductId, setEditProductId ] = useState();
    

    const handleEditClick = (event, product) =>{
      event.preventDefault();
      setEditProductId(product.id)
    }

    const handleClickCancel = (event)=>{
      event.preventDefault();
      setEditProductId("");
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();  
        setEditProductId("");
      }
    return (
        <>
        <form onSubmit={handleFormSubmit} >
        <table className={Styles.flTable}>
          <thead className={Styles.tableRowHeader}>
            <tr>
                <th width="5%">Id</th>
                <th width="15%">Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th width="8%" >Price</th>
                <th width="12%">Brand</th>
                <th width="15%">Category</th>
                <th width="10%">Action</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((product) => ( 
              <>
              { editProductId === product.id? 
              <EditableRow product={product} handleClickCancel={(e)=> handleClickCancel(e)}/> :
              <ReadOnlyRow product={product} handleEditClick={(e)=> handleEditClick(e, product)}/>
              }
              </> 
            ))}
          </tbody>
        </table>
        </form>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </>
    );
};

export default Table;