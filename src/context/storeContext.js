import React from 'react';


// Context describes the data and functions that will exist in the store

// This contains only the definition, NO IMPLEMENTATION  can be done here


const StoreContext = React.createContext({
    cart: [],
    user: {},

    addProduct: () => {},
    removeProduct: () => {},
});

export default StoreContext;