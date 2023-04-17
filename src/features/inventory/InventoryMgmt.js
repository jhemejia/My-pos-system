import React, { useState } from "react";
import  Styles  from "../../Styles/styles.module.scss";
import Table from "../table/Table";
import CreateProduct from './CreateProduct';

export function InventoryMgmt(props){
    const { allProducts } = props;
    const [numberPerPage, setNumberPerPage] = useState(10);   
    const [modal, setModal] = useState(false)
    const productsLength = allProducts?.length
    const toggleModal =()=>{
        setModal(!modal);
    }

    return (
        <>
        <div className={Styles.inventory}>
        <h2>Inventory Management</h2>
        <button onClick={toggleModal}>Add Product</button>
        {modal && ( <CreateProduct productsLength={productsLength} /> )}
        <div className={Styles.tableTitle}>
        <h3>Product List</h3> 
        <div className={Styles.numberPerPage}>
        <select value={numberPerPage} onChange={(e)=>setNumberPerPage(e.target.value)}>
            <option value="10" >10</option>
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