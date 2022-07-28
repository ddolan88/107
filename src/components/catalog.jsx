import {useState} from 'react';
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataServices";
import { useEffect } from 'react';


// another way to create a function
const Catalog = () =>{
    

    let[products, setProducts] = useState([]);

    const loadCatalog =  async () => {
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);
    }

    useEffect(()=>{
        loadCatalog();
    },[]);
    return(
        <div className="catalog">
            <h2>This is a catalog</h2>
            <h3>We have {products.length} products!</h3>
            {
                products.map((prod =>
                <Product key={prod.id} data={prod}></Product>))
            }
        </div>
    );
}

export default Catalog;