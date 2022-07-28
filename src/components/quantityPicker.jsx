import "./quantityPicker.css";
import {useState} from 'react';

const QuantityPicker = (props) => {
    let [quantity, setQuantity] = useState(1);


    
   
    const handleIncrease = () => {
        let newVal = quantity + 1;
        setQuantity(newVal);
        props.onChange(newVal);
    };

    const handleDecrease = () => {
        if (quantity > 1){
            let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
        };
    };

    

    return(
        <div className="quantityPicker">
            <button className="btn btn-secondary btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-secondary btn-sm" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;

// create a quantity state variable when qty changes, set value to the state var, on total multiply price * quantity