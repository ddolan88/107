import { useState } from 'react';
import './admin.css';
import DataService from '../services/dataServices';

const Admin  = () => {
    const [coupon,setCoupon] = useState({});
    const [product, setProduct] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);


    const handleCouponChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = { ...coupon }; //create a copy
        copy[name] = value; // modify the copy
        setCoupon(copy); //set the copy state back to the original state


        // console.log(name, value);
        // console.log(e.target.value);
    };
    const saveCoupon =() => {
        let copy ={...coupon};
        let discount = parseFloat(copy.discount);
        copy.discount = discount;

        console.log(copy);

        let copyCoupons = [...allCoupons];
        copyCoupons.push(copy);
        setAllCoupons(copyCoupons);
    };
    
    const handleProductChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    };
    const saveProduct = () => {
        let copy = { ...product};
        let price = parseFloat(copy.price)
        console.log(copy);

        // save copy on the server
        let service = new DataService();
        service.saveProduct(copy);

        let copyAllProds = [...allProducts];
        copyAllProds.push(copy);
        setAllProducts(copyAllProds);
    };

    return( 
        <div className="admin-page">
            <h1>Store Admin</h1>
            <div className="parent">
                <section className='products'>
                    <h3>Poduct info:</h3>
                    <div className='form'>
                        <section className='productInfo'>
                            <div className='my-control'>
                                <label>Product Price:</label>
                                <input type="number" onChange={handleProductChange}/>
                            </div>
                            <div className='my-control'>
                                <label>Product title:</label>
                                <input type="text" onChange={handleProductChange}/>
                            </div>
                        </section>
                    </div>
                </section>
                <section className='coupons'>
                    <h3>Coupon Codes:</h3>
                    <div className="form">
                        <div className="my-control">
                            <label>Coupon</label>
                            <input name="code" onBlur={handleCouponChange} type="text"/>
                        </div>
                        <div className="my-control">
                            <label>Code:</label>
                            <input n type="number" />
                        </div>
                        <div className='my-control'>
                            <label>Discount:</label>
                            <input type="number" onChange={handleCouponChange} />
                        </div>
                        <div className='my-control' onClick='saveCouponCode'>
                            <button className="btn btn-primary" onClick={saveCoupon}>Save Coupon</button>
                        </div>
                    </div>
                </section>    
            </div>
        </div>
    );
};



export default Admin;