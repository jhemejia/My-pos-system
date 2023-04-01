import React, { useState } from "react";
import  Styles  from "../../Styles/styles.module.scss";
import Table from "../table/Table";
import CreateProduct from './CreateProduct';

export function InventoryMgmt(props){
    const { allProducts } = props;
    const [numberPerPage, setNumberPerPage] = useState(10);   

    return (
        <>
        <div>
        <h2>Inventory Management</h2>
        <CreateProduct />
        <div className={Styles.tableTitle}>
        <h3>Edit Product</h3> 
        <div className={Styles.numberPerPage}>
        <select onChange={(e)=>setNumberPerPage(e.target.value)}>
            <option value="10" selected>10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="50">50</option>
        </select>
        <span>Per Page</span>
        </div>
        </div>
        <div className={Styles.tableWrapper}>
        <Table data={allProducts} rowsPerPage={numberPerPage} />
        </div>
        </div>
        </>
    );
}