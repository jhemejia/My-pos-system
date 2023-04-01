import React from 'react';
import { InventoryMgmt } from '../features/inventory/InventoryMgmt.js';
import Styles from '../Styles/styles.module.scss';
import { Spinner } from '../components/Spinner.js';
import { useProducts } from '../hooks/useProducts';

export default function InventoryPage() {
 const  { isLoading, allProducts } = useProducts();
  
    return  (
      <div className={Styles.inventoryPage}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
          <InventoryMgmt allProducts={allProducts.inventory.products} />
          </> )}
    </div>
  );
}