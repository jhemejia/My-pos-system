import { useState, useEffect } from "react";

export const useCategories = () =>{
 // const categories = ["smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"];
 const [categories, setCategories] = useState([]);
 useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(json => setCategories(json))
 },[])

 return {
    categories
 }
}