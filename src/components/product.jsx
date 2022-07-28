import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useState, useContext} from 'react';
import StoreContext from "./../context/storeContext";


const Product = (props) => { 
    let [quantity,  setQuantity] = useState (1);
    let globalAddProduct = useContext (StoreContext).addProduct;

    const quantityChange = (val) =>{
        setQuantity(val);
    };

    const getTotal =() => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    };

    const addMessage = () => {
    console.log('add button clicked');
    };

    return (
    <div className="product">
        <img src={"/images/" + props.data.image}/>
        <h2>{props.data.title}</h2>
        <label>${(+props.data.price).toFixed(2)}</label>
        <label>total: ${getTotal()}</label>
        <QuantityPicker onChange={quantityChange}></QuantityPicker>
        <button className="btn btn-primary btn-sm" onClick={addMessage}>Add</button>
    </div>

    );
}



export default Product;